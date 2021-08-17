import {Module} from '@/core/module'

export class TimerModule extends Module {
  constructor(type, text, options = {}) {
    super(type, text)

    this.options = options
  }

  trigger() {

  }
}