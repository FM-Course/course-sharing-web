# BNBU-FM课程攻略 - VitePress前端

基于VitePress的课程资料系统前端界面，使用metadata生成类似markdown样式的前端页面，支持显示课程中的文件内容。

## 功能特性

- 📚 **课程资料展示**：从metadata自动生成课程页面
- 📁 **文件分类**：按文件夹组织课程文件
- 🔍 **分类浏览**：按课程分类（MR、ME、GE等）浏览
- 📄 **文件预览**：支持PDF等文件在线预览
- 🔄 **自动生成**：从metadata自动生成所有页面
- 📱 **响应式设计**：适配各种设备屏幕

## 项目结构

```
frontend-vitepress/
├── docs/                    # 文档根目录
│   ├── .vitepress/         # VitePress配置
│   │   └── config.js       # 配置文件
│   ├── index.md            # 首页
│   ├── courses/            # 课程页面（自动生成）
│   ├── categories/         # 分类页面（自动生成）
│   ├── guide/             # 使用指南
│   ├── contribute/         # 贡献指南
│   └── thanks/            # 致谢页面
├── scripts/
│   └── generate-courses.js # 课程页面生成脚本
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 生成课程页面

```bash
npm run generate
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果。

### 4. 构建生产版本

```bash
npm run build
```

构建结果在 `docs/.vitepress/dist` 目录。

### 5. 预览生产版本

```bash
npm run preview
```

## 脚本说明

### 生成课程页面

```bash
npm run generate
```

从 `../metadata/index/` 目录读取课程JSON文件，自动生成：
- `docs/courses/` - 所有课程页面
- `docs/courses/index.md` - 课程列表页面
- `docs/categories/index.md` - 分类浏览页面

### 一键部署

```bash
npm run deploy
```

相当于执行 `npm run generate && npm run build`，生成页面并构建生产版本。

## 配置说明

### 分类映射

在 `scripts/generate-courses.js` 中定义分类映射：

```javascript
const categoryMap = {
  'MR': 'Major Require',
  'ME': 'Major Elective',
  'FE': 'Free Elective',
  'GE': 'General Education',
  'UC': 'University Core',
  'Other': 'Other Materials'
};
```

### 文件链接格式

课程文件链接使用GitHub Raw URL格式：
```
https://raw.githubusercontent.com/FM-Course/bnbu-fm-course-sharing/master/content/{课程路径}/{文件路径}
```

## 开发指南

### 添加新页面

1. 在 `docs/` 目录下创建 `.md` 文件
2. 在 `docs/.vitepress/config.js` 中添加导航链接

### 修改样式

1. 创建 `docs/.vitepress/theme/` 目录
2. 添加自定义CSS文件
3. 在配置中引入

### 添加功能组件

VitePress支持Vue组件，可以在 `.md` 文件中使用：

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">点击次数: {{ count }}</button>
</template>
```

## 与metadata集成

### metadata结构

课程metadata文件位于 `../metadata/index/` 目录，格式如下：

```json
{
  "path": "Linear-Algebra-I",
  "title": "Linear Algebra I",
  "code": "MATH1053",
  "category": "MR",
  "rank": "1.1.2",
  "files": [
    {
      "name": "HW1a.pdf",
      "path": "Homework-22fall/HW1a.pdf",
      "size": 85938,
      "sha256": "...",
      "type": "pdf"
    }
  ]
}
```

### 自动更新

当metadata更新时，重新运行生成脚本：

```bash
npm run generate
```

## 部署指南

### GitHub Pages

1. 构建项目：`npm run deploy`
2. 将 `docs/.vitepress/dist` 目录内容推送到 `gh-pages` 分支
3. 在GitHub仓库设置中启用GitHub Pages

### 自定义域名

1. 在构建输出目录添加 `CNAME` 文件
2. 配置DNS解析
3. 在GitHub Pages设置中指定自定义域名

## 常见问题

### Q: 页面生成失败
A: 检查metadata文件格式是否正确，确保所有必需字段都存在。

### Q: 文件链接404
A: 确认GitHub仓库中的文件路径与metadata中的路径一致。

### Q: 样式不生效
A: 清除浏览器缓存，或检查CSS文件路径是否正确。

### Q: 开发服务器启动失败
A: 检查Node.js版本（需要16+），确保所有依赖已安装。

## 贡献指南

欢迎贡献代码和改进建议！请参考：
- [贡献指南](/contribute/) - 了解如何贡献课程资料
- GitHub Issues - 提交问题或功能请求
- Pull Requests - 提交代码改进

## 许可证

本项目基于MIT许可证开源。

## 联系方式

- 项目仓库：https://github.com/FM-Course/bnbu-fm-course-sharing
- 问题反馈：GitHub Issues
- 邮件联系：3125124390@qq.com