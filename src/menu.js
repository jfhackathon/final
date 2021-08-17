import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  modules = []

  constructor(selector) {
    super(selector)

    this.el.addEventListener('click', event => {
      const type = event.target.dataset.type
      if (type) {
        const module = this.modules.find(m => m.type === type)
        module.trigger()
        this.close()
      }
    })

    document.addEventListener('contextmenu', event => {
      event.preventDefault()
      this.open(event.clientY, event.clientX)
    })
  }

  open(top = 0, left = 0) {
    if (this.modules.length === 0) {
      console.warn('No items in menu')
      return
    }
    this.el.style.top = `${top}px`
    this.el.style.left = `${left}px`
    this.el.classList.add('open')
  }

  close() {
    this.el.classList.remove('open')
  }

  add(module) {
    this.modules.push(module)
    this.el.insertAdjacentHTML('beforeend', module.toHTML())
  }
}