import {Module} from '../core/module'
import {getRandomFrom} from '../utils'

const colors = ['#ffa000', '#0affa0', '#fa00ff']

export class BackgroundModule extends Module {
  constructor(type, text, options = {}) {
    super(type, text)

    this.options = options
  }

  trigger() {
    document.body.style.background = getRandomFrom(colors)

    setTimeout(() => {
      document.body.style.background = '#fff'
    }, this.options.delay ?? 3000)
  }
}