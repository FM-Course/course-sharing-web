---
title: Introdction to Finance
editLink: false
---

# Introdction to Finance



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Exercises-2023fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Chapter-10-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-10-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-10-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-10-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-10-Exercises.docx",
        "downloadText": "下载 Chapter-10-Exercises.docx"
      },
      {
        "name": "Chapter-2-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-2-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-2-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-2-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-2-Exercises.docx",
        "downloadText": "下载 Chapter-2-Exercises.docx"
      },
      {
        "name": "Chapter-3-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-3-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-3-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-3-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-3-Exercises.docx",
        "downloadText": "下载 Chapter-3-Exercises.docx"
      },
      {
        "name": "Chapter-4-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-4-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-4-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-4-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-4-Exercises.docx",
        "downloadText": "下载 Chapter-4-Exercises.docx"
      },
      {
        "name": "Chapter-5-Exercises-v2_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-5-Exercises-v2_Sol.docx",
        "downloadText": "下载 Chapter-5-Exercises-v2_Sol.docx"
      },
      {
        "name": "Chapter-5-Exercises-v2.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-5-Exercises-v2.docx",
        "downloadText": "下载 Chapter-5-Exercises-v2.docx"
      },
      {
        "name": "Chapter-6-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-6-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-6-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-6-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-6-Exercises.docx",
        "downloadText": "下载 Chapter-6-Exercises.docx"
      },
      {
        "name": "Chapter-7-Exercises_Sol-updated.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-7-Exercises_Sol-updated.docx",
        "downloadText": "下载 Chapter-7-Exercises_Sol-updated.docx"
      },
      {
        "name": "Chapter-7-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-7-Exercises.docx",
        "downloadText": "下载 Chapter-7-Exercises.docx"
      },
      {
        "name": "Chapter-8-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-8-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-8-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-8-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-8-Exercises.docx",
        "downloadText": "下载 Chapter-8-Exercises.docx"
      },
      {
        "name": "Chapter-9-Exercises_Sol.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-9-Exercises_Sol.docx",
        "downloadText": "下载 Chapter-9-Exercises_Sol.docx"
      },
      {
        "name": "Chapter-9-Exercises.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/Chapter-9-Exercises.docx",
        "downloadText": "下载 Chapter-9-Exercises.docx"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Exercises-2023fall/",
    "downloadText": "下载整个 Exercises-2023fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Slides-2023fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Chapter-01.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-01.pdf",
        "downloadText": "下载 Chapter-01.pdf"
      },
      {
        "name": "Chapter-02.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-02.pdf",
        "downloadText": "下载 Chapter-02.pdf"
      },
      {
        "name": "Chapter-03.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-03.pdf",
        "downloadText": "下载 Chapter-03.pdf"
      },
      {
        "name": "Chapter-04.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-04.pdf",
        "downloadText": "下载 Chapter-04.pdf"
      },
      {
        "name": "Chapter-05.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-05.pdf",
        "downloadText": "下载 Chapter-05.pdf"
      },
      {
        "name": "Chapter-06.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-06.pdf",
        "downloadText": "下载 Chapter-06.pdf"
      },
      {
        "name": "Chapter-07.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-07.pdf",
        "downloadText": "下载 Chapter-07.pdf"
      },
      {
        "name": "Chapter-08.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-08.pdf",
        "downloadText": "下载 Chapter-08.pdf"
      },
      {
        "name": "Chapter-10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-10.pdf",
        "downloadText": "下载 Chapter-10.pdf"
      },
      {
        "name": "Chapter-13.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/Chapter-13.pdf",
        "downloadText": "下载 Chapter-13.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introdction-to-Finance/Slides-2023fall/",
    "downloadText": "下载整个 Slides-2023fall 文件夹 (ZIP格式)"
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