---
title: Microeconomics
editLink: false
---

# Microeconomics

智大概在前八周就可以讲完整门课，所以后面的时间他会拿一些文章放到课上来讨论。

## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Exercises-2024fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Chapter-1-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-1-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-1-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-1-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-1-Exercises.pdf",
        "downloadText": "下载 Chapter-1-Exercises.pdf"
      },
      {
        "name": "Chapter-10-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-10-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-10-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-10-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-10-Exercises.pdf",
        "downloadText": "下载 Chapter-10-Exercises.pdf"
      },
      {
        "name": "Chapter-2-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-2-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-2-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-2-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-2-Exercises.pdf",
        "downloadText": "下载 Chapter-2-Exercises.pdf"
      },
      {
        "name": "Chapter-3-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-3-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-3-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-3-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-3-Exercises.pdf",
        "downloadText": "下载 Chapter-3-Exercises.pdf"
      },
      {
        "name": "Chapter-4-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-4-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-4-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-4-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-4-Exercises.pdf",
        "downloadText": "下载 Chapter-4-Exercises.pdf"
      },
      {
        "name": "Chapter-5-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-5-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-5-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-5-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-5-Exercises.pdf",
        "downloadText": "下载 Chapter-5-Exercises.pdf"
      },
      {
        "name": "Chapter-6-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-6-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-6-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-6-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-6-Exercises.pdf",
        "downloadText": "下载 Chapter-6-Exercises.pdf"
      },
      {
        "name": "Chapter-7-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-7-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-7-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-7-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-7-Exercises.pdf",
        "downloadText": "下载 Chapter-7-Exercises.pdf"
      },
      {
        "name": "Chapter-8-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-8-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-8-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-8-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-8-Exercises.pdf",
        "downloadText": "下载 Chapter-8-Exercises.pdf"
      },
      {
        "name": "Chapter-9-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-9-Exercises_Sol.pdf",
        "downloadText": "下载 Chapter-9-Exercises_Sol.pdf"
      },
      {
        "name": "Chapter-9-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/Chapter-9-Exercises.pdf",
        "downloadText": "下载 Chapter-9-Exercises.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Exercises-2024fall/",
    "downloadText": "下载整个 Exercises-2024fall 文件夹 (ZIP格式)"
  },
  {
    "name": "game-theory-in-enterpreneurialship.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/game-theory-in-enterpreneurialship.pdf",
    "downloadText": "下载 game-theory-in-enterpreneurialship.pdf"
  },
  {
    "name": "General-Equilibrium.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/General-Equilibrium.pdf",
    "downloadText": "下载 General-Equilibrium.pdf"
  },
  {
    "name": "Lai-et-al-(2020)-A-reflection-on-the-trading-of-pollution-rights-via-land-use-exchanges-and-controls_-Coase-Theorems,-Coase’s-land-use-parable,-and-Schumpeterian-innovations.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Lai-et-al-(2020)-A-reflection-on-the-trading-of-pollution-rights-via-land-use-exchanges-and-controls_-Coase-Theorems%2C-Coase%E2%80%99s-land-use-parable%2C-and-Schumpeterian-innovations.pdf",
    "downloadText": "下载 Lai-et-al-(2020)-A-reflection-on-the-trading-of-pollution-rights-via-land-use-exchanges-and-controls_-Coase-Theorems,-Coase’s-land-use-parable,-and-Schumpeterian-innovations.pdf"
  },
  {
    "name": "notes-2024fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "L1_ECON2103_T.Zhi_2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/notes-2024fall/L1_ECON2103_T.Zhi_2.pdf",
        "downloadText": "下载 L1_ECON2103_T.Zhi_2.pdf"
      },
      {
        "name": "Lecture-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/notes-2024fall/Lecture-1.pdf",
        "downloadText": "下载 Lecture-1.pdf"
      },
      {
        "name": "Lecture-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/notes-2024fall/Lecture-2.pdf",
        "downloadText": "下载 Lecture-2.pdf"
      },
      {
        "name": "Lecture-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/notes-2024fall/Lecture-3.pdf",
        "downloadText": "下载 Lecture-3.pdf"
      },
      {
        "name": "Lecture-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/notes-2024fall/Lecture-4.pdf",
        "downloadText": "下载 Lecture-4.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/notes-2024fall/",
    "downloadText": "下载整个 notes-2024fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Sherry's-notes-2024fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Chapter-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-1.pdf",
        "downloadText": "下载 Chapter-1.pdf"
      },
      {
        "name": "Chapter-10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-10.pdf",
        "downloadText": "下载 Chapter-10.pdf"
      },
      {
        "name": "Chapter-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-2.pdf",
        "downloadText": "下载 Chapter-2.pdf"
      },
      {
        "name": "Chapter-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-3.pdf",
        "downloadText": "下载 Chapter-3.pdf"
      },
      {
        "name": "Chapter-4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-4.pdf",
        "downloadText": "下载 Chapter-4.pdf"
      },
      {
        "name": "Chapter-5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-5.pdf",
        "downloadText": "下载 Chapter-5.pdf"
      },
      {
        "name": "Chapter-6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-6.pdf",
        "downloadText": "下载 Chapter-6.pdf"
      },
      {
        "name": "Chapter-7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-7.pdf",
        "downloadText": "下载 Chapter-7.pdf"
      },
      {
        "name": "Chapter-8.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-8.pdf",
        "downloadText": "下载 Chapter-8.pdf"
      },
      {
        "name": "Chapter-9.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/Chapter-9.pdf",
        "downloadText": "下载 Chapter-9.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Sherry's-notes-2024fall/",
    "downloadText": "下载整个 Sherry's-notes-2024fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Special-Lecture-on-Essay-Writing---Tianhao-Zhi_2.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Special-Lecture-on-Essay-Writing---Tianhao-Zhi_2.pdf",
    "downloadText": "下载 Special-Lecture-on-Essay-Writing---Tianhao-Zhi_2.pdf"
  },
  {
    "name": "Stigliz-(2021)-The-proper-role-of-government-in-the-market-economy_-The-case-of-the-post-COVID-recovery.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Stigliz-(2021)-The-proper-role-of-government-in-the-market-economy_-The-case-of-the-post-COVID-recovery.pdf",
    "downloadText": "下载 Stigliz-(2021)-The-proper-role-of-government-in-the-market-economy_-The-case-of-the-post-COVID-recovery.pdf"
  },
  {
    "name": "Syllabus.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Microeconomics/Syllabus.pdf",
    "downloadText": "下载 Syllabus.pdf"
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