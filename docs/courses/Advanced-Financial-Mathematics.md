---
title: Advanced Financial Mathematics
editLink: false
---

# Advanced Financial Mathematics



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
- CloudFlare 的云服务在国内可能访问不畅，建议搭配科学上网食用本项目
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Assignments-2025spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "FM2_A1_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A1_Sol.pdf",
        "downloadText": "下载 FM2_A1_Sol.pdf"
      },
      {
        "name": "FM2_A1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A1.pdf",
        "downloadText": "下载 FM2_A1.pdf"
      },
      {
        "name": "FM2_A2_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A2_Sol.pdf",
        "downloadText": "下载 FM2_A2_Sol.pdf"
      },
      {
        "name": "FM2_A2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A2.pdf",
        "downloadText": "下载 FM2_A2.pdf"
      },
      {
        "name": "FM2_A3_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A3_Sol.pdf",
        "downloadText": "下载 FM2_A3_Sol.pdf"
      },
      {
        "name": "FM2_A3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A3.pdf",
        "downloadText": "下载 FM2_A3.pdf"
      },
      {
        "name": "FM2_A4_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A4_Sol.pdf",
        "downloadText": "下载 FM2_A4_Sol.pdf"
      },
      {
        "name": "FM2_A4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A4.pdf",
        "downloadText": "下载 FM2_A4.pdf"
      },
      {
        "name": "FM2_A5_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A5_Sol.pdf",
        "downloadText": "下载 FM2_A5_Sol.pdf"
      },
      {
        "name": "FM2_A5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/FM2_A5.pdf",
        "downloadText": "下载 FM2_A5.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/Assignments-2025spring/",
    "downloadText": "下载整个 Assignments-2025spring 文件夹 (ZIP格式)"
  },
  {
    "name": "exam-2025spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "midterm-AFM.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/exam-2025spring/midterm-AFM.pdf",
        "downloadText": "下载 midterm-AFM.pdf"
      },
      {
        "name": "midterm-sol-(1).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/exam-2025spring/midterm-sol-(1).pdf",
        "downloadText": "下载 midterm-sol-(1).pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/exam-2025spring/",
    "downloadText": "下载整个 exam-2025spring 文件夹 (ZIP格式)"
  },
  {
    "name": "刘学长的notes.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Financial-Mathematics/%E5%88%98%E5%AD%A6%E9%95%BF%E7%9A%84notes.pdf",
    "downloadText": "下载 刘学长的notes.pdf"
  }
])

// 添加全局下载函数，方便调试
if (typeof window !== 'undefined') {
  window.downloadFile = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`下载失败: ${response.status}`);

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('下载错误:', error);
      alert(`下载失败: ${error.message}`);
    }
  };
}
</script>

<ClientOnly>
  <div class="tree-container">
    <FileTree :data="treeData" />
  </div>
</ClientOnly>

<style>
.tree-container {
  margin-top: 20px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .tree-container {
    padding: 12px;
  }

  .folder-header,
  .file {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .folder-actions,
  .file-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>