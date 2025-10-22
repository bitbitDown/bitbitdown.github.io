import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  
  // 开发服务器配置
  devServer: {
    host: '0.0.0.0', // 允许外部访问
    port: 4001,      // 端口号
  },
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});