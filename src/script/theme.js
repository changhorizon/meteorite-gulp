const validModes = ["light", "dark", "soft"];

// 初始化主題
function initTheme() {
  const saved = localStorage.getItem("theme-mode");
  const mode = validModes.includes(saved) ? saved : "light";
  applyTheme(mode);
}

// 套用主題
function applyTheme(mode) {
  document.documentElement.setAttribute("data-bs-theme", mode);
  localStorage.setItem("theme-mode", mode);
  updateThemeIcon(mode);
}

// 更新主題圖標
function updateThemeIcon(mode) {
  const button = document.querySelector("#theme-mode-toggle > button");
  const icon = button?.querySelector("i");
  if (!icon) return;

  // 清除現有 bi- 開頭圖標類別
  const currentIconClasses = [...icon.classList].filter((cls) =>
    cls.startsWith("bi-")
  );
  currentIconClasses.forEach((cls) => icon.classList.remove(cls));

  // 添加旋轉動畫，移除動畫後再套用新圖標
  icon.classList.add("theme-icon-rotate");
  setTimeout(() => {
    icon.classList.remove("theme-icon-rotate");
    icon.classList.add(getIconClassForMode(mode));
  }, 400);
}

// 根據主題返回對應的圖標類別
function getIconClassForMode(mode) {
  const iconMap = {
    light: "bi-sun",
    soft: "bi-cloud",
    dark: "bi-moon",
  };
  return iconMap[mode] || "bi-sun"; // 預設為 "light"
}

// 綁定 DOMContentLoaded 初始化
window.addEventListener("DOMContentLoaded", () => {
  initTheme();

  // 綁定主題切換下拉選項事件
  document
    .querySelectorAll("#theme-mode-toggle .dropdown-item")
    .forEach((item) => {
      item.addEventListener("click", () => {
        const icon = item.querySelector("i");
        if (!icon) return;

        // 根據 icon class 判斷主題
        const mode = getModeFromIcon(icon);
        applyTheme(mode);
      });
    });
});

// 根據圖標獲得對應的主題模式
function getModeFromIcon(icon) {
  const classList = icon.classList;
  if (classList.contains("bi-sun")) return "light";
  if (classList.contains("bi-cloud")) return "soft";
  if (classList.contains("bi-moon")) return "dark";
  return "light"; // 預設為 "light"
}
