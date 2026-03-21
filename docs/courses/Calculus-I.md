---
title: Calculus I
editLink: false
---

# Calculus I



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Assignment-24fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Cal-I_Assignment-7_Sol_v1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Cal-I_Assignment-7_Sol_v1.pdf",
        "downloadText": "下载 Cal-I_Assignment-7_Sol_v1.pdf"
      },
      {
        "name": "Calculus_I_Assignment-1_v2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment-1_v2.pdf",
        "downloadText": "下载 Calculus_I_Assignment-1_v2.pdf"
      },
      {
        "name": "Calculus_I_Assignment-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment-2.pdf",
        "downloadText": "下载 Calculus_I_Assignment-2.pdf"
      },
      {
        "name": "Calculus_I_Assignment-3-solution.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment-3-solution.pdf",
        "downloadText": "下载 Calculus_I_Assignment-3-solution.pdf"
      },
      {
        "name": "Calculus_I_Assignment-4_v2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment-4_v2.pdf",
        "downloadText": "下载 Calculus_I_Assignment-4_v2.pdf"
      },
      {
        "name": "Calculus_I_Assignment-6_V2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment-6_V2.pdf",
        "downloadText": "下载 Calculus_I_Assignment-6_V2.pdf"
      },
      {
        "name": "Calculus_I_Assignment-9.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment-9.pdf",
        "downloadText": "下载 Calculus_I_Assignment-9.pdf"
      },
      {
        "name": "Calculus_I_Assignment3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Assignment3.pdf",
        "downloadText": "下载 Calculus_I_Assignment3.pdf"
      },
      {
        "name": "Calculus_I_Midterm_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Midterm_sol.pdf",
        "downloadText": "下载 Calculus_I_Midterm_sol.pdf"
      },
      {
        "name": "Calculus_I_Quiz-1_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Quiz-1_sol.pdf",
        "downloadText": "下载 Calculus_I_Quiz-1_sol.pdf"
      },
      {
        "name": "Calculus_I_Quiz-2_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus_I_Quiz-2_sol.pdf",
        "downloadText": "下载 Calculus_I_Quiz-2_sol.pdf"
      },
      {
        "name": "Calculus-Assignment-1-Solution.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus-Assignment-1-Solution.pdf",
        "downloadText": "下载 Calculus-Assignment-1-Solution.pdf"
      },
      {
        "name": "Calculus-assignment4_sol_v3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus-assignment4_sol_v3.pdf",
        "downloadText": "下载 Calculus-assignment4_sol_v3.pdf"
      },
      {
        "name": "Calculus-HW6-Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus-HW6-Sol.pdf",
        "downloadText": "下载 Calculus-HW6-Sol.pdf"
      },
      {
        "name": "Calculus-I_Assignment-10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus-I_Assignment-10.pdf",
        "downloadText": "下载 Calculus-I_Assignment-10.pdf"
      },
      {
        "name": "Calculus-I_Assignment-7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Calculus-I_Assignment-7.pdf",
        "downloadText": "下载 Calculus-I_Assignment-7.pdf"
      },
      {
        "name": "Hw2-solutionï¼cal-5-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/Hw2-solutioni%CC%88%C2%BC%C2%88cal-5-2.pdf",
        "downloadText": "下载 Hw2-solutionï¼cal-5-2.pdf"
      },
      {
        "name": "HW5_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/HW5_sol.pdf",
        "downloadText": "下载 HW5_sol.pdf"
      },
      {
        "name": "hw5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/hw5.pdf",
        "downloadText": "下载 hw5.pdf"
      },
      {
        "name": "hw8.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/hw8.pdf",
        "downloadText": "下载 hw8.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignment-24fall/",
    "downloadText": "下载整个 Assignment-24fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Assignments-2022fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "第一次作业.jpeg",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignments-2022fall/%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BD%9C%E4%B8%9A.jpeg",
        "downloadText": "下载 第一次作业.jpeg"
      },
      {
        "name": "第二次作业.png",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignments-2022fall/%E7%AC%AC%E4%BA%8C%E6%AC%A1%E4%BD%9C%E4%B8%9A.png",
        "downloadText": "下载 第二次作业.png"
      },
      {
        "name": "第五次作业.png",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignments-2022fall/%E7%AC%AC%E4%BA%94%E6%AC%A1%E4%BD%9C%E4%B8%9A.png",
        "downloadText": "下载 第五次作业.png"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Assignments-2022fall/",
    "downloadText": "下载整个 Assignments-2022fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Fundamental-Theorem-of-Calculus.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Fundamental-Theorem-of-Calculus.pdf",
    "downloadText": "下载 Fundamental-Theorem-of-Calculus.pdf"
  },
  {
    "name": "Slides-22fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Calculus-I-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-1.pdf",
        "downloadText": "下载 Calculus-I-1.pdf"
      },
      {
        "name": "Calculus-I-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-2.pdf",
        "downloadText": "下载 Calculus-I-2.pdf"
      },
      {
        "name": "Calculus-I-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-3.pdf",
        "downloadText": "下载 Calculus-I-3.pdf"
      },
      {
        "name": "Calculus-I-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-4.pdf",
        "downloadText": "下载 Calculus-I-4.pdf"
      },
      {
        "name": "Calculus-I-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-5.pdf",
        "downloadText": "下载 Calculus-I-5.pdf"
      },
      {
        "name": "Calculus-I-6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-6.pdf",
        "downloadText": "下载 Calculus-I-6.pdf"
      },
      {
        "name": "Calculus-I-7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/Calculus-I-7.pdf",
        "downloadText": "下载 Calculus-I-7.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-22fall/",
    "downloadText": "下载整个 Slides-22fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Slides-24fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Calculus_I_2024_Chap-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus_I_2024_Chap-2.pdf",
        "downloadText": "下载 Calculus_I_2024_Chap-2.pdf"
      },
      {
        "name": "Calculus_I_2024-(4)-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus_I_2024-(4)-2.pdf",
        "downloadText": "下载 Calculus_I_2024-(4)-2.pdf"
      },
      {
        "name": "Calculus_I_Chap-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus_I_Chap-3.pdf",
        "downloadText": "下载 Calculus_I_Chap-3.pdf"
      },
      {
        "name": "Calculus_I_Chap-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus_I_Chap-5.pdf",
        "downloadText": "下载 Calculus_I_Chap-5.pdf"
      },
      {
        "name": "Calculus_I_Chap-7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus_I_Chap-7.pdf",
        "downloadText": "下载 Calculus_I_Chap-7.pdf"
      },
      {
        "name": "Calculus-I_Chap-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus-I_Chap-2.pdf",
        "downloadText": "下载 Calculus-I_Chap-2.pdf"
      },
      {
        "name": "Calculus-I_Introduction.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/Calculus-I_Introduction.pdf",
        "downloadText": "下载 Calculus-I_Introduction.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Calculus-I/Slides-24fall/",
    "downloadText": "下载整个 Slides-24fall 文件夹 (ZIP格式)"
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