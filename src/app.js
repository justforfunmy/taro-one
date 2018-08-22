import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

import { Provider } from '@tarojs/redux'
import configStore from './store'

const store = configStore()
class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/second/index',
      'pages/todo/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
      
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
