import {Module} from '../core/module'
import {getRandomFrom, random} from '../utils'

const colors = ['#ff0000', '#00ff00', '#0000ff']
const radiuses = ['50%', 'none', '35%']

export class ShapeModule extends Module {
  constructor(...args) {
    super(...args)
  }

  trigger() {
    const node = document.createElement('div')
    node.style.position = 'fixed'

    node.style.width = `${random(45, 150)}px`
    node.style.height = `${random(45, 150)}px`

    node.style.background = getRandomFrom(colors)

    node.style.borderRadius = getRandomFrom(radiuses)
    node.style.top = `${random(45, 250)}px`
    node.style.left = `${random(45, 650)}px`

    document.body.append(node)

    setTimeout(() => {
      node.remove()
      // todo: delay move to option
    }, 3000)
  }
}