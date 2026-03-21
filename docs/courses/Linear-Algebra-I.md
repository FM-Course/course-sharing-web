---
title: Linear Algebra I
editLink: false
---

# Linear Algebra I



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Homework-22fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "HW1a.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW1a.pdf",
        "downloadText": "下载 HW1a.pdf"
      },
      {
        "name": "HW1b.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW1b.pdf",
        "downloadText": "下载 HW1b.pdf"
      },
      {
        "name": "HW2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW2.pdf",
        "downloadText": "下载 HW2.pdf"
      },
      {
        "name": "HW2b.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW2b.pdf",
        "downloadText": "下载 HW2b.pdf"
      },
      {
        "name": "HW3a.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW3a.pdf",
        "downloadText": "下载 HW3a.pdf"
      },
      {
        "name": "HW3b.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW3b.pdf",
        "downloadText": "下载 HW3b.pdf"
      },
      {
        "name": "HW4a.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW4a.pdf",
        "downloadText": "下载 HW4a.pdf"
      },
      {
        "name": "HW4b.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW4b.pdf",
        "downloadText": "下载 HW4b.pdf"
      },
      {
        "name": "HW5a.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW5a.pdf",
        "downloadText": "下载 HW5a.pdf"
      },
      {
        "name": "HW5b.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW5b.pdf",
        "downloadText": "下载 HW5b.pdf"
      },
      {
        "name": "HW7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/HW7.pdf",
        "downloadText": "下载 HW7.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-22fall/",
    "downloadText": "下载整个 Homework-22fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Homework-24fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "HW1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW1.pdf",
        "downloadText": "下载 HW1.pdf"
      },
      {
        "name": "HW10.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW10.pdf",
        "downloadText": "下载 HW10.pdf"
      },
      {
        "name": "HW2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW2.pdf",
        "downloadText": "下载 HW2.pdf"
      },
      {
        "name": "HW3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW3.pdf",
        "downloadText": "下载 HW3.pdf"
      },
      {
        "name": "HW4.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW4.pdf",
        "downloadText": "下载 HW4.pdf"
      },
      {
        "name": "HW5.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW5.pdf",
        "downloadText": "下载 HW5.pdf"
      },
      {
        "name": "HW6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW6.pdf",
        "downloadText": "下载 HW6.pdf"
      },
      {
        "name": "HW7.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW7.pdf",
        "downloadText": "下载 HW7.pdf"
      },
      {
        "name": "HW8.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW8.pdf",
        "downloadText": "下载 HW8.pdf"
      },
      {
        "name": "HW9.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/HW9.pdf",
        "downloadText": "下载 HW9.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Homework-24fall/",
    "downloadText": "下载整个 Homework-24fall 文件夹 (ZIP格式)"
  },
  {
    "name": "introduction-to-matlab-2.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/introduction-to-matlab-2.pdf",
    "downloadText": "下载 introduction-to-matlab-2.pdf"
  },
  {
    "name": "la1-la2单词中英对照清单.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/la1-la2%E5%8D%95%E8%AF%8D%E4%B8%AD%E8%8B%B1%E5%AF%B9%E7%85%A7%E6%B8%85%E5%8D%95.pdf",
    "downloadText": "下载 la1-la2单词中英对照清单.pdf"
  },
  {
    "name": "Lecture-Slides-22fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "LA-Sc11-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc11-short.pdf",
        "downloadText": "下载 LA-Sc11-short.pdf"
      },
      {
        "name": "LA-Sc12-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc12-short.pdf",
        "downloadText": "下载 LA-Sc12-short.pdf"
      },
      {
        "name": "LA-Sc13-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc13-short.pdf",
        "downloadText": "下载 LA-Sc13-short.pdf"
      },
      {
        "name": "LA-Sc14-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc14-short.pdf",
        "downloadText": "下载 LA-Sc14-short.pdf"
      },
      {
        "name": "LA-Sc15-short-(Updated).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc15-short-(Updated).pdf",
        "downloadText": "下载 LA-Sc15-short-(Updated).pdf"
      },
      {
        "name": "LA-Sc15-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc15-short.pdf",
        "downloadText": "下载 LA-Sc15-short.pdf"
      },
      {
        "name": "LA-Sc16-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc16-short.pdf",
        "downloadText": "下载 LA-Sc16-short.pdf"
      },
      {
        "name": "LA-Sc21-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc21-short.pdf",
        "downloadText": "下载 LA-Sc21-short.pdf"
      },
      {
        "name": "LA-Sc22-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc22-short.pdf",
        "downloadText": "下载 LA-Sc22-short.pdf"
      },
      {
        "name": "LA-Sc23-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc23-short.pdf",
        "downloadText": "下载 LA-Sc23-short.pdf"
      },
      {
        "name": "LA-Sc31-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc31-short.pdf",
        "downloadText": "下载 LA-Sc31-short.pdf"
      },
      {
        "name": "LA-Sc32-short-(updated).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc32-short-(updated).pdf",
        "downloadText": "下载 LA-Sc32-short-(updated).pdf"
      },
      {
        "name": "LA-Sc33-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc33-short.pdf",
        "downloadText": "下载 LA-Sc33-short.pdf"
      },
      {
        "name": "LA-Sc34-short-(Updated).pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc34-short-(Updated).pdf",
        "downloadText": "下载 LA-Sc34-short-(Updated).pdf"
      },
      {
        "name": "LA-Sc35-short.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc35-short.pdf",
        "downloadText": "下载 LA-Sc35-short.pdf"
      },
      {
        "name": "LA-Sc36-short-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc36-short-1.pdf",
        "downloadText": "下载 LA-Sc36-short-1.pdf"
      },
      {
        "name": "LA-Sc36-short-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/LA-Sc36-short-2.pdf",
        "downloadText": "下载 LA-Sc36-short-2.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-22fall/",
    "downloadText": "下载整个 Lecture-Slides-22fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Lecture-Slides-24fall",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "LA-Sc11-6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-24fall/LA-Sc11-6.pdf",
        "downloadText": "下载 LA-Sc11-6.pdf"
      },
      {
        "name": "LA-Sc21-3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-24fall/LA-Sc21-3.pdf",
        "downloadText": "下载 LA-Sc21-3.pdf"
      },
      {
        "name": "LA-Sc31--6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-24fall/LA-Sc31--6.pdf",
        "downloadText": "下载 LA-Sc31--6.pdf"
      },
      {
        "name": "LA-Sc36-short-1-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-24fall/LA-Sc36-short-1-2.pdf",
        "downloadText": "下载 LA-Sc36-short-1-2.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Lecture-Slides-24fall/",
    "downloadText": "下载整个 Lecture-Slides-24fall 文件夹 (ZIP格式)"
  },
  {
    "name": "Wong's-Note-LA1.pdf",
    "type": "file",
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Linear-Algebra-I/Wong's-Note-LA1.pdf",
    "downloadText": "下载 Wong's-Note-LA1.pdf"
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