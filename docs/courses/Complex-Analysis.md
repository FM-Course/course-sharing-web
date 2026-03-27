---
title: Complex Analysis
editLink: false
---

# Complex Analysis

classwork是Dr. Wong的优良传统。

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
    "name": "calculus-II.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/calculus-II.pdf",
    "downloadText": "下载 calculus-II.pdf"
  },
  {
    "name": "Classwork",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Complex-Analysis-classwork-(10-4-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(10-4-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(10-4-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(13-3-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(13-3-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(13-3-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(17-4-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(17-4-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(17-4-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(20-3-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(20-3-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(20-3-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(20-5-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(20-5-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(20-5-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(24-4-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(24-4-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(24-4-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(25-3-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(25-3-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(25-3-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(28-2-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(28-2-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(28-2-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(6-3-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(6-3-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(6-3-2024).docx"
      },
      {
        "name": "Complex-Analysis-classwork-(8-4-2024).docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/Complex-Analysis-classwork-(8-4-2024).docx",
        "downloadText": "下载 Complex-Analysis-classwork-(8-4-2024).docx"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Classwork/",
    "downloadText": "下载整个 Classwork 文件夹 (ZIP格式)"
  },
  {
    "name": "Exams",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Complex-Analysis-(2023-2024)-Midterm-1.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Exams/Complex-Analysis-(2023-2024)-Midterm-1.docx",
        "downloadText": "下载 Complex-Analysis-(2023-2024)-Midterm-1.docx"
      },
      {
        "name": "Complex-Analysis-(2023-2024)-Midterm-2.docx",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Exams/Complex-Analysis-(2023-2024)-Midterm-2.docx",
        "downloadText": "下载 Complex-Analysis-(2023-2024)-Midterm-2.docx"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Exams/",
    "downloadText": "下载整个 Exams 文件夹 (ZIP格式)"
  },
  {
    "name": "Fundamentals-of-Complex-Analysis-with-Applications-to-Engineering,-Science,-and-Mathematics-Pearson-New-International-Edition-by-Edward-B.-Saff,-Arthur-David-Snider-(z-lib.org).pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Fundamentals-of-Complex-Analysis-with-Applications-to-Engineering%2C-Science%2C-and-Mathematics-Pearson-New-International-Edition-by-Edward-B.-Saff%2C-Arthur-David-Snider-(z-lib.org).pdf",
    "downloadText": "下载 Fundamentals-of-Complex-Analysis-with-Applications-to-Engineering,-Science,-and-Mathematics-Pearson-New-International-Edition-by-Edward-B.-Saff,-Arthur-David-Snider-(z-lib.org).pdf"
  },
  {
    "name": "Homework",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Complex-Analysis-2023-2024-Homework-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-Homework-4.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-Homework-4.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-Homework-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-Homework-5.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-Homework-5.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-Homework-6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-Homework-6.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-Homework-6.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-Homework-7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-Homework-7.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-Homework-7.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-Homework-8.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-Homework-8.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-Homework-8.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-HW-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-HW-1.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-HW-1.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-HW-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-HW-2.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-HW-2.pdf"
      },
      {
        "name": "Complex-Analysis-2023-2024-HW-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/Complex-Analysis-2023-2024-HW-3.pdf",
        "downloadText": "下载 Complex-Analysis-2023-2024-HW-3.pdf"
      },
      {
        "name": "HW1-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW1-solutions.pdf",
        "downloadText": "下载 HW1-solutions.pdf"
      },
      {
        "name": "HW2-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW2-solutions.pdf",
        "downloadText": "下载 HW2-solutions.pdf"
      },
      {
        "name": "HW3-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW3-solutions.pdf",
        "downloadText": "下载 HW3-solutions.pdf"
      },
      {
        "name": "HW4-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW4-solutions.pdf",
        "downloadText": "下载 HW4-solutions.pdf"
      },
      {
        "name": "HW5-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW5-solutions.pdf",
        "downloadText": "下载 HW5-solutions.pdf"
      },
      {
        "name": "HW6-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW6-solutions.pdf",
        "downloadText": "下载 HW6-solutions.pdf"
      },
      {
        "name": "HW7-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW7-solutions.pdf",
        "downloadText": "下载 HW7-solutions.pdf"
      },
      {
        "name": "HW8-solutions.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/HW8-solutions.pdf",
        "downloadText": "下载 HW8-solutions.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Complex-Analysis/Homework/",
    "downloadText": "下载整个 Homework 文件夹 (ZIP格式)"
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