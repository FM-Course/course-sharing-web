---
title: Ordinary Differential Equations
editLink: false
---

# Ordinary Differential Equations



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
    "name": "Assignment",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "HW1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW1.pdf",
        "downloadText": "下载 HW1.pdf"
      },
      {
        "name": "HW10_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW10_sol.pdf",
        "downloadText": "下载 HW10_sol.pdf"
      },
      {
        "name": "HW10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW10.pdf",
        "downloadText": "下载 HW10.pdf"
      },
      {
        "name": "HW1s.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW1s.pdf",
        "downloadText": "下载 HW1s.pdf"
      },
      {
        "name": "HW2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW2.pdf",
        "downloadText": "下载 HW2.pdf"
      },
      {
        "name": "HW2s.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW2s.pdf",
        "downloadText": "下载 HW2s.pdf"
      },
      {
        "name": "HW3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW3.pdf",
        "downloadText": "下载 HW3.pdf"
      },
      {
        "name": "HW3s.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW3s.pdf",
        "downloadText": "下载 HW3s.pdf"
      },
      {
        "name": "HW4-sol_modified.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW4-sol_modified.pdf",
        "downloadText": "下载 HW4-sol_modified.pdf"
      },
      {
        "name": "HW4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW4.pdf",
        "downloadText": "下载 HW4.pdf"
      },
      {
        "name": "HW5-sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW5-sol.pdf",
        "downloadText": "下载 HW5-sol.pdf"
      },
      {
        "name": "HW5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW5.pdf",
        "downloadText": "下载 HW5.pdf"
      },
      {
        "name": "HW6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW6.pdf",
        "downloadText": "下载 HW6.pdf"
      },
      {
        "name": "HW6s.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW6s.pdf",
        "downloadText": "下载 HW6s.pdf"
      },
      {
        "name": "HW7_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW7_sol.pdf",
        "downloadText": "下载 HW7_sol.pdf"
      },
      {
        "name": "HW7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW7.pdf",
        "downloadText": "下载 HW7.pdf"
      },
      {
        "name": "HW8_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW8_sol.pdf",
        "downloadText": "下载 HW8_sol.pdf"
      },
      {
        "name": "HW8.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW8.pdf",
        "downloadText": "下载 HW8.pdf"
      },
      {
        "name": "HW9_sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW9_sol.pdf",
        "downloadText": "下载 HW9_sol.pdf"
      },
      {
        "name": "HW9.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/HW9.pdf",
        "downloadText": "下载 HW9.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Assignment/",
    "downloadText": "下载整个 Assignment 文件夹 (ZIP格式)"
  },
  {
    "name": "ODE_old.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/ODE_old.pdf",
    "downloadText": "下载 ODE_old.pdf"
  },
  {
    "name": "ODE2023.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/ODE2023.pdf",
    "downloadText": "下载 ODE2023.pdf"
  },
  {
    "name": "Supplementary-Materials",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "2.3-2.5补充-2023fall-by-TA.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/2.3-2.5%E8%A1%A5%E5%85%85-2023fall-by-TA.pdf",
        "downloadText": "下载 2.3-2.5补充-2023fall-by-TA.pdf"
      },
      {
        "name": "chap2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/chap2.pdf",
        "downloadText": "下载 chap2.pdf"
      },
      {
        "name": "chap3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/chap3.pdf",
        "downloadText": "下载 chap3.pdf"
      },
      {
        "name": "chap5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/chap5.pdf",
        "downloadText": "下载 chap5.pdf"
      },
      {
        "name": "Common_Derivatives_Integrals.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/Common_Derivatives_Integrals.pdf",
        "downloadText": "下载 Common_Derivatives_Integrals.pdf"
      },
      {
        "name": "Integration-Technique.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/Integration-Technique.pdf",
        "downloadText": "下载 Integration-Technique.pdf"
      },
      {
        "name": "Ode-2023Fall-chapter1-3-by-TA.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/Ode-2023Fall-chapter1-3-by-TA.pdf",
        "downloadText": "下载 Ode-2023Fall-chapter1-3-by-TA.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Ordinary-Differential-Equations/Supplementary-Materials/",
    "downloadText": "下载整个 Supplementary-Materials 文件夹 (ZIP格式)"
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