---
title: Data Structure
editLink: false
---

# Data Structure



## 文件列表

::: tip 下载说明
- 点击文件旁边的 **"下载"** 按钮下载单个文件
- 点击文件夹旁边的 **"下载文件夹"** 按钮下载整个文件夹（ZIP格式）
:::

<script setup>
import { reactive, onMounted } from 'vue'

const treeData = reactive([
  {
    "name": "Assignments-24spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Assignment-4",
        "type": "directory",
        "isOpen": false,
        "children": [
          {
            "name": "Assignment4.pdf",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-4/Assignment4.pdf",
            "downloadText": "下载 Assignment4.pdf"
          },
          {
            "name": "Sorting.cpp",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-4/Sorting.cpp",
            "downloadText": "下载 Sorting.cpp"
          },
          {
            "name": "Sorting.h",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-4/Sorting.h",
            "downloadText": "下载 Sorting.h"
          }
        ],
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-4/",
        "downloadText": "下载整个 Assignment-4 文件夹 (ZIP格式)"
      },
      {
        "name": "Assignment-5",
        "type": "directory",
        "isOpen": false,
        "children": [
          {
            "name": "BST.cpp",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-5/BST.cpp",
            "downloadText": "下载 BST.cpp"
          },
          {
            "name": "Tree.h",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-5/Tree.h",
            "downloadText": "下载 Tree.h"
          },
          {
            "name": "TreeNode.h",
            "type": "file",
            "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-5/TreeNode.h",
            "downloadText": "下载 TreeNode.h"
          }
        ],
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment-5/",
        "downloadText": "下载整个 Assignment-5 文件夹 (ZIP格式)"
      },
      {
        "name": "Assignment1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment1.pdf",
        "downloadText": "下载 Assignment1.pdf"
      },
      {
        "name": "Assignment2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment2.pdf",
        "downloadText": "下载 Assignment2.pdf"
      },
      {
        "name": "Assignment3.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment3.pdf",
        "downloadText": "下载 Assignment3.pdf"
      },
      {
        "name": "Assignment6.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/Assignment6.pdf",
        "downloadText": "下载 Assignment6.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Assignments-24spring/",
    "downloadText": "下载整个 Assignments-24spring 文件夹 (ZIP格式)"
  },
  {
    "name": "Slides-24spring",
    "type": "directory",
    "isOpen": false,
    "children": [
      {
        "name": "Lec-0---Introduction.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-0---Introduction.pdf",
        "downloadText": "下载 Lec-0---Introduction.pdf"
      },
      {
        "name": "lec-1---C++-Review.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/lec-1---C%2B%2B-Review.pdf",
        "downloadText": "下载 lec-1---C++-Review.pdf"
      },
      {
        "name": "Lec-10-B+-Tree-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-10-B%2B-Tree-1.pdf",
        "downloadText": "下载 Lec-10-B+-Tree-1.pdf"
      },
      {
        "name": "Lec-10-B+-Tree-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-10-B%2B-Tree-2.pdf",
        "downloadText": "下载 Lec-10-B+-Tree-2.pdf"
      },
      {
        "name": "lec-11-Graph.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/lec-11-Graph.pdf",
        "downloadText": "下载 lec-11-Graph.pdf"
      },
      {
        "name": "Lec-2--Linked-Lists.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-2--Linked-Lists.pdf",
        "downloadText": "下载 Lec-2--Linked-Lists.pdf"
      },
      {
        "name": "Lec-3---Stacks-and-Queues.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-3---Stacks-and-Queues.pdf",
        "downloadText": "下载 Lec-3---Stacks-and-Queues.pdf"
      },
      {
        "name": "Lec-4----Analysis-of-Algorithms.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-4----Analysis-of-Algorithms.pdf",
        "downloadText": "下载 Lec-4----Analysis-of-Algorithms.pdf"
      },
      {
        "name": "Lec-5-Insertion-Sort,-Merge-Sort.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-5-Insertion-Sort%2C-Merge-Sort.pdf",
        "downloadText": "下载 Lec-5-Insertion-Sort,-Merge-Sort.pdf"
      },
      {
        "name": "Lec-6---Quicksort.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-6---Quicksort.pdf",
        "downloadText": "下载 Lec-6---Quicksort.pdf"
      },
      {
        "name": "Lec-7-----Heaps-and-Heap-Sort.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-7-----Heaps-and-Heap-Sort.pdf",
        "downloadText": "下载 Lec-7-----Heaps-and-Heap-Sort.pdf"
      },
      {
        "name": "Lec-8-----Binary-Trees,-Binary-Search-Trees.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-8-----Binary-Trees%2C-Binary-Search-Trees.pdf",
        "downloadText": "下载 Lec-8-----Binary-Trees,-Binary-Search-Trees.pdf"
      },
      {
        "name": "Lec-9-AVL-Trees-1.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-9-AVL-Trees-1.pdf",
        "downloadText": "下载 Lec-9-AVL-Trees-1.pdf"
      },
      {
        "name": "Lec-9-AVL-Trees-2.pdf",
        "type": "file",
        "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/Lec-9-AVL-Trees-2.pdf",
        "downloadText": "下载 Lec-9-AVL-Trees-2.pdf"
      }
    ],
    "downloadUrl": "https://course-sharing-download.fm-course.workers.dev/download/Data-Structure/Slides-24spring/",
    "downloadText": "下载整个 Slides-24spring 文件夹 (ZIP格式)"
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