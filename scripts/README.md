# 生成脚本说明

## 脚本文件

### `generate-structure.js`
这是主要的生成脚本，合并了以下功能：
1. 从Python脚本移植的`manifest_to_json`和`write_markdown`功能
2. 从`generate-courses.js`中提取的课程列表生成功能

### `generate-courses.js`
旧的生成脚本，已不再使用，保留作为参考。

## 功能说明

### 1. 生成课程页面
- 读取`docs/.vitepress/public/manifest.json`（文件结构）
- 将文件结构转换为JSON格式的目录树
- 使用`docs/.vitepress/templates/course_template.md`模板生成每个课程的页面
- 包含评论数据（从`docs/.vitepress/public/comments.json`读取）

### 2. 生成课程列表页面
- 读取`metadata/manifest.json`（课程元数据）
- 读取`metadata/index/`目录中的课程JSON文件
- 生成课程列表页面（`docs/courses/index.md`）
- 按分类分组显示课程

## 使用方法

### 安装依赖
```bash
npm install
```

### 生成页面
```bash
npm run generate
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

### 完整部署流程
```bash
npm run deploy  # 相当于 npm run generate && npm run build
```

## 文件结构

```
frontend-vitepress/
├── docs/
│   ├── .vitepress/
│   │   ├── public/
│   │   │   ├── manifest.json      # 文件结构manifest
│   │   │   └── comments.json      # 课程评论数据
│   │   ├── templates/
│   │   │   └── course_template.md # 课程页面模板
│   │   └── ...
│   └── courses/                   # 生成的课程页面
├── scripts/
│   ├── generate-structure.js      # 主生成脚本
│   └── generate-courses.js        # 旧脚本（参考）
└── package.json
```

## 数据源

1. **文件结构数据**: `docs/.vitepress/public/manifest.json`
   - 包含所有课程文件的路径和哈希值
   - 用于生成课程的文件列表
   - 由根目录的`manifest.py`脚本生成

2. **课程完整信息**: `docs/.vitepress/public/course-info.json`
   - 包含课程的完整信息：标题、代码、分类、优先级、评论等
   - 合并了metadata/index/root.json中的元数据和content目录中的评论
   - 由根目录的`manifest.py`脚本生成
   - 用于生成课程页面的标题和评论部分

3. **课程元数据**: `metadata/manifest.json` 和 `metadata/index/`目录
   - 包含课程的基本信息（标题、代码、分类、优先级等）
   - 用于生成课程列表和分类页面

4. **评论数据（旧）**: `docs/.vitepress/public/comments.json`
   - 仅包含课程评论/描述（向后兼容）
   - 由根目录的`manifest.py`脚本生成

## 模板系统

课程页面使用Jinja2风格的模板（通过字符串替换实现）：
- `{{ course_title }}`: 课程标题
- `{{ course_comment }}`: 课程评论
- `{{ course_structure }}`: 文件目录结构的JSON字符串

模板文件：`docs/.vitepress/templates/course_template.md`