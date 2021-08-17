import {Module} from '@/core/module'

export class MessageModule extends Module {
  constructor(...args) {
    super(...args)
  }

  trigger() {
    const node = document.createElement('div')
    node.classList.add('message')

    node.textContent = 'This is message'

    document.body.append(node)

    setTimeout(() => {
      node.remove()
    }, 3000)
  }
}