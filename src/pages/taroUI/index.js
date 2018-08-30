import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import Header from '../../components/header'

export default class TaroUi extends Component{
    config = {
        navigationBarTitleText:'taroUI'
    }
    constructor(){
        super(...arguments)

    }
    render(){
        return (
            <View className='container'>
                <Header title='taro ui'></Header>
                <View></View>
            </View>
        )
    }
}