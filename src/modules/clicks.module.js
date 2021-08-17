import {Module} from '../core/module'

export class ClicksModule extends Module {
  clicks = 0
  dlbClicks = 0

  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    document.onclick = () => this.clicks++
    document.ondblclick = () => this.dlbClicks++

    setTimeout(() => {
      document.onclick = null
      document.ondblclick = null

      alert(`Кликов: ${this.clicks}, Двойных: ${this.dlbClicks}`)
      this.reset()
    }, 3000)
  }

  reset() {
    this.clicks = 0
    this.dlbClicks = 0
  }
}