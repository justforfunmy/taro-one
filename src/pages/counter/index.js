import Taro,{Component} from '@tarojs/taro'
import {View , Button} from '@tarojs/components'
import './index.scss'

import {connect} from '@tarojs/redux'
import * as Actions from '../../store/actions/counter';
import { bindActionCreators } from 'redux'
/* 
  *connect 方法接受两个参数 mapStateToProps 与 mapDispatchToProps
  *mapStateToProps，函数类型，接受最新的 state 作为参数，用于将 state 映射到组件的 props
  *mapDispatchToProps，函数类型，接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
 */
function mapStateToProps(state) {
    return {
        counter: state.counter.toJS()
    }
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(Actions, dispatch)
    }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Todo extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            todoList:[]
        }
    }

    render(){
        const { add, minus, asyncAdd } = this.props
        return (
            <View className='todo'>
                <Button className='add_btn' onClick={add}>+</Button>
                <Button className='dec_btn' onClick={minus}>-</Button>
                <Button className='dec_btn' onClick={asyncAdd}>async</Button>
                <View>{this.props.counter.num}</View>
            </View>
        )
    }
}