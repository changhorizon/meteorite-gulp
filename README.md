# Gulp Adminify

> A backend project framework for quick start, built with Gulp and Bootstrap

![License](https://img.shields.io/github/license/hizpark/gulp-adminify)

基于 Gulp.js 的后台管理页面构建工具包，旨在简化基于 Bootstrap 的后台系统开发流程。它提供了一系列自动化任务、可自定义的构建流程和高效的工作流，帮助开发者快速搭建和定制符合需求的后台管理系统。

## ✨ Features

- **快速起步**：为新的 Web 项目提供一套完整的开发框架，简化项目初期的配置。
- **自动构建**：自动化处理样式、脚本、图片等静态资源，确保开发流程高效。
- **高效开发**：自动启动本地开发服务器，监视文件变化，提升开发效率。
- **主题切换**：支持 Light、Soft、Dark 三种模式，满足不同需求。

## 📦 Installation

确保你已安装 Node.js 和 npm。然后运行以下命令安装项目依赖：

```shell
npm install
```

这将安装 `package.json` 中列出的所有依赖项，包括 Gulp.js、Art-Template、Bootstrap 和 Bootstrap-Icons。

## 🚀 Getting Started

启动开发服务器并进入开发模式，请执行：

```shell
npm start
```

此命令会自动执行以下操作：

- 构建项目
- 启动本地服务器
- 监视文件变化并自动重新加载页面

## 🔨 Build Process

要进行完整构建并压缩输出资源，可以使用：

```shell
npm run build
```

执行后，你会看到类似以下的日志输出：

```shell
[11:34:01] Starting 'clean'...
[11:34:01] Finished 'clean' after 10 ms
[11:34:01] Starting 'static'...
...
```

## 🙏 Acknowledgments

感谢以下开源项目的贡献：

- **[Gulp](https://gulpjs.com/)**：工作流自动化工具
- **[Art-Template](https://aui.github.io/art-template/)**：高性能 JavaScript 模板引擎
- **[Bootstrap](https://getbootstrap.com/)**：功能强大且可扩展的前端 UI 框架
- **[Bootstrap-Icons](https://icons.getbootstrap.com/)**：免费、高质量的图标库

## 📝 License

MIT License. See the [LICENSE](LICENSE) file for details.
