---


---
title: "拒绝重复代码，灵活使用模版指令，快来了解一下vscode"
description: "这是我的第一篇博客文章"
date: "2023-03-25"
------------------


## 利用vscode snippets生成代码模版减少重复开发时间，增加摸鱼时间

### 什么是snippets?

**Visual Studio Code（VS Code）提供了一个强大的功能，叫做“代码片段（Snippets）”，它允许你只需按下几个按键，就能快速插入常用的代码片段。**

**以下是在VS Code中创建和使用代码片段的步骤：**

1. **创建新的代码片段文件：在VS Code中，打开命令面板（Ctrl/Cmd + Shift + P）并搜索“Preferences: Configure User Snippets”。选择你想要创建代码片段的编程语言，系统会打开一个新的文件，该文件将具有适当的文件扩展名（例如.json）。**
2. **定义代码片段：在代码片段文件中，创建一个对象，包括代码片段的名称、前缀（代码片段的快捷方式）和主体（你要插入的代码）。例如，一个基本的vue模板可以如下所示：**

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6d0521e50164fddbef65f306f0cf2bb~tplv-k3u1fbpfcp-watermark.image?)

3. **保存文件：在定义好代码片段后，保存文件。文件名应该与你在第1步选择的语言ID相匹配，后面加上“.json”（例如，vue代码片段的文件名应该是“vue.json”）。可以看到配置总共为4个属性，****name**是**prefix**就是**指令名**，之后会用到

```
{
  "Print to console": {
    "prefix": "v",
    "body": [
      "<script setup lang='ts'>",
      "",
      "</script>",
      "",
      "<template>",
      "  <div>",
      "        $0",
      "  </div>",
      "</template>",
      "",
      "<style lang=\"scss\" scoped>",
      "</style>"
    ],
    "description": "A vue file template"
  }
}

```

4. **使用代码片段：要使用代码片段，只需输入你在代码片段文件中定义的前缀（****prefix**），然后按Tab键。代码片段将插入到光标位置。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28b5e12daae3471b960f8fb09289d71b~tplv-k3u1fbpfcp-watermark.image?)

### snippets用处

**代码片段可以在编写代码时节省大量时间，特别是对于重复性的任务。你可以为常用的函数、模板甚至整个类创建代码片段。通过一些实践，你将能够快速创建和使用代码片段。**

#### 痛点

**snippet是好用，但是我们要复制一个组件的代码模版，难道还需要一行行给他添加双引号吗？在编写snippets过程中，我确实感到无语，手动编写一个snippets简直就是戴了痛苦面具，就像下面我做的这样**

**不仅单词容易拼错，模版中的双引号、$符号等也需要改为转义字符，非常麻烦，所以我没有耐心继续编写下去了**

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f11c273016c14068b09d3142c28487ff~tplv-k3u1fbpfcp-watermark.image?)

#### snippets-generator

**于是我花时间编写了一个应用 (snippets-generator)，可以自动将代码模块转化成snippets，**

**git地址**：

**Vue3+TS+ElementPlus** :[https://github.com/Yu-Zhang666/code-snippet-generator/](https://github.com/Yu-Zhang666/code-snippet-generator/)

**我们先在输入框填一下基本信息，然后复制输出信息到vscode的json文件，接下来就可以使用命令快速生成模版了**

**下边是使用的演示过程**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3fa1676928644842bc0994595d2f4d4b~tplv-k3u1fbpfcp-watermark.image?)

**接下来将复制的snippets拷贝到vscode的 json文件中，之后就可以在文件中使用命令啦**

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6575453ed088423f9ed2af071602bbb3~tplv-k3u1fbpfcp-watermark.image?)
