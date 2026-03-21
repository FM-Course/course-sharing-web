---
title: Optimization
editLink: false
---

# Optimization



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Homework-25spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "hw1(3).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw1(3).pdf",
        "downloadText": "下载 hw1(3).pdf"
      },
      {
        "name": "hw1solutions(1).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw1solutions(1).pdf",
        "downloadText": "下载 hw1solutions(1).pdf"
      },
      {
        "name": "hw2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw2.pdf",
        "downloadText": "下载 hw2.pdf"
      },
      {
        "name": "hw2solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw2solutions.pdf",
        "downloadText": "下载 hw2solutions.pdf"
      },
      {
        "name": "hw3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw3.pdf",
        "downloadText": "下载 hw3.pdf"
      },
      {
        "name": "hw3solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw3solutions.pdf",
        "downloadText": "下载 hw3solutions.pdf"
      },
      {
        "name": "hw4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw4.pdf",
        "downloadText": "下载 hw4.pdf"
      },
      {
        "name": "hw4solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw4solutions.pdf",
        "downloadText": "下载 hw4solutions.pdf"
      },
      {
        "name": "hw5-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw5-2.pdf",
        "downloadText": "下载 hw5-2.pdf"
      },
      {
        "name": "hw5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw5.pdf",
        "downloadText": "下载 hw5.pdf"
      },
      {
        "name": "hw6-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw6-2.pdf",
        "downloadText": "下载 hw6-2.pdf"
      },
      {
        "name": "hw6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/hw6.pdf",
        "downloadText": "下载 hw6.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Homework-25spring/",
    "downloadText": "下载整个 Homework-25spring 文件夹 (ZIP格式)"
  },
  {
    "name": "Quiz-25spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "quiz1_solution.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Quiz-25spring/quiz1_solution.pdf",
        "downloadText": "下载 quiz1_solution.pdf"
      },
      {
        "name": "quiz2_solu.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Quiz-25spring/quiz2_solu.pdf",
        "downloadText": "下载 quiz2_solu.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Quiz-25spring/",
    "downloadText": "下载整个 Quiz-25spring 文件夹 (ZIP格式)"
  },
  {
    "name": "Slides",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Multi-Dimensional-Unconstrained-Optimization.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Multi-Dimensional-Unconstrained-Optimization.pdf",
        "downloadText": "下载 Multi-Dimensional-Unconstrained-Optimization.pdf"
      },
      {
        "name": "One-Dimensional-Unconstrained-Optimization-I.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/One-Dimensional-Unconstrained-Optimization-I.pdf",
        "downloadText": "下载 One-Dimensional-Unconstrained-Optimization-I.pdf"
      },
      {
        "name": "One-Dimensional-Unconstrained-Optimization-II.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/One-Dimensional-Unconstrained-Optimization-II.pdf",
        "downloadText": "下载 One-Dimensional-Unconstrained-Optimization-II.pdf"
      },
      {
        "name": "Optimality-Conditions-for-Constrained-Optimization-Problems.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Optimality-Conditions-for-Constrained-Optimization-Problems.pdf",
        "downloadText": "下载 Optimality-Conditions-for-Constrained-Optimization-Problems.pdf"
      },
      {
        "name": "Optimization-Part2-Mathematical-foundations-I.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Optimization-Part2-Mathematical-foundations-I.pdf",
        "downloadText": "下载 Optimization-Part2-Mathematical-foundations-I.pdf"
      },
      {
        "name": "Optimization-Part2-Mathematical-foundations-II.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Optimization-Part2-Mathematical-foundations-II.pdf",
        "downloadText": "下载 Optimization-Part2-Mathematical-foundations-II.pdf"
      },
      {
        "name": "Optimization-Part5---Nonlinear-Least-Squares-Data-Fitting.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Optimization-Part5---Nonlinear-Least-Squares-Data-Fitting.pdf",
        "downloadText": "下载 Optimization-Part5---Nonlinear-Least-Squares-Data-Fitting.pdf"
      },
      {
        "name": "Optimization-Part6---Basics-of-Constrained-Optimization.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Optimization-Part6---Basics-of-Constrained-Optimization.pdf",
        "downloadText": "下载 Optimization-Part6---Basics-of-Constrained-Optimization.pdf"
      },
      {
        "name": "Optimization-Part7---Penalty-and-Barrier-Methods.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Optimization-Part7---Penalty-and-Barrier-Methods.pdf",
        "downloadText": "下载 Optimization-Part7---Penalty-and-Barrier-Methods.pdf"
      },
      {
        "name": "Some-Optimization-Models.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/Some-Optimization-Models.pdf",
        "downloadText": "下载 Some-Optimization-Models.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Optimization/Slides/",
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