---
title: Advanced Probability
editLink: false
---

# Advanced Probability

以前的Advanced Probability讲的是Elementary Probability，现在有Probability Theory这门课之后AP就可以将一些高级的概率论了。
这门课是本科生和研究生一起上的（至少25年是这样的）研究生那边这门课叫 *Real Analysis and Probability*.

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
    "name": "Advanced-Probability.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Advanced-Probability.pdf",
    "downloadText": "下载 Advanced-Probability.pdf"
  },
  {
    "name": "AP_Chap-0_Introduction.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/AP_Chap-0_Introduction.pdf",
    "downloadText": "下载 AP_Chap-0_Introduction.pdf"
  },
  {
    "name": "Appendix.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Appendix.pdf",
    "downloadText": "下载 Appendix.pdf"
  },
  {
    "name": "Assignments-25fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Assignment-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Assignment-1.pdf",
        "downloadText": "下载 Assignment-1.pdf"
      },
      {
        "name": "Assignment-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Assignment-2.pdf",
        "downloadText": "下载 Assignment-2.pdf"
      },
      {
        "name": "Assignment-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Assignment-3.pdf",
        "downloadText": "下载 Assignment-3.pdf"
      },
      {
        "name": "Assignment-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Assignment-4.pdf",
        "downloadText": "下载 Assignment-4.pdf"
      },
      {
        "name": "Assignment-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Assignment-5.pdf",
        "downloadText": "下载 Assignment-5.pdf"
      },
      {
        "name": "Assignment-6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Assignment-6.pdf",
        "downloadText": "下载 Assignment-6.pdf"
      },
      {
        "name": "Solution-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Solution-1.pdf",
        "downloadText": "下载 Solution-1.pdf"
      },
      {
        "name": "Solution-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Solution-2.pdf",
        "downloadText": "下载 Solution-2.pdf"
      },
      {
        "name": "Solution-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Solution-3.pdf",
        "downloadText": "下载 Solution-3.pdf"
      },
      {
        "name": "Solution-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Solution-4.pdf",
        "downloadText": "下载 Solution-4.pdf"
      },
      {
        "name": "Solution-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Solution-5.pdf",
        "downloadText": "下载 Solution-5.pdf"
      },
      {
        "name": "Solution-6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/Solution-6.pdf",
        "downloadText": "下载 Solution-6.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Assignments-25fall/",
    "downloadText": "下载整个 Assignments-25fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Quizs-25fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Quiz-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Quizs-25fall/Quiz-1.pdf",
        "downloadText": "下载 Quiz-1.pdf"
      },
      {
        "name": "Quiz-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Quizs-25fall/Quiz-2.pdf",
        "downloadText": "下载 Quiz-2.pdf"
      },
      {
        "name": "Quiz-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Quizs-25fall/Quiz-3.pdf",
        "downloadText": "下载 Quiz-3.pdf"
      },
      {
        "name": "solution-to-quiz-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Quizs-25fall/solution-to-quiz-2.pdf",
        "downloadText": "下载 solution-to-quiz-2.pdf"
      },
      {
        "name": "Solution-to-Quiz3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Quizs-25fall/Solution-to-Quiz3.pdf",
        "downloadText": "下载 Solution-to-Quiz3.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Advanced-Probability/Quizs-25fall/",
    "downloadText": "下载整个 Quizs-25fall 文件夹 (ZIP格式)"
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