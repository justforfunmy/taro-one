import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'

export default class Header extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        return (
            <View>
                Header
            </View>
        )
    }
}