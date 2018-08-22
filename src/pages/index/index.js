import Taro, { Component } from '@tarojs/taro'
import { View,Button} from '@tarojs/components'
import './index.scss'
import Api from '../../api'
import ProjectItem from '../../components/projectItem'
import Header from '../../components/header'

import {connect} from '@tarojs/redux'
import * as Actions from '../../store/actions/asyncApi';
import { bindActionCreators } from 'redux'
/* 
  *connect 方法接受两个参数 mapStateToProps 与 mapDispatchToProps
  *mapStateToProps，函数类型，接受最新的 state 作为参数，用于将 state 映射到组件的 props
  *mapDispatchToProps，函数类型，接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
 */
function mapStateToProps(state) {
    return {
        list: state.asyncApi.toJS()
    }
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(Actions, dispatch)
    }
}
@connect(mapStateToProps, mapDispatchToProps)

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(){
    super(...arguments);
    this.state = {
      title:'Hello',
      isToggleOn: true,
      // list:[],
      chooseIdx:0,
      menus:[{
        text:'todoList',
        path:'/pages/counter/index'
      },{
        text:'second',
        path:'/pages/second/index'
      }]
    }
    // this.onClick = this.onClick.bind(this)
  }

  componentWillMount () { }

  componentDidMount () {
  }

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
    // let res = await Api.getMock();
    // this.setState({
    //   list:res.data.projects
    // })
    // console.log(res)
    const {list,getList} = this.props;
    await getList()
    console.log(list)
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
    const {list} = this.props;
    
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
            list.list.map((val,index)=>{
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

