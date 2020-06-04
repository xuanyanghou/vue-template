const hasKeybordEvent = () => (
  typeof KeyboardEvent === 'function' &&
  (new KeyboardEvent(null)).key
)

const codeName = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  27: 'Escape',
  38: 'ArrowUp',
  40: 'ArrowDown'
}

export default {
  install () {
    if (this.installed || hasKeybordEvent()) return

    this.installed = true

    Object.defineProperties(KeyboardEvent.prototype, {
      key: {
        get () {
          if (this.code === 'NumpadEnter') { // 兼容小键盘enter键
            return 'Enter'
          } else {
            return this.code || codeName[this.keyCode]
          }
        },
        set () {
          console.error('Do NOT set this polyfilled property! KeyboardEvent[key]')
        }
      }
    })
  }
}
