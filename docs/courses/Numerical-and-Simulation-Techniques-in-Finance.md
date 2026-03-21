---
title: Numerical and Simulation Techniques in Finance
editLink: false
---

# Numerical and Simulation Techniques in Finance

教一些PDE数值方法还有蒙特卡洛的东西，需要一点python基础。

## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Assignment-25fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "assignment_1.ipynb",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/assignment_1.ipynb",
        "downloadText": "下载 assignment_1.ipynb"
      },
      {
        "name": "assignment_2.ipynb",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/assignment_2.ipynb",
        "downloadText": "下载 assignment_2.ipynb"
      },
      {
        "name": "assignment_3.ipynb",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/assignment_3.ipynb",
        "downloadText": "下载 assignment_3.ipynb"
      },
      {
        "name": "solution_assignment_1.ipynb",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/solution_assignment_1.ipynb",
        "downloadText": "下载 solution_assignment_1.ipynb"
      },
      {
        "name": "solution_assignment_2.ipynb",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/solution_assignment_2.ipynb",
        "downloadText": "下载 solution_assignment_2.ipynb"
      },
      {
        "name": "solution_assignment_3.ipynb",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/solution_assignment_3.ipynb",
        "downloadText": "下载 solution_assignment_3.ipynb"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Assignment-25fall/",
    "downloadText": "下载整个 Assignment-25fall 文件夹 (ZIP格式)"
  },
  {
    "name": "FINM4053-Numerical-and-Simulation-Techniques-in-Finance.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/FINM4053-Numerical-and-Simulation-Techniques-in-Finance.pdf",
    "downloadText": "下载 FINM4053-Numerical-and-Simulation-Techniques-in-Finance.pdf"
  },
  {
    "name": "Notes-25fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "0_introduction.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/0_introduction.pdf",
        "downloadText": "下载 0_introduction.pdf"
      },
      {
        "name": "1_programming.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/1_programming.pdf",
        "downloadText": "下载 1_programming.pdf"
      },
      {
        "name": "2_numerical_computation.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/2_numerical_computation.pdf",
        "downloadText": "下载 2_numerical_computation.pdf"
      },
      {
        "name": "3_finite_difference.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/3_finite_difference.pdf",
        "downloadText": "下载 3_finite_difference.pdf"
      },
      {
        "name": "4_univariate_simulation.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/4_univariate_simulation.pdf",
        "downloadText": "下载 4_univariate_simulation.pdf"
      },
      {
        "name": "5_multivariate_simulation.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/5_multivariate_simulation.pdf",
        "downloadText": "下载 5_multivariate_simulation.pdf"
      },
      {
        "name": "6_monte_carlo.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/6_monte_carlo.pdf",
        "downloadText": "下载 6_monte_carlo.pdf"
      },
      {
        "name": "7_advanced_monte_carlo.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/7_advanced_monte_carlo.pdf",
        "downloadText": "下载 7_advanced_monte_carlo.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/Notes-25fall/",
    "downloadText": "下载整个 Notes-25fall 文件夹 (ZIP格式)"
  },
  {
    "name": "project-25fall.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/project-25fall.pdf",
    "downloadText": "下载 project-25fall.pdf"
  },
  {
    "name": "textbooks-25fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Finite-Difference-Methods-in-Financial-Engineering-A-Partial-Differential-Equation-Approach-(2006)-Daniel-J.-Duffy.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/textbooks-25fall/Finite-Difference-Methods-in-Financial-Engineering-A-Partial-Differential-Equation-Approach-(2006)-Daniel-J.-Duffy.pdf",
        "downloadText": "下载 Finite-Difference-Methods-in-Financial-Engineering-A-Partial-Differential-Equation-Approach-(2006)-Daniel-J.-Duffy.pdf"
      },
      {
        "name": "Monte-Carlo-Methods-and-Models-in-Finance-and-Insurance-(2010)-Ralf-Korn,-Elke-Korn,-Gerald-Kroisandt.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/textbooks-25fall/Monte-Carlo-Methods-and-Models-in-Finance-and-Insurance-(2010)-Ralf-Korn%2C-Elke-Korn%2C-Gerald-Kroisandt.pdf",
        "downloadText": "下载 Monte-Carlo-Methods-and-Models-in-Finance-and-Insurance-(2010)-Ralf-Korn,-Elke-Korn,-Gerald-Kroisandt.pdf"
      },
      {
        "name": "Numerical-Methods-and-Optimization-in-Finance-(2019)-Manfred-Gilli,-Dietmar-Maringer,-Enrico-Schumann.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/textbooks-25fall/Numerical-Methods-and-Optimization-in-Finance-(2019)-Manfred-Gilli%2C-Dietmar-Maringer%2C-Enrico-Schumann.pdf",
        "downloadText": "下载 Numerical-Methods-and-Optimization-in-Finance-(2019)-Manfred-Gilli,-Dietmar-Maringer,-Enrico-Schumann.pdf"
      },
      {
        "name": "Python-for-Finance-Mastering-Data-Driven-Finance-(2019)-Yves-Hilpisch.epub",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/textbooks-25fall/Python-for-Finance-Mastering-Data-Driven-Finance-(2019)-Yves-Hilpisch.epub",
        "downloadText": "下载 Python-for-Finance-Mastering-Data-Driven-Finance-(2019)-Yves-Hilpisch.epub"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Numerical-and-Simulation-Techniques-in-Finance/textbooks-25fall/",
    "downloadText": "下载整个 textbooks-25fall 文件夹 (ZIP格式)"
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