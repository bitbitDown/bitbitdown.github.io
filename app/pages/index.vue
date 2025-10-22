<script setup>
// 获取最新的博客文章
const { data: latestPosts } = await useAsyncData('latest-posts', () => 
  queryCollection('blog').all().then(posts => posts.slice(0, 3))
)
</script>

<template>
  <div class="min-h-screen nidalee-bg jungle-pattern">
    <!-- 英雄区域 -->
    <section class="relative py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <h1 class="text-5xl md:text-6xl font-bold text-green-800 mb-4">
            欢迎来到
            <span class="gradient-text">
              奈德丽的丛林
            </span>
          </h1>
          <p class="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
            在丛林中狩猎技术，用代码征服每一个挑战。记录每一次狩猎的收获与成长。
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/blog" 
            class="nidalee-btn group text-white px-8 py-4 font-semibold text-lg flex items-center gap-2"
          >
            开始狩猎
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
          
          <a 
            href="https://github.com/bitbitDown" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-green-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            我的领地
          </a>
        </div>
      </div>
    </section>

    <!-- 最新文章区域 -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">最新狩猎记录</h2>
          <p class="text-green-700 text-lg">记录每一次技术狩猎的收获与心得</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in latestPosts" 
            :key="post.path"
            class="nidalee-card group overflow-hidden hover:-translate-y-2"
          >
            <div class="p-6">
              <div class="mb-4">
                <span class="inline-block bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {{ new Date(post.date).toLocaleDateString('zh-CN') }}
                </span>
              </div>
              <NuxtLink :to="post.path" class="block">
                <h3 class="text-xl font-bold text-green-800 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="text-green-700 line-clamp-3">{{ post.description }}</p>
              </NuxtLink>
              <div class="mt-6 flex items-center justify-between">
                <NuxtLink 
                  :to="post.path" 
                  class="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors flex items-center gap-1"
                >
                  查看狩猎详情
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink 
            to="/blog" 
            class="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
          >
            查看所有文章
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 特色区域 -->
    <section class="py-16 px-4 bg-white/50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-green-800 mb-8">奈德丽的狩猎技能</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="nidalee-card p-6">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">技术狩猎</h3>
            <p class="text-green-700">在技术丛林中狩猎最新的开发技能和解决方案</p>
          </div>
          
          <div class="nidalee-card p-6">
            <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">成长记录</h3>
            <p class="text-green-700">记录每一次狩猎的收获和成长感悟</p>
          </div>
          
          <div class="nidalee-card p-6">
            <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">持续进化</h3>
            <p class="text-green-700">像豹子一样敏捷，不断适应新的技术环境</p>
          </div>
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
</style>