const through = require("through2");
const File = require("vinyl");

/**
 * 自定義的 Gulp concat 模組，取代 gulp-concat，無依賴 clone-stats。
 * @param {string} filename - 合併輸出檔案名稱，如 all.js 或 all.css
 * @returns {stream.Transform}
 */
function customConcat(filename) {
  let content = "";

  return through.obj(
    function (file, enc, cb) {
      if (file.isBuffer()) {
        content += file.contents.toString() + "\n";
      }
      cb();
    },
    function (cb) {
      const newFile = new File({
        path: filename,
        contents: Buffer.from(content),
      });
      this.push(newFile);
      cb();
    }
  );
}

module.exports = customConcat;
