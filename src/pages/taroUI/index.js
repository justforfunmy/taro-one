import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import Header from '../../components/header'
import Flex from '../../components/flex'

export default class TaroUi extends Component{
    config = {
        navigationBarTitleText:'taroUI'
    }
    constructor(){
        super(...arguments)
        this.state = {
            test:'test'
        }
    }
    render(){
        return (
            <Flex type='allCenter' direction='column'>
                <Header title='flex'></Header>
                <Flex type='allCenter'>
                    <View className='fg'>{this.state.test}</View>
                    <View>rest of content</View>
                </Flex>
                
            </Flex>
        )
    }
}