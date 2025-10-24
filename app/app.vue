<template>
  <div class="min-h-screen nidalee-bg jungle-pattern">
    <!-- 全局导航栏 -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-green-600 shadow-lg">
      <nav class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="group flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <!-- 奈德丽豹子图标 -->
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-green-800 group-hover:text-yellow-600 transition-colors">
              奈德丽的丛林
            </span>
          </NuxtLink>

          <!-- 导航菜单 -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink 
              to="/" 
              class="no-underline! text-green-700 hover:text-yellow-600 font-medium transition-colors relative group"
            >
              丛林营地
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="no-underline! text-green-700 hover:text-yellow-600 font-medium transition-colors relative group"
            >
              狩猎日志
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="no-underline! text-green-700 hover:text-yellow-600 font-medium transition-colors relative group"
            >
              关于奈德丽
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
            
            <!-- 社交链接 -->
            <div class="flex items-center gap-3 ml-4 pl-4 border-l border-green-300">
              <a 
                href="https://github.com/bitbitDown" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2 text-green-600 hover:text-yellow-600 hover:bg-green-100 rounded-lg transition-all"
                title="GitHub"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="//https://juejin.cn/user/620537392934711" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2 text-green-600 hover:text-yellow-600 hover:bg-green-100 rounded-lg transition-all"
                title="掘金"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- 移动端菜单按钮 -->
          <button 
            class="md:hidden p-2 text-green-600 hover:text-yellow-600 hover:bg-green-100 rounded-lg transition-all"
            @click="toggleMobileMenu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- 移动端菜单 -->
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-green-300">
          <div class="flex flex-col gap-4">
            <NuxtLink 
              to="/" 
              class="no-underline! text-green-700 hover:text-yellow-600 font-medium transition-colors py-2"
              @click="closeMobileMenu"
            >
              丛林营地
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="no-underline! text-green-700 hover:text-yellow-600 font-medium transition-colors py-2"
              @click="closeMobileMenu"
            >
              狩猎日志
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="no-underline! text-green-700 hover:text-yellow-600 font-medium transition-colors py-2"
              @click="closeMobileMenu"
            >
              关于奈德丽
            </NuxtLink>
            <div class="pt-4 border-t border-gray-200">
              <a 
                href="https://github.com/bitbitDown" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors py-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- 页面内容 -->
    <main>
      <NuxtPage />
    </main>

    <!-- 全局页脚 -->
    <footer class="bg-gradient-to-r from-green-800 to-green-900 text-white mt-16">
      <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- 博客信息 -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span class="text-xl font-bold text-yellow-300">奈德丽的丛林</span>
            </div>
            <p class="text-green-100 mb-6 max-w-md">
              在丛林中狩猎技术，用代码征服每一个挑战。这里是奈德丽的技术领地，记录着每一次狩猎的收获与成长。
            </p>
            <div class="flex gap-4">
              <a 
                href="https://github.com/bitbitDown" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                title="GitHub"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {{ new Date().getFullYear() }} 我的博客. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
