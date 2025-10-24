<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- 文章头部 -->
    <article v-if="doc" class="py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- 返回按钮 -->
        <div class="mb-8">
          <NuxtLink 
            to="/blog" 
            class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            返回博客列表
          </NuxtLink>
        </div>

        <!-- 文章标题和元信息 -->
        <header class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {{ doc.title  }}
          </h1>
          
          <div class="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>{{ new Date(doc.date || doc._raw?.value?.date).toLocaleDateString('zh-CN') }}</span>
            </div>
            
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>5 分钟阅读</span>
            </div>
            
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>技术分享</span>
            </div>
          </div>

          <!-- 文章描述 -->
          <p v-if="doc.description || doc._raw?.value?.description" class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {{ doc.description || doc._raw?.value?.description }}
          </p>
        </header>

        <!-- 文章内容 -->
        <div class="prose prose-lg max-w-none">
          <ContentRenderer v-if="doc" :value="doc" />
        </div>

        <!-- 文章底部操作 -->
        <div class="mt-16 pt-8 border-t border-gray-200">
          <div class="flex flex-wrap items-center justify-between gap-6">
            <!-- 标签 -->
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                技术分享
              </span>
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                前端开发
              </span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Nuxt.js
              </span>
            </div>

            <!-- 分享按钮 -->
            <div class="flex items-center gap-3">
              <span class="text-gray-600 font-medium">分享到：</span>
              <button class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="分享到微信">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.882-6.348-7.386-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18z"/>
                </svg>
              </button>
              <button class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="分享到微博">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 2 2 0 010-2.828l3-3zM11 21h2a1 1 0 100-2h-2a1 1 0 100 2z"/>
                </svg>
              </button>
              <button class="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all" title="复制链接">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- 相关文章推荐 -->
        <section class="mt-16">
          <h3 class="text-2xl font-bold text-gray-800 mb-8">相关文章推荐</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <article class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">技术</span>
                <span class="text-sm text-gray-500">2024-01-15</span>
              </div>
              <h4 class="text-lg font-semibold text-gray-800 mb-2">Vue 3 组合式 API 最佳实践</h4>
              <p class="text-gray-600 text-sm">深入探讨 Vue 3 组合式 API 的使用技巧和最佳实践...</p>
            </article>
            
            <article class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">前端</span>
                <span class="text-sm text-gray-500">2024-01-10</span>
              </div>
              <h4 class="text-lg font-semibold text-gray-800 mb-2">现代 CSS 布局技巧</h4>
              <p class="text-gray-600 text-sm">掌握 Flexbox 和 Grid 布局，打造响应式设计...</p>
            </article>
          </div>
        </section>
      </div>
    </article>

    <!-- 文章未找到 -->
    <div v-else class="py-16 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-4">文章未找到</h1>
        <p class="text-gray-600 mb-8">抱歉，您访问的文章不存在或已被删除。</p>
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          返回博客列表
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: doc } = await useAsyncData(route.params.slug, () =>
  queryCollection('blog').path(route.path).first()
)

console.log('doc',doc)
</script>

<style scoped>
/* 文章内容样式 */
.prose {
  color: #374151;
  line-height: 1.75;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  color: #1f2937;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h1 {
  font-size: 2.25rem;
  line-height: 1.2;
}

.prose h2 {
  font-size: 1.875rem;
  line-height: 1.3;
}

.prose h3 {
  font-size: 1.5rem;
  line-height: 1.4;
}

.prose p {
  margin-bottom: 1.5rem;
}

.prose a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.prose a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.prose blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #6b7280;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #dc2626;
}

.prose pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 2rem 0;
}

.prose pre code {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

.prose ul,
.prose ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.prose li {
  margin: 0.5rem 0;
}

.prose img {
  border-radius: 0.75rem;
  margin: 2rem 0;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
