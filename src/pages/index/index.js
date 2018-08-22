import Taro, { Component } from '@tarojs/taro'
import { View,Button} from '@tarojs/components'
import './index.scss'
import Api from '../../api'
import ProjectItem from '../../components/projectItem'
import Header from '../../components/header'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(){
    super(...arguments);
    this.state = {
      title:'Hello',
      isToggleOn: true,
      list:[],
      chooseIdx:0,
      menus:[{
        text:'todoList',
        path:'/pages/todo/index'
      },{
        text:'second',
        path:'/pages/second/index'
      }]
    }
    // this.onClick = this.onClick.bind(this)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick = () => {
    // e.stopPropagation();
    console.log('click')
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  getData = async () => {
    let res = await Api.getMock();
    this.setState({
      list:res.data.projects
    })
    console.log(res)
  }

  go = (path) => {
    Taro.navigateTo({
      url:`${path}?params=${Math.random()*10}`
    })
  }

  setChoosed = (val) => {
    this.setState({
      chooseIdx:val
    })
  }

  

  render () {
    return (
      <View className='index' style='text-align:center'>
        <Header></Header>
        <Button onClick={this.onClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</Button>
        {
          this.state.menus.map((val,index)=>{
            return (
              <Button onClick={this.go.bind(this,val.path)} key={index}>导航到{val.text}页</Button>
            )
          })
        }
        <Button onClick={this.getData}>发送请求</Button>
        <View className='list'>
          {
            this.state.list.map((val,index)=>{
                const isOdd = index % 2
                return isOdd && (
                  <ProjectItem itemData={val} key={index} idx={index} onChange = {this.setChoosed.bind(this)}></ProjectItem>
                )
            })
          }
        </View>
        <View>选中：{chooseIdx}</View>
      </View>
    )
  }
}

