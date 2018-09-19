import Taro, { Component } from '@tarojs/taro'
import { View,Button} from '@tarojs/components'
import './index.scss'

export default class Flex extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        let _flexType = '';
        switch (this.props.type) {
            case 'allCenter':
                _flexType = 'all-center'
                break;
        
            default: 
                break;
        }
        
        let _flexDirection = 'row'
        switch (this.props.direction) {
            case 'column':
                _flexDirection = 'column'
                break;
            
            default:
                break;
        }
        return (
            <View className={`flex-container ${_flexType} ${_flexDirection}`}>
                {this.props.children}
            </View>
        )
    }
}