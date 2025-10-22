<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())

// 按日期排序，最新的在前
const sortedPosts = computed(() => {
  if (!posts.value) return []
  return [...posts.value].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- 页面头部 -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          博客文章
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          分享技术见解、生活感悟，记录成长路上的点点滴滴
        </p>
        <div class="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span>{{ posts?.length || 0 }} 篇文章</span>
          </div>
          <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>持续更新中</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 文章列表 -->
    <section class="pb-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div v-if="sortedPosts.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">暂无文章</h3>
          <p class="text-gray-600">还没有发布任何文章，敬请期待！</p>
        </div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="(post, index) in sortedPosts" 
            :key="post.path"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- 文章头部 -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="inline-block bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ new Date(post.date).toLocaleDateString('zh-CN') }}
                </span>
                <div class="flex items-center gap-2 text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-xs">5 分钟阅读</span>
                </div>
              </div>

              <!-- 文章标题和描述 -->
              <NuxtLink :to="post.path" class="block">
                <h2 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {{ post.title }}
                </h2>
                <p class="text-gray-600 line-clamp-3 mb-4">{{ post.description }}</p>
              </NuxtLink>

              <!-- 文章标签 -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                  技术分享
                </span>
                <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                  前端开发
                </span>
              </div>

              <!-- 文章底部 -->
              <div class="flex items-center justify-between">
                <NuxtLink 
                  :to="post.path" 
                  class="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1 group"
                >
                  阅读全文
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
                
                <div class="flex items-center gap-3 text-gray-400">
                  <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="点赞">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                  <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="分享">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- 加载更多按钮 -->
        <div v-if="sortedPosts.length > 6" class="text-center mt-12">
          <button class="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
            加载更多文章
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- 订阅区域 -->
    <section class="py-16 px-4 bg-white/50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">订阅更新</h2>
        <p class="text-gray-600 mb-8">第一时间获取最新文章推送</p>
        <div class="max-w-md mx-auto">
          <div class="flex gap-3">
            <input 
              type="email" 
              placeholder="输入你的邮箱地址" 
              class="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
              订阅
            </button>
          </div>
          <p class="text-sm text-gray-500 mt-3">我们承诺不会发送垃圾邮件</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 文章卡片动画 */
article {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
