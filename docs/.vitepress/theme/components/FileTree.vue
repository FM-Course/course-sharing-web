<template>
  <div class="file-tree">
    <div v-for="item in sortedData" :key="item.name" class="tree-item">
      <div v-if="item.type === 'directory'" class="folder">
        <div class="folder-header">
          <div class="folder-info" @click="toggle(item)">
            <span class="icon">{{ item.isOpen ? '📂' : '📁' }}</span>
            <span class="name">{{ item.name }}</span>
          </div>
          <div class="folder-actions">
            <button
              v-if="item.downloadUrl && !isDownloading(item)"
              class="download-btn"
              @click="downloadItem(item)"
              :title="item.downloadText || '下载文件夹'"
            >
              下载文件夹
            </button>
            <div v-else-if="isDownloading(item)" class="download-progress-inline">
              <span class="progress-text">{{ getDownloadProgress(item).percent }}%</span>
            </div>
          </div>
        </div>

        <Transition name="fade">
          <div v-if="item.isOpen" class="folder-content">
            <FileTree :data="item.children" />
          </div>
        </Transition>
      </div>

      <div v-else class="file">
        <div class="file-info">
          <span class="icon">📄</span>
          <span class="name">{{ item.name }}</span>
        </div>
        <div class="file-actions">
          <button
            v-if="item.downloadUrl && !isDownloading(item)"
            class="download-btn"
            @click="downloadItem(item)"
            :title="item.downloadText || '下载文件'"
          >
            下载
          </button>
          <div v-else-if="isDownloading(item)" class="download-progress-inline">
            <span class="progress-text">{{ getDownloadProgress(item).percent }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

// 下载状态管理
const downloads = reactive(new Map())  // item -> downloadState

// 1. 排序逻辑：文件夹在前，文件在后，同类字典序
const sortedData = computed(() => {
  return [...props.data].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'directory' ? -1 : 1
    }
    return a.name.localeCompare(b.name)
  })
})

// 2. 递归折叠逻辑
const toggle = (item) => {
  item.isOpen = !item.isOpen
  // 如果关闭文件夹，递归关闭所有子文件夹
  if (!item.isOpen && item.children) {
    closeAll(item.children)
  }
}

const closeAll = (children) => {
  children.forEach(child => {
    if (child.type === 'directory') {
      child.isOpen = false
      if (child.children) closeAll(child.children)
    }
  })
}

// 3. 检查是否正在下载
function isDownloading(item) {
  return downloads.has(item)
}

// 获取下载进度
function getDownloadProgress(item) {
  return downloads.get(item) || { percent: 0 }
}

// 4. 下载功能（带进度条）
const downloadItem = async (item) => {
  if (!item.downloadUrl || downloads.has(item)) return

  try {
    console.log(`开始下载: ${item.name}`, item.downloadUrl)

    // 初始化下载状态
    const downloadState = reactive({
      percent: 0,
      completed: false,
      error: null
    })

    downloads.set(item, downloadState)

    const response = await fetch(item.downloadUrl)

    if (!response.ok) {
      throw new Error(`下载失败: ${response.status} ${response.statusText}`)
    }

    // 获取文件名
    let filename = item.name
    const contentDisposition = response.headers.get('Content-Disposition')
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="(.+)"/)
      if (match) {
        filename = decodeURIComponent(match[1])
      }
    }

    // 如果是文件夹，添加.zip扩展名
    if (item.type === 'directory' && !filename.endsWith('.zip')) {
      filename = `${filename}.zip`
    }

    // 获取总大小
    const contentLength = response.headers.get('Content-Length')
    const total = contentLength ? parseInt(contentLength, 10) : 0

    // 流式下载，显示进度
    const reader = response.body.getReader()
    const chunks = []
    let received = 0

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
      received += value.length

      if (total > 0) {
        downloadState.percent = Math.min(
          100,
          Math.round((received / total) * 100)
        )
      }
    }

    downloadState.completed = true
    downloadState.percent = 100

    // 创建 Blob 并触发下载
    const blob = new Blob(chunks)
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)

    console.log(`下载成功: ${filename}`)

    // 短暂显示完成状态，然后清理
    setTimeout(() => {
      downloads.delete(item)
    }, 1000)

  } catch (error) {
    console.error('下载错误:', error)

    // 更新错误状态
    const downloadState = downloads.get(item)
    if (downloadState) {
      downloadState.error = error.message
    }

    alert(`下载失败: ${error.message}`)

    // 清理
    setTimeout(() => {
      downloads.delete(item)
    }, 3000)
  }
}
</script>

<style scoped>
.file-tree {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  padding-left: 1.2rem;
  user-select: none;
}

.tree-item {
  margin: 8px 0;
}

.folder-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.folder-info {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
}

.folder-info:hover {
  opacity: 0.8;
}

.folder-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.file {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider-light);
}

.file-info {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
}

.file-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.icon {
  width: 1.2em;
  display: inline-block;
}

.download-btn {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 500;
  transition: background 0.2s ease;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.download-btn:hover {
  background: var(--vp-button-brand-hover-bg);
}

/* 行内进度显示 */
.download-progress-inline {
  padding: 4px 12px;
  font-size: 0.85em;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.progress-text {
  color: var(--vp-button-brand-bg);
}

.folder-content {
  border-left: 1px dashed var(--vp-c-divider);
  margin-left: 0.6rem;
  margin-top: 8px;
}

/* 简单的过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
