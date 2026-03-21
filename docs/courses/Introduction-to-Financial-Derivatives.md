---
title: Introduction to Financial Derivatives
editLink: false
---

# Introduction to Financial Derivatives



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "example-calculation.xlsx",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/example-calculation.xlsx",
    "downloadText": "下载 example-calculation.xlsx"
  },
  {
    "name": "Exercises",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Chapter-1-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-1-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-1-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-1-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-1-Exercises.pdf",
        "downloadText": "下载 Chapter-1-Exercises.pdf"
      },
      {
        "name": "Chapter-10-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-10-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-10-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-10-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-10-Exercises.pdf",
        "downloadText": "下载 Chapter-10-Exercises.pdf"
      },
      {
        "name": "Chapter-11-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-11-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-11-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-11-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-11-Exercises.pdf",
        "downloadText": "下载 Chapter-11-Exercises.pdf"
      },
      {
        "name": "Chapter-2-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-2-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-2-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-2-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-2-Exercises.pdf",
        "downloadText": "下载 Chapter-2-Exercises.pdf"
      },
      {
        "name": "Chapter-3-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-3-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-3-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-3-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-3-Exercises.pdf",
        "downloadText": "下载 Chapter-3-Exercises.pdf"
      },
      {
        "name": "Chapter-4-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-4-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-4-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-4-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-4-Exercises.pdf",
        "downloadText": "下载 Chapter-4-Exercises.pdf"
      },
      {
        "name": "Chapter-5-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-5-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-5-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-5-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-5-Exercises.pdf",
        "downloadText": "下载 Chapter-5-Exercises.pdf"
      },
      {
        "name": "Chapter-6-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-6-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-6-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-6-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-6-Exercises.pdf",
        "downloadText": "下载 Chapter-6-Exercises.pdf"
      },
      {
        "name": "Chapter-9-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-9-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-9-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-9-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Chapter-9-Exercises.pdf",
        "downloadText": "下载 Chapter-9-Exercises.pdf"
      },
      {
        "name": "Class-exercises-01_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-01_sol.pdf",
        "downloadText": "下载 Class-exercises-01_sol.pdf"
      },
      {
        "name": "Class-exercises-01.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-01.pdf",
        "downloadText": "下载 Class-exercises-01.pdf"
      },
      {
        "name": "Class-exercises-02.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-02.pdf",
        "downloadText": "下载 Class-exercises-02.pdf"
      },
      {
        "name": "Class-exercises-03_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-03_sol.pdf",
        "downloadText": "下载 Class-exercises-03_sol.pdf"
      },
      {
        "name": "Class-exercises-03.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-03.pdf",
        "downloadText": "下载 Class-exercises-03.pdf"
      },
      {
        "name": "Class-exercises-04_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-04_sol.pdf",
        "downloadText": "下载 Class-exercises-04_sol.pdf"
      },
      {
        "name": "Class-exercises-04.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-04.pdf",
        "downloadText": "下载 Class-exercises-04.pdf"
      },
      {
        "name": "Class-exercises-05_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-05_sol.pdf",
        "downloadText": "下载 Class-exercises-05_sol.pdf"
      },
      {
        "name": "Class-exercises-05.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-05.pdf",
        "downloadText": "下载 Class-exercises-05.pdf"
      },
      {
        "name": "Class-exercises-06_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-06_sol.pdf",
        "downloadText": "下载 Class-exercises-06_sol.pdf"
      },
      {
        "name": "Class-exercises-06.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-06.pdf",
        "downloadText": "下载 Class-exercises-06.pdf"
      },
      {
        "name": "Class-exercises-09_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-09_sol.pdf",
        "downloadText": "下载 Class-exercises-09_sol.pdf"
      },
      {
        "name": "Class-exercises-09.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-09.pdf",
        "downloadText": "下载 Class-exercises-09.pdf"
      },
      {
        "name": "Class-exercises-10_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-10_sol.pdf",
        "downloadText": "下载 Class-exercises-10_sol.pdf"
      },
      {
        "name": "Class-exercises-10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-10.pdf",
        "downloadText": "下载 Class-exercises-10.pdf"
      },
      {
        "name": "Class-exercises-11_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-11_sol.pdf",
        "downloadText": "下载 Class-exercises-11_sol.pdf"
      },
      {
        "name": "Class-exercises-11.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class-exercises-11.pdf",
        "downloadText": "下载 Class-exercises-11.pdf"
      },
      {
        "name": "Class+exercises+02_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/Class%2Bexercises%2B02_sol.pdf",
        "downloadText": "下载 Class+exercises+02_sol.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Exercises/",
    "downloadText": "下载整个 Exercises 文件夹 (ZIP格式)"
  },
  {
    "name": "Quizzes-25spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Quiz-1_2025_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Quizzes-25spring/Quiz-1_2025_Sol.pdf",
        "downloadText": "下载 Quiz-1_2025_Sol.pdf"
      },
      {
        "name": "Quiz-1_2025.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Quizzes-25spring/Quiz-1_2025.pdf",
        "downloadText": "下载 Quiz-1_2025.pdf"
      },
      {
        "name": "Test2025_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Quizzes-25spring/Test2025_Sol.pdf",
        "downloadText": "下载 Test2025_Sol.pdf"
      },
      {
        "name": "Test2025.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Quizzes-25spring/Test2025.pdf",
        "downloadText": "下载 Test2025.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Quizzes-25spring/",
    "downloadText": "下载整个 Quizzes-25spring 文件夹 (ZIP格式)"
  },
  {
    "name": "Slides",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Chapter-01.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-01.pdf",
        "downloadText": "下载 Chapter-01.pdf"
      },
      {
        "name": "Chapter-02.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-02.pdf",
        "downloadText": "下载 Chapter-02.pdf"
      },
      {
        "name": "Chapter-03.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-03.pdf",
        "downloadText": "下载 Chapter-03.pdf"
      },
      {
        "name": "Chapter-04-v2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-04-v2.pdf",
        "downloadText": "下载 Chapter-04-v2.pdf"
      },
      {
        "name": "Chapter-05.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-05.pdf",
        "downloadText": "下载 Chapter-05.pdf"
      },
      {
        "name": "Chapter-06.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-06.pdf",
        "downloadText": "下载 Chapter-06.pdf"
      },
      {
        "name": "Chapter-09.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-09.pdf",
        "downloadText": "下载 Chapter-09.pdf"
      },
      {
        "name": "Chapter-10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-10.pdf",
        "downloadText": "下载 Chapter-10.pdf"
      },
      {
        "name": "Chapter-11.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/Chapter-11.pdf",
        "downloadText": "下载 Chapter-11.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Introduction-to-Financial-Derivatives/Slides/",
    "downloadText": "下载整个 Slides 文件夹 (ZIP格式)"
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