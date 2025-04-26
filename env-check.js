const fs = require("fs");
const path = require("path");

// 从 .nvmrc 文件读取所需的 Node.js 版本
const nvmrcPath = path.resolve(".nvmrc");
let REQUIRED_NODE_VERSION = "";

try {
  // 读取 .nvmrc 文件内容，并去除空白字符（包括换行符和空格）
  REQUIRED_NODE_VERSION = fs.readFileSync(nvmrcPath, "utf-8").trim();
} catch (err) {
  console.error(
    "Error: Could not read .nvmrc file. Make sure it exists in the current directory."
  );
  process.exit(1); // 如果 .nvmrc 文件无法读取，退出
}

const CURRENT_NODE_VERSION = process.version.slice(1); // 去掉 "v" 前缀

// 检查 Node.js 版本
if (CURRENT_NODE_VERSION !== REQUIRED_NODE_VERSION) {
  console.error(
    `\x1b[41m\x1b[37mError: This project requires Node.js ${REQUIRED_NODE_VERSION}. You are using ${CURRENT_NODE_VERSION}.\x1b[0m\n`
  );
  process.exit(1); // 如果版本不匹配，退出
} else {
  // 版本匹配时输出成功信息
  console.log(`> Node.js version: ${CURRENT_NODE_VERSION}`);
}

// 环境检查完成后继续启动 Gulp 任务
console.log("> Environment check passed.\n");
