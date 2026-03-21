---
title: C++ Programming Language
editLink: false
---

# C++ Programming Language



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Assignment-2023fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Assignment-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/Assignment-2.pdf",
        "downloadText": "下载 Assignment-2.pdf"
      },
      {
        "name": "Assignment-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/Assignment-3.pdf",
        "downloadText": "下载 Assignment-3.pdf"
      },
      {
        "name": "Assignment-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/Assignment-4.pdf",
        "downloadText": "下载 Assignment-4.pdf"
      },
      {
        "name": "Assignment-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/Assignment-5.pdf",
        "downloadText": "下载 Assignment-5.pdf"
      },
      {
        "name": "Assignment03-Part2_0123456789-V2.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/Assignment03-Part2_0123456789-V2.docx",
        "downloadText": "下载 Assignment03-Part2_0123456789-V2.docx"
      },
      {
        "name": "assignment1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/assignment1.pdf",
        "downloadText": "下载 assignment1.pdf"
      },
      {
        "name": "Assignment4_Part2_s230018044.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/Assignment4_Part2_s230018044.docx",
        "downloadText": "下载 Assignment4_Part2_s230018044.docx"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Assignment-2023fall/",
    "downloadText": "下载整个 Assignment-2023fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Project-Description-2023fall.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Project-Description-2023fall.pdf",
    "downloadText": "下载 Project-Description-2023fall.pdf"
  },
  {
    "name": "Slides-2023fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Introduction.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Introduction.pdf",
        "downloadText": "下载 Introduction.pdf"
      },
      {
        "name": "Lecture1_intro_c++.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture1_intro_c%2B%2B.pdf",
        "downloadText": "下载 Lecture1_intro_c++.pdf"
      },
      {
        "name": "Lecture2-Primary_Data_Types_and_Variables.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture2-Primary_Data_Types_and_Variables.pdf",
        "downloadText": "下载 Lecture2-Primary_Data_Types_and_Variables.pdf"
      },
      {
        "name": "Lecture3-Expression.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture3-Expression.pdf",
        "downloadText": "下载 Lecture3-Expression.pdf"
      },
      {
        "name": "Lecture4-Decision_making.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture4-Decision_making.pdf",
        "downloadText": "下载 Lecture4-Decision_making.pdf"
      },
      {
        "name": "Lecture5-Looping.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture5-Looping.pdf",
        "downloadText": "下载 Lecture5-Looping.pdf"
      },
      {
        "name": "Lecture6-Array-String-Vector-Structure.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture6-Array-String-Vector-Structure.pdf",
        "downloadText": "下载 Lecture6-Array-String-Vector-Structure.pdf"
      },
      {
        "name": "Lecture7-Pointer-Reference.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture7-Pointer-Reference.pdf",
        "downloadText": "下载 Lecture7-Pointer-Reference.pdf"
      },
      {
        "name": "Lecture8-Functions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture8-Functions.pdf",
        "downloadText": "下载 Lecture8-Functions.pdf"
      },
      {
        "name": "Lecture9-Classes-Objects.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/Lecture9-Classes-Objects.pdf",
        "downloadText": "下载 Lecture9-Classes-Objects.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/C%2B%2B-Programming-Language/Slides-2023fall/",
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