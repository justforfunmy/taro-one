import Taro,{Component} from '@tarojs/taro'
import {View,Button,Input} from '@tarojs/components'
import './index.scss'



import {connect} from '@tarojs/redux'
import * as Actions from '../../store/actions/todo';
import { bindActionCreators } from 'redux'


/* 
  *connect 方法接受两个参数 mapStateToProps 与 mapDispatchToProps
  *mapStateToProps，函数类型，接受最新的 state 作为参数，用于将 state 映射到组件的 props
  *mapDispatchToProps，函数类型，接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
 */
function mapStateToProps(state) {
    return {
        todoList: state.todo.toJS(),
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
            inputVal:''
        }
    }

    handleInput = (e)=>{
        this.setState({
            inputVal:e.detail.value
        })
    }

    handleAdd = (item) =>{
        if(item===''){
            Taro.showToast({
                title:'请输入事件',
                icon:'none'
            })
        }else{
            this.props.add({text:item,status:0})
            console.log(this.props.todoList) 
        }
    }

    changeStatus = (item) =>{
        console.log(item)
        if(item.status === 0){
            this.props.finish(item)
        }else{
            this.props.unFinish(item)
        }
        
    }

    render(){
        const {todoList} = this.props
        return (
            <View className='all-center flex-col container'>
                <View>todo List</View>
                <View className='all-center' style='border-bottom:1px solid grey'>
                    <View className='fg'>
                        <Input placeholder='请输入事件' value={this.state.inputVal} onInput={this.handleInput}/>
                    </View>
                    <Button onClick={this.handleAdd.bind(this,this.state.inputVal)}>添加</Button>
                    <Button onClick={this.props.clear}>清空</Button>
                </View>
                {
                    todoList.map((val,index)=>{
                        return (
                            <View key={val.id} className='all-center list-item'>
                                <View className='fg' style={{textDecoration:val.status===1?'line-through':'none'}}>{index}.{val.text}</View>
                                <Button onClick={this.props.deleteItem.bind(this,val.id)}>删除</Button>
                                <Button onClick={this.changeStatus.bind(this,val)}>{val.status===0?'完成':'未完成'}</Button>
                            </View>
                        )
                    })
                }
                
            </View>
        )
        
    }
}