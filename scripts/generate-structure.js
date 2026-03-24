import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 解析命令行参数，获取 DEBUG 模式
const DEBUG = process.argv.includes('--debug');

// Worker URL 配置
const WORKER_URL_PROD = 'https://course-sharing-download.fm-course.workers.dev';
const WORKER_URL_DEBUG = 'http://localhost:8787';

// 分类映射
const categoryMap = {
  'MR': 'Major Require',
  'ME': 'Major Elective',
  'FE': 'Free Elective',
  'GE': 'General Education',
  'UC': 'University Core',
  'Other': 'Other Materials'
};

/**
 * 将manifest字典转换为JSON格式的目录结构
 * @param {Object} manifest - manifest字典
 * @param {string} courseName - 课程名称
 * @returns {Array} 目录结构数组
 */
function manifestToJson(manifest, courseName) {
  const files = manifest.files || {};
  const root = {};
  const WORKER_URL = DEBUG ? WORKER_URL_DEBUG : WORKER_URL_PROD;

  // 构建目录树，同时记录完整路径
  for (const [filePath, fileHash] of Object.entries(files)) {
    const parts = filePath.split('/');
    let current = root;

    // 遍历路径的每一部分
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        // 最后一个部分是文件
        current[part] = {
          name: part,
          type: 'file',
          fullPath: filePath, // 保存完整路径
          // hash: fileHash // 如果需要文件哈希，可以取消注释这一行
        };
      } else {
        // 目录部分
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  }

  // 递归检查一个节点及其子节点是否包含文件
  function hasAnyFiles(node) {
    if (typeof node === 'object' && node !== null) {
      if (node.type === 'file') {
        return true;
      }
      for (const child of Object.values(node)) {
        if (hasAnyFiles(child)) {
          return true;
        }
      }
    }
    return false;
  }

  // 递归构建结果
  function buildResult(node, parentName = null, parentPath = '') {
    if (typeof node === 'object' && node !== null) {
      // 检查是否是文件节点（有type属性）
      if (node.type === 'file') {
        const fullPath = `${courseName}/${node.fullPath}`;
        // 编码路径，但保留斜杠
        const encodedPath = fullPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
        return {
          name: node.name,
          type: 'file',
          downloadUrl: `${WORKER_URL}/download/${encodedPath}`,
          downloadText: `下载 ${node.name}`
        };
      }

      // 检查是否是目录节点（没有type属性，但有子节点）
      const children = [];

      // 构建当前文件夹的完整路径
      const currentFolderPath = parentPath
        ? `${parentPath}/${parentName}`
        : (parentName || '');

      for (const [key, value] of Object.entries(node)) {
        const child = buildResult(value, key, currentFolderPath);
        if (child) {
          children.push(child);
        }
      }

      if (children.length > 0) {
        // 如果有父名称，返回目录结构
        if (parentName) {
          const fullPath = `${courseName}/${currentFolderPath}`;
          const result = {
            name: parentName,
            type: 'directory',
            isOpen: false, // 默认目录节点为关闭状态
            children: children
          };

          // 只要文件夹（及其子文件夹）包含文件，就添加下载链接
          if (hasAnyFiles(node)) {
            // 编码路径，但保留斜杠
            const encodedPath = fullPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
            result.downloadUrl = `${WORKER_URL}/download/${encodedPath}/`;
            result.downloadText = `下载整个 ${parentName} 文件夹 (ZIP格式)`;
          }

          return result;
        }
        // 如果是根目录，直接返回children列表
        return children;
      }
    }
    return null;
  }

  // 构建结果
  const result = buildResult(root);
  return result || [];
}

/**
 * 将目录结构写入markdown文件
 * @param {Array} structure - 目录结构数组
 * @param {string} outputPath - 输出目录路径
 * @param {string} templatePath - 模板文件路径
 * @param {string} courseInfoPath - 课程信息文件路径
 */
function writeMarkdown(structure, outputPath, templatePath, courseInfoPath) {
  // 加载模板
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  // 加载课程信息
  const courseInfo = JSON.parse(fs.readFileSync(courseInfoPath, 'utf8'));

  // 确保输出目录存在
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // 渲染每个课程的页面
  for (const course of structure) {
    const courseData = courseInfo[course.name] || {};
    const courseTitle = courseData.title || course.name.replace(/-/g, ' ');
    const courseComment = courseData.comment || '';
    const courseStructure = course.children || [];

    // 渲染模板
    const renderedContent = templateContent
      .replace(/{{ course_title }}/g, courseTitle)
      .replace(/{{ course_comment }}/g, courseComment)
      .replace(/{{ course_structure }}/g, JSON.stringify(courseStructure, null, 2));

    // 写入文件
    const courseOutputPath = path.join(outputPath, `${course.name}.md`);
    fs.writeFileSync(courseOutputPath, renderedContent);
    console.log(`Generated: ${course.name}.md (${courseStructure.length} 个文件夹/文件)`);
  }
}

