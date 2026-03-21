import DefaultTheme from 'vitepress/theme'
import FileTree from './components/FileTree.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('FileTree', FileTree)
  }
}