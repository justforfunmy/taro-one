import Taro,{Component} from '@tarojs/taro'
import {View , Button} from '@tarojs/components'
import './index.scss'

import {connect} from '@tarojs/redux'
import * as Actions from '../../store/actions/counter';
import { bindActionCreators } from 'redux'

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