/**
 * 生成课程列表页面
 * @param {Array} allCourses - 所有课程信息
 * @param {Object} coursesByCategory - 按分类分组的课程
 * @param {string} outputDir - 输出目录
 */
function generateCoursesListPage(allCourses, coursesByCategory, outputDir) {
  let content = `# 课程列表\n\n`;
  content += `共收录 **${allCourses.length}** 门课程\n\n`;
  content += `| 课程名称 | 课程代码 | 分类 | 文件数量 |\n`;
  content += `|----------|----------|------|----------|\n`;

  // 按分类显示课程
  Object.keys(categoryMap).forEach(category => {
    const courses = coursesByCategory[category] || [];
    if (courses.length === 0) return;

    // content += `## ${categoryMap[category]} (${courses.length})\n\n`;
    
    courses.forEach(course => {
      const courseSlug = course.path.replace(/ /g, '-');
      content += `| [${course.title}](${courseSlug}.md) | ${course.code} | ${categoryMap[category] || category} | ${course.files.length} |\n`;
    });

    // content += `\n`;
  });

  const outputPath = path.join(outputDir, 'index.md');
  fs.writeFileSync(outputPath, content);
  console.log('Generated courses list page');
}

/**
 * 生成分类索引页面
 * @param {Object} coursesByCategory - 按分类分组的课程
 * @param {string} outputDir - 输出目录
 */
function generateCategoryIndexPage(coursesByCategory, outputDir) {
  // 确保分类目录存在
  const categoriesDir = path.join(outputDir, '../courses');
  if (!fs.existsSync(categoriesDir)) {
    fs.mkdirSync(categoriesDir, { recursive: true });
  }

  let content = `# 课程分类\n\n`;
  content += `以下是按分类组织的课程列表：\n\n`;

  // 按分类显示课程
  Object.keys(categoryMap).forEach(category => {
    const courses = coursesByCategory[category] || [];
    if (courses.length === 0) return;

    const categoryName = categoryMap[category] || category;
    content += `## ${categoryName} (${courses.length})\n\n`;

    // 使用列点样式显示课程
    courses.forEach(course => {
      const courseSlug = course.path.replace(/ /g, '-');
      content += `- **[${course.title}](../courses/${courseSlug}.md)**`;

      // 添加课程代码（如果有且不是空或"-"）
      if (course.code && course.code.trim() !== '' && course.code.trim() !== '-') {
        content += ` - ${course.code}`;
      }

      // 添加文件数量
      content += ` (${course.files.length} 个文件)\n`;
    });

    content += `\n`;
  });

  const outputPath = path.join(categoriesDir, 'categories.md');
  fs.writeFileSync(outputPath, content);
  console.log('Generated category index page');
}

/**
 * 从course-info.json读取课程元数据
 * @param {string} courseInfoPath - course-info.json文件路径
 * @param {Object} manifest - 文件结构manifest数据（用于获取文件数量）
 * @returns {Object} 包含所有课程和按分类分组的课程
 */
