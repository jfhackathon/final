import {ContextMenu} from './menu'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {BackgroundModule} from './modules/background.module'
import {MessageModule} from '@/modules/message.module'
import './styles.css'

const menu = new ContextMenu('#menu')

menu.add(new ClicksModule('clicks', 'Считать клики (за 3 секунды)'))
menu.add(new ShapeModule('shape', 'Создать фигуру'))
menu.add(new BackgroundModule('background', 'Поменять цвет', {delay: 1200}))
menu.add(new MessageModule('message', 'Вызвать сообщение'))
