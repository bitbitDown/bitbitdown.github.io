# 清新博客系统

一个基于 Nuxt 3 + Tailwind CSS 构建的现代化、清新风格的博客系统。

## ✨ 特性

- 🎨 **清新设计** - 现代化的 UI 设计，渐变色彩搭配
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **高性能** - 基于 Nuxt 3 的 SSR/SSG 支持
- 📝 **内容管理** - 使用 Nuxt Content 管理 Markdown 文章
- 🎯 **SEO 优化** - 内置 SEO 优化和元标签管理
- 🚀 **快速部署** - 支持静态站点生成和部署

## 🛠️ 技术栈

- **框架**: Nuxt 3
- **样式**: Tailwind CSS
- **内容管理**: Nuxt Content
- **语言**: TypeScript
- **构建工具**: Vite

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

### 生成静态站点

```bash
npm run generate
```

## 📁 项目结构

```
├── app/
│   ├── assets/css/          # 样式文件
│   ├── pages/               # 页面组件
│   │   ├── blog/           # 博客相关页面
│   │   ├── index.vue        # 首页
│   │   └── about.vue        # 关于页面
│   └── app.vue              # 根组件
├── content/                 # 内容文件
│   └── blog/               # 博客文章
├── public/                 # 静态资源
└── nuxt.config.ts         # Nuxt 配置
```

## 📝 添加文章

在 `content/blog/` 目录下创建 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
date: "2024-01-01"
---

# 文章内容

这里是你的文章内容...
```

## 🎨 自定义样式

项目使用 Tailwind CSS，你可以在 `app/assets/css/main.css` 中添加自定义样式。

## 📱 页面说明

- **首页** (`/`) - 展示最新文章和博客介绍
- **博客列表** (`/blog`) - 所有文章的列表页面
- **文章详情** (`/blog/[slug]`) - 单篇文章的详情页面
- **关于页面** (`/about`) - 个人介绍和技能展示

## 🚀 部署

### GitHub Pages

1. 构建项目：
```bash
npm run generate
```

2. 将 `dist` 目录的内容推送到 GitHub Pages

### Vercel

1. 连接 GitHub 仓库到 Vercel
2. 自动部署，无需额外配置

### Netlify

1. 连接 GitHub 仓库到 Netlify
2. 构建命令：`npm run generate`
3. 发布目录：`dist`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
