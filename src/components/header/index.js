import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import { PropTypes } from 'nervjs';

export default class Header extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        return (
            <View>
                {this.props.title}
            </View>
        )
    }
}

Header.defaultProps = {
    title:'Hello'
}

Header.protoTypes = {
    title:PropTypes.string.isRequired
}