import themeSwitcher from "./theme-switcher.js"
import calculate from "./calculate.js"
import { handleBtnPress, handleTyping, handleClearBtn } from "./keyHandlers.js"
import copyToClipboard from "./copyToClickboard.js"

document.querySelectorAll('.charKey').forEach((charKeyBtn) => charKeyBtn.addEventListener('click' , handleBtnPress))
document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)
document.getElementById('clear').addEventListener('click', handleClearBtn)
