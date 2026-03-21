/**
 * 测试前端下载集成
 * 验证生成的下载链接是否正确
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testDownloadIntegration() {
  console.log('🚀 测试前端下载集成\n');

  const COURSE_PAGE_PATH = path.join(__dirname, 'docs/courses/Advanced-Financial-Mathematics.md');

  try {
    // 1. 读取课程页面
    console.log('1. 读取课程页面...');
    const content = fs.readFileSync(COURSE_PAGE_PATH, 'utf8');

    // 2. 提取JSON数据
    console.log('2. 提取JSON数据...');
    const jsonMatch = content.match(/const treeData = reactive\((\[.*?\])\)/s);
    if (!jsonMatch) {
      throw new Error('无法找到treeData JSON数据');
    }

    const jsonStr = jsonMatch[1];
    const treeData = JSON.parse(jsonStr);

    console.log(`✅ 成功解析JSON数据，包含 ${treeData.length} 个顶级项目`);

    // 3. 验证数据结构
    console.log('\n3. 验证数据结构...');
    let fileCount = 0;
    let folderCount = 0;

    function traverse(items) {
      for (const item of items) {
        if (item.type === 'file') {
          fileCount++;
          console.log(`  文件: ${item.name}`);
          console.log(`    URL: ${item.downloadUrl}`);
          console.log(`    文本: ${item.downloadText}`);

          // 验证URL格式
          if (!item.downloadUrl.includes('https://course-sharing-download.fm-course.workers.dev/download/')) {
            console.warn(`  ⚠ 文件URL格式不正确: ${item.downloadUrl}`);
          }
        } else if (item.type === 'directory') {
          folderCount++;
          console.log(`  文件夹: ${item.name}`);
          if (item.downloadUrl) {
            console.log(`    URL: ${item.downloadUrl}`);
            console.log(`    文本: ${item.downloadText}`);

            // 验证文件夹URL以斜杠结尾
            if (!item.downloadUrl.endsWith('/')) {
              console.warn(`  ⚠ 文件夹URL应该以斜杠结尾: ${item.downloadUrl}`);
            }
          } else {
            console.log(`    (无下载链接 - 可能是空文件夹)`);
          }

          if (item.children && item.children.length > 0) {
            traverse(item.children);
          }
        }
      }
    }

    traverse(treeData);

    console.log(`\n📊 统计:`);
    console.log(`  - 文件总数: ${fileCount}`);
    console.log(`  - 文件夹总数: ${folderCount}`);

    // 4. 测试Worker连接
    console.log('\n4. 测试Worker连接...');
    const WORKER_URL = 'https://course-sharing-download.fm-course.workers.dev';

    try {
      const healthResponse = await fetch(`${WORKER_URL}/health`);
      if (healthResponse.ok) {
        console.log('✅ Worker健康检查正常');
      } else {
        console.warn(`⚠ Worker健康检查失败: ${healthResponse.status}`);
      }
    } catch (error) {
      console.warn(`⚠ 无法连接到Worker: ${error.message}`);
    }

    // 5. 验证示例文件
    console.log('\n5. 验证示例文件下载...');
    const sampleFile = treeData[0]?.children?.[0];
    if (sampleFile && sampleFile.type === 'file') {
      console.log(`  示例文件: ${sampleFile.name}`);
      console.log(`  下载URL: ${sampleFile.downloadUrl}`);

      // 测试URL编码
      const encodedUrl = sampleFile.downloadUrl;
      console.log(`  编码验证: ${encodedUrl.includes('%2F') ? '✅ URL已正确编码' : '⚠ URL可能未正确编码'}`);
    }

    console.log('\n🎉 前端下载集成测试完成！');
    console.log('\n📝 下一步:');
    console.log('1. 访问 http://localhost:5173 查看前端页面');
    console.log('2. 点击课程页面中的下载按钮测试功能');
    console.log('3. 验证文件能否正常下载');
    console.log('4. 验证文件夹ZIP下载功能');

    return true;
  } catch (error) {
    console.error('测试失败:', error.message);
    return false;
  }
}

// 运行测试
if (import.meta.url === `file://${process.argv[1]}`) {
  testDownloadIntegration().catch(error => {
    console.error('测试运行失败:', error);
    process.exit(1);
  });
}

export { testDownloadIntegration };