// === 常量定義 ===
const BREAKPOINT = 992
const STORAGE_KEY = "activeMenuId"

// === 元素存取 ===
function getSidebar() {
  return document.querySelector(".sidebar") // 限制範圍到 .sidebar
}

// === 側邊欄控制 ===

// 響應式控制側邊欄（初始與 resize 用）
function updateSidebarState() {
  const sidebar = getSidebar()
  if (!sidebar) return

  const shouldCollapse = window.innerWidth <= BREAKPOINT
  sidebar.classList.toggle("collapsed", shouldCollapse)
  sidebar.classList.toggle("expanded", !shouldCollapse)

  shouldCollapse ? closeAllSubMenus() : expandActiveMenu()
}

// 點擊開關控制側邊欄
function toggleSidebar(forceExpand = null) {
  const sidebar = getSidebar()
  if (!sidebar) return

  const isCollapsed = sidebar.classList.contains("collapsed")
  const shouldCollapse = forceExpand !== null ? !forceExpand : !isCollapsed

  sidebar.classList.toggle("collapsed", shouldCollapse)
  sidebar.classList.toggle("expanded", !shouldCollapse)

  shouldCollapse ? closeAllSubMenus() : expandActiveMenu()
}

// === 子選單控制 ===

// 關閉所有展開的子選單
function closeAllSubMenus() {
  const sidebar = getSidebar()
  sidebar.querySelectorAll(".sub-menu.open").forEach((el) => {
    el.classList.remove("open")
  })
}

// 展開當前 active 子選單（非首頁）
function expandActiveMenu() {
  const sidebar = getSidebar()
  const active = sidebar.querySelector(".nav-link.active[data-menu-id]")
  if (active) {
    const subMenuId = active.getAttribute("data-menu-id")
    handleMenuClick(subMenuId)
  }
}

// 切換子選單開關
function toggleSubMenu(subMenuId) {
  if (!subMenuId) return

  const sidebar = getSidebar()
  const subMenu = sidebar.querySelector(`#${subMenuId}`)
  const link = sidebar.querySelector(`.nav-link[data-menu-id="${subMenuId}"]`)
  if (!subMenu || !link) return

  if (shouldPreventToggle(link, subMenu)) return

  subMenu.classList.toggle("open")
}

// 防止不必要的 toggle：當前 active + 展開 + 側欄非摺疊
function shouldPreventToggle(link, subMenu) {
  const isActive = link.classList.contains("active")
  const isSidebarCollapsed = getSidebar()?.classList.contains("collapsed")
  const isOpen = subMenu.classList.contains("open")

  return isActive && !isSidebarCollapsed && isOpen
}

// 展開目標 menu 的父選單
function openParentMenu(link) {
  const subMenuId = link.closest(".sub-menu")?.id
  if (subMenuId) handleMenuClick(subMenuId)
}

// === Active menu 控制 ===

// 設定 active menu 樣式
function setActiveMenu(link) {
  if (!link) return

  const sidebar = getSidebar()
  sidebar.querySelectorAll(".nav-link.active").forEach((el) => {
    el.classList.remove("active")
  })

  link.classList.add("active")

  const parentLink = link
    .closest(".menu-item")
    ?.querySelector(":scope > .nav-link")
  parentLink?.classList.add("active")
}

// 還原上次的 active menu
function restoreMenuState() {
  const sidebar = getSidebar()
  const isCollapsed = sidebar?.classList.contains("collapsed")

  if (isHomePage()) {
    localStorage.removeItem(STORAGE_KEY)
    return
  }

  const activeId = localStorage.getItem(STORAGE_KEY)
  if (activeId) {
    const link = sidebar.querySelector(`#${activeId}`)
    if (link) {
      setActiveMenu(link)
      if (!isCollapsed) openParentMenu(link)
    }
  }
}

// 判斷是否為首頁（根據 #home-link 對應 href）
function isHomePage() {
  const homePath =
    document.getElementById("home-link")?.getAttribute("href") || "/"
  return window.location.pathname === homePath
}

// === 選單點擊邏輯 ===

// 處理主選單點擊（展開側欄 + 切換子選單）
function handleMenuClick(subMenuId) {
  const sidebar = getSidebar()
  if (!sidebar) return

  if (sidebar.classList.contains("collapsed")) {
    toggleSidebar(true)
  }

  toggleSubMenu(subMenuId)
}

// 綁定主選單與子選單點擊事件
function setupMenuHandlers() {
  const sidebar = getSidebar()
  sidebar.querySelectorAll(".nav-link[data-menu-id]").forEach((link) => {
    link.addEventListener("click", function () {
      const id = this.getAttribute("data-menu-id")
      handleMenuClick(id)
    })
  })

  sidebar.querySelectorAll(".sub-menu .nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (this.id) localStorage.setItem(STORAGE_KEY, this.id)
      setActiveMenu(this)
    })
  })
}

// 綁定側邊欄開關按鈕事件
function setupSidebarToggleHandler() {
  const sidebarToggle = document.getElementById("sidebar-toggle")
  sidebarToggle?.addEventListener("click", () => {
    toggleSidebar()
  })
}

// === 初始化 ===

// 防抖函數
function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// 初始化主流程
function initMenuSystem() {
  updateSidebarState()
  setupSidebarToggleHandler()
  restoreMenuState()
  setupMenuHandlers()
}

// === DOM 綁定 ===
window.addEventListener("DOMContentLoaded", initMenuSystem)
window.addEventListener("resize", debounce(updateSidebarState, 200))