function readCourseMetadata(courseInfoPath, manifest) {
  const allCourses = [];
  const coursesByCategory = {};

  try {
    // 读取course-info.json文件
    const courseInfoData = JSON.parse(fs.readFileSync(courseInfoPath, 'utf8'));

    // 处理每个课程
    Object.entries(courseInfoData).forEach(([courseName, courseData]) => {
      // 从manifest中获取该课程的文件数量
      const courseFiles = Object.keys(manifest.files || {})
        .filter(filePath => filePath.startsWith(courseName + '/'))
        .length;

      // 提取课程信息
      const courseInfo = {
        path: courseName,
        title: courseData.title || courseName.replace(/-/g, ' '),
        code: courseData.code || '',
        category: courseData.category || 'Other',
        rank: courseData.rank || '0',
        files: Array(courseFiles).fill(''), // 创建占位数组，长度等于文件数量
        comment: courseData.comment || ''
      };

      allCourses.push(courseInfo);

      // 按分类分组
      const category = courseInfo.category;
      if (!coursesByCategory[category]) {
        coursesByCategory[category] = [];
      }
      coursesByCategory[category].push(courseInfo);
    });

    // 按rank排序
    allCourses.sort((a, b) => {
      const rankA = a.rank ? a.rank.toString().split('.').map(Number) : [0];
      const rankB = b.rank ? b.rank.toString().split('.').map(Number) : [0];

      for (let i = 0; i < Math.max(rankA.length, rankB.length); i++) {
        const partA = rankA[i] || 0;
        const partB = rankB[i] || 0;
        if (partA !== partB) {
          return partA - partB;
        }
      }
      return 0;
    });

    // 每个分类内的课程也按rank排序
    Object.keys(coursesByCategory).forEach(category => {
      coursesByCategory[category].sort((a, b) => {
        const rankA = a.rank ? a.rank.toString().split('.').map(Number) : [0];
        const rankB = b.rank ? b.rank.toString().split('.').map(Number) : [0];

        for (let i = 0; i < Math.max(rankA.length, rankB.length); i++) {
          const partA = rankA[i] || 0;
          const partB = rankB[i] || 0;
          if (partA !== partB) {
            return partA - partB;
          }
        }
        return 0;
      });
    });

  } catch (error) {
    console.error(`Error reading course-info.json:`, error.message);
  }

  return { allCourses, coursesByCategory };
}

/**
 * 主函数
 */
async function main() {
  console.log(`Starting generation process... (${DEBUG ? 'DEBUG模式' : '生产模式'})`);

  // 根据模式选择文档目录
  const docsDir = DEBUG ? 'docs-debug' : 'docs';
  console.log(`使用文档目录: ${docsDir}`);

  // 路径配置
  const manifestPath = path.join(__dirname, `../${docsDir}/.vitepress/public/manifest.json`);
  const outputDir = path.join(__dirname, `../${docsDir}/courses`);
  const templatePath = path.join(__dirname, `../${docsDir}/.vitepress/templates/course_template.md`);
  const courseInfoPath = path.join(__dirname, `../${docsDir}/.vitepress/public/course-info.json`);

  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // 1. 读取文件结构manifest.json（用于生成课程页面）
    console.log('Reading file structure manifest.json...');
    const fileStructureManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    // 2. 生成目录结构
    console.log('Generating directory structure...');
    const structureList = [];

    // 为每个课程生成目录结构
    for (const course of Object.keys(fileStructureManifest.files || {})) {
      const courseName = course.split('/')[0];
      if (!structureList.find(c => c.name === courseName)) {
        // 提取该课程的文件
        const courseFiles = {};
        for (const [filePath, fileHash] of Object.entries(fileStructureManifest.files)) {
          if (filePath.startsWith(courseName + '/')) {
            const relativePath = filePath.substring(courseName.length + 1);
            courseFiles[relativePath] = fileHash;
          }
        }

        const courseManifest = {
          version: fileStructureManifest.version,
          total_files: Object.keys(courseFiles).length,
          files: courseFiles
        };

        const courseStructure = manifestToJson(courseManifest, courseName);
        if (courseStructure.length > 0) {
          structureList.push({
            name: courseName,
            type: 'directory',
            isOpen: false,
            children: courseStructure
          });
        }
      }
    }

    // 3. 生成课程页面（使用模板）
    console.log('Generating course pages from template...');
    writeMarkdown(structureList, outputDir, templatePath, courseInfoPath);

    // 4. 从course-info.json读取课程元数据
    console.log('Reading course metadata from course-info.json...');
    const { allCourses, coursesByCategory } = readCourseMetadata(courseInfoPath, fileStructureManifest);

    // 5. 生成课程列表页面
    console.log('Generating courses list page...');
    generateCoursesListPage(allCourses, coursesByCategory, outputDir);

    // 6. 生成分类索引页面
    console.log('Generating category index page...');
    generateCategoryIndexPage(coursesByCategory, outputDir);

    console.log(`\nGeneration completed successfully!`);
    console.log(`- Generated ${structureList.length} course pages from template`);
    console.log(`- Processed ${allCourses.length} courses from course-info.json`);
    console.log(`- Generated courses list page: ${path.join(outputDir, 'index.md')}`);
    console.log(`- Generated category index page: ${path.join(outputDir, '../categories/index.md')}`);

  } catch (error) {
    console.error('Error during generation:', error);
    process.exit(1);
  }
}

// 执行主函数
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  manifestToJson,
  writeMarkdown,
  generateCoursesListPage,
  generateCategoryIndexPage,
  readCourseMetadata
};