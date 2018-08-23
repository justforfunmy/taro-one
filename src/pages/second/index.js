import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

// import {List} from 'immutable'



export default class Second extends Component{
    config = {
        navigationBarTitleText:'第二页'
    }
    componentWillMount(){
        console.log('params',this.$router.params)
    }
    render(){
        return (
            <View>
                <Text>第二页</Text>
            </View>
        )
    }
}