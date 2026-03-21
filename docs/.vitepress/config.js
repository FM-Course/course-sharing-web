import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 读取课程信息文件
function readCourseInfo() {
  const courseInfoPath = path.join(__dirname, 'public/course-info.json')
  try {
    const data = fs.readFileSync(courseInfoPath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading course-info.json:', error)
    return {}
  }
}

// 分类映射
const categoryMap = {
  'MR': 'Major Require',
  'ME': 'Major Elective',
  'FE': 'Free Elective',
  'GE': 'General Education',
  'UC': 'University Core',
  'Other': 'Other Materials'
}

// 按分类分组课程
function groupCoursesByCategory(courseInfo) {
  const grouped = {}

  Object.entries(courseInfo).forEach(([courseSlug, courseData]) => {
    const category = courseData.category || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }

    grouped[category].push({
      text: courseData.title || courseSlug.replace(/-/g, ' '),
      link: `/courses/${courseSlug}`
    })
  })

  // 按rank排序每个分类内的课程
  Object.keys(grouped).forEach(category => {
    grouped[category].sort((a, b) => {
      const courseA = courseInfo[a.link.replace('/courses/', '')]
      const courseB = courseInfo[b.link.replace('/courses/', '')]

      const rankA = courseA?.rank ? courseA.rank.split('.').map(Number) : [0]
      const rankB = courseB?.rank ? courseB.rank.split('.').map(Number) : [0]

      for (let i = 0; i < Math.max(rankA.length, rankB.length); i++) {
        const partA = rankA[i] || 0
        const partB = rankB[i] || 0
        if (partA !== partB) {
          return partA - partB
        }
      }
      return 0
    })
  })

  return grouped
}

// 生成课程侧边栏
function generateCoursesSidebar() {
  const courseInfo = readCourseInfo()
  const groupedCourses = groupCoursesByCategory(courseInfo)

  const sidebar = [
    {
      text: '课程导航',
      items: [
        { text: '所有课程', link: '/courses/' },
        { text: '按分类浏览', link: '/courses/categories' }
      ]
    }
  ]

  // 按定义的顺序添加分类
  Object.keys(categoryMap).forEach(category => {
    const courses = groupedCourses[category]
    if (courses && courses.length > 0) {
      sidebar.push({
        text: categoryMap[category],
        items: courses
      })
    }
  })

  return sidebar
}

export default defineConfig({
  title: 'BNBU-FM课程攻略',
  description: '北京师范大学-香港浸会大学联合国际学院金融数学专业课程资料共享平台',
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '课程列表', link: '/courses/' },
      { text: '使用指南', link: '/guide/' },
      { text: '贡献指南', link: '/contribute/' },
      { text: '致谢', link: '/thanks/' }
    ],

    sidebar: {
      '/courses/': generateCoursesSidebar(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FM-Course/bnbu-fm-course-sharing' }
    ],

    footer: {
      message: 'BNBU-FM课程攻略共享计划',
      copyright: 'Copyright © 2026 BNBU-FM Course Sharing'
    },

    // editLink: {
    //   pattern: 'https://github.com/FM-Course/bnbu-fm-course-sharing/edit/main/docs/:path',
    //   text: '在GitHub上编辑此页面'
    // },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  markdown: {
    lineNumbers: true,
    toc: { level: [2, 3] }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ]
})