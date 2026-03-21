---
title: Investments
editLink: false
---

# Investments



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": ".wrangler",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "cache",
        "type": "directory",
        "isOpen": false,
        "children": [
          {
            "name": "wrangler-account.json",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/.wrangler/cache/wrangler-account.json",
            "downloadText": "下载 wrangler-account.json"
          }
        ],
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/cache/",
        "downloadText": "下载整个 cache 文件夹 (ZIP格式)"
      }
    ]
  },
  {
    "name": "Exercises-2024fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Exercise-4-solution.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Exercise-4-solution.pdf",
        "downloadText": "下载 Exercise-4-solution.pdf"
      },
      {
        "name": "Exercises_1_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Exercises_1_Sol.pdf",
        "downloadText": "下载 Exercises_1_Sol.pdf"
      },
      {
        "name": "Exercises_2_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Exercises_2_Sol.pdf",
        "downloadText": "下载 Exercises_2_Sol.pdf"
      },
      {
        "name": "Exercises_3_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Exercises_3_Sol.pdf",
        "downloadText": "下载 Exercises_3_Sol.pdf"
      },
      {
        "name": "Lecture-1-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-1-Exercises.pdf",
        "downloadText": "下载 Lecture-1-Exercises.pdf"
      },
      {
        "name": "Lecture-2-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-2-Exercises.pdf",
        "downloadText": "下载 Lecture-2-Exercises.pdf"
      },
      {
        "name": "Lecture-3-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-3-Exercises.pdf",
        "downloadText": "下载 Lecture-3-Exercises.pdf"
      },
      {
        "name": "Lecture-4-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-4-Exercises.pdf",
        "downloadText": "下载 Lecture-4-Exercises.pdf"
      },
      {
        "name": "Lecture-5-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-5-Exercises_Sol.pdf",
        "downloadText": "下载 Lecture-5-Exercises_Sol.pdf"
      },
      {
        "name": "Lecture-5-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-5-Exercises.pdf",
        "downloadText": "下载 Lecture-5-Exercises.pdf"
      },
      {
        "name": "Lecture-6-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-6-Exercises_Sol.pdf",
        "downloadText": "下载 Lecture-6-Exercises_Sol.pdf"
      },
      {
        "name": "Lecture-6-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-6-Exercises.pdf",
        "downloadText": "下载 Lecture-6-Exercises.pdf"
      },
      {
        "name": "Lecture-7-Exercises_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-7-Exercises_Sol.pdf",
        "downloadText": "下载 Lecture-7-Exercises_Sol.pdf"
      },
      {
        "name": "Lecture-7-Exercises.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/Lecture-7-Exercises.pdf",
        "downloadText": "下载 Lecture-7-Exercises.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Exercises-2024fall/",
    "downloadText": "下载整个 Exercises-2024fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Project-24fall.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Project-24fall.pdf",
    "downloadText": "下载 Project-24fall.pdf"
  },
  {
    "name": "Quizs-2024fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Quiz_2024_Sol-(4).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Quizs-2024fall/Quiz_2024_Sol-(4).pdf",
        "downloadText": "下载 Quiz_2024_Sol-(4).pdf"
      },
      {
        "name": "Quiz_2024-(4).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Quizs-2024fall/Quiz_2024-(4).pdf",
        "downloadText": "下载 Quiz_2024-(4).pdf"
      },
      {
        "name": "Test_2024_Sol.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Quizs-2024fall/Test_2024_Sol.pdf",
        "downloadText": "下载 Test_2024_Sol.pdf"
      },
      {
        "name": "Test_2024.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Quizs-2024fall/Test_2024.pdf",
        "downloadText": "下载 Test_2024.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Quizs-2024fall/",
    "downloadText": "下载整个 Quizs-2024fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Slides-24fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Bodie_Investments_12e_PPT_CH01.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH01.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH01.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH02.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH02.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH02.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH03.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH03.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH03.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH04.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH04.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH04.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH05.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH05.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH05.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH06.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH06.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH06.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH07.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH07.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH07.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH08.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH08.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH08.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH09.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH09.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH09.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH10.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH10.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH11.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH11.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH11.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH14.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH14.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH14.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH15.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH15.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH15.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH16.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH16.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH16.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH17.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH17.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH17.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH18.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH18.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH18.pdf"
      },
      {
        "name": "Bodie_Investments_12e_PPT_CH19.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/Bodie_Investments_12e_PPT_CH19.pdf",
        "downloadText": "下载 Bodie_Investments_12e_PPT_CH19.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Investments/Slides-24fall/",
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