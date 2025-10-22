<template>
  <div class="min-h-screen nidalee-bg jungle-pattern">
    <!-- 页面头部 -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          关于奈德丽
        </h1>
        <p class="text-xl text-green-700 max-w-2xl mx-auto">
          丛林中的技术猎手，用代码征服每一个挑战
        </p>
      </div>
    </section>

    <!-- 个人介绍 -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- 头像和基本信息 -->
          <div class="text-center lg:text-left">
            <div class="w-48 h-48 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8">
              <div class="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
            
            <h2 class="text-3xl font-bold text-green-800 mb-4">你好，我是奈德丽</h2>
            <p class="text-lg text-green-700 mb-6 leading-relaxed">
              我是一名技术猎手，在代码的丛林中狩猎最新的技术。像豹子一样敏捷，像丛林一样深邃。
              在这个技术领地中，我会分享我的狩猎经验、技术心得和成长感悟。
            </p>
            
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/bitbitDown" 
                target="_blank" 
                rel="noopener noreferrer"
                class="nidalee-btn inline-flex items-center gap-2 text-white px-6 py-3 font-semibold"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                我的领地
              </a>
              
              <a 
                href="mailto:your-email@example.com" 
                class="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors border-2 border-green-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                联系猎手
              </a>
            </div>
          </div>

          <!-- 技能和兴趣 -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-6">技能栈</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl shadow-lg">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800">前端开发</span>
                  </div>
                  <p class="text-sm text-gray-600">Vue.js, React, TypeScript</p>
                </div>
                
                <div class="bg-white p-4 rounded-xl shadow-lg">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800">后端开发</span>
                  </div>
                  <p class="text-sm text-gray-600">Node.js, Python</p>
                </div>
                
                <div class="bg-white p-4 rounded-xl shadow-lg">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800">数据库</span>
                  </div>
                  <p class="text-sm text-gray-600">MySQL, MongoDB, Redis</p>
                </div>
                
                <div class="bg-white p-4 rounded-xl shadow-lg">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800">工具</span>
                  </div>
                  <p class="text-sm text-gray-600">Git, Docker, AWS</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-6">兴趣爱好</h3>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">编程</span>
                <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">阅读</span>
                <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">摄影</span>
                <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">旅行</span>
                <span class="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">音乐</span>
                <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">运动</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="py-16 px-4 bg-white/50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">工作经历</h2>
        
        <div class="space-y-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800 mb-2">高级前端开发工程师</h3>
                <p class="text-blue-600 font-semibold mb-2">科技公司 • 2024 - 至今</p>
                <p class="text-gray-600 leading-relaxed">
                  负责公司核心产品的前端开发，使用 Vue.js 和 React 构建高性能的用户界面。
                  参与技术选型和架构设计，带领团队完成多个重要项目。
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vue.js</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TypeScript</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">团队管理</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800 mb-2">全栈开发工程师</h3>
                <p class="text-blue-600 font-semibold mb-2">互联网公司 • 2021 - 2024</p>
                <p class="text-gray-600 leading-relaxed">
                  负责全栈应用开发，包括前端界面设计和后端 API 开发。
                  使用 Node.js 和 Vue.js 构建了多个企业级应用。
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vue.js</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MongoDB</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">全栈开发</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我 -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">联系我</h2>
        <p class="text-xl text-gray-600 mb-12">
          有想法想要交流？欢迎随时联系我！
        </p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">邮箱</h3>
            <p class="text-gray-600 mb-4">1415989230@qq.com</p>
            <a 
              href="mailto:your-email@example.com" 
              class="text-blue-600 hover:text-blue-800 transition-colors"
            >
              发送邮件
            </a>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">GitHub</h3>
            <p class="text-gray-600 mb-4">@bitbitDown</p>
            <a 
              href="https://github.com/bitbitDown" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 transition-colors"
            >
              查看项目
            </a>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">微信</h3>
            <p class="text-gray-600 mb-4">扫码添加好友</p>
            <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
              <span class="text-gray-400 text-sm">
                <img src="@/assets/icons/my-wechat.jpg"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 设置页面元信息
useHead({
  title: '关于我 - 我的博客',
  meta: [
    { name: 'description', content: '了解我的技术背景、工作经历和兴趣爱好' }
  ]
})
</script>
