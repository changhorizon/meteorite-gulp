# Adminify Gulp (Legacy)

> Legacy admin dashboard build toolkit based on Gulp and Bootstrap.

![License](https://img.shields.io/github/changhorizon/meteorite-gulp)

**Adminify Gulp** is a legacy admin dashboard build toolkit based on **Gulp.js** and **Bootstrap**.
It was designed to simplify the development workflow of traditional admin systems by providing automated tasks, customizable build pipelines, and a streamlined front-end workflow.

> ⚠️ This project represents an **early-generation frontend stack** and is no longer actively maintained.
> It is preserved for historical reference and learning purposes.

## ✨ Features

- **Quick Start**
  Provides a ready-to-use structure for building admin dashboards with minimal setup.

- **Automated Build Pipeline**
  Handles stylesheets, scripts, images, and static assets using Gulp tasks.

- **Efficient Development Workflow**
  Built-in local development server with file watching and live reload.

- **Theme Modes**
  Supports **Light**, **Soft**, and **Dark** themes for different UI preferences.

## 📦 Installation

Make sure you have **Node.js** and **npm** installed, then install dependencies:

```shell
npm install
```

This installs all required packages listed in `package.json`, including **Gulp**, **Art-Template**, **Bootstrap**, and **Bootstrap Icons**.

## 🚀 Getting Started

To start the development environment, run:

```shell
npm start
```

This command will:

- Build project assets
- Start a local development server
- Watch for file changes and reload automatically

## 🔨 Build Process

To generate a production-ready build with optimized assets:

```shell
npm run build
```

You will see logs similar to:

```text
[11:34:01] Starting 'clean'...
[11:34:01] Finished 'clean' after 10 ms
[11:34:01] Starting 'static'...
...
```

## 🙏 Acknowledgments

This project is built upon the following open-source tools:

- **[Gulp](https://gulpjs.com/)** – Task runner and build automation
- **[Art-Template](https://aui.github.io/art-template/)** – High-performance JavaScript templating engine
- **[Bootstrap](https://getbootstrap.com/)** – Popular UI framework
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** – Open-source icon library

## 📝 License

MIT License. See the [LICENSE](LICENSE) file for details.
