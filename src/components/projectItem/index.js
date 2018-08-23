import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'

export default class ProjectItem extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            prefix:'前缀---'
        }
    }
    componentWillMount(){
    }

    handleClick = (item,idx,e) => {
        this.props.onChange(idx)
    }
    render(){
        return (
            <View className='item'>
                <View onClick={this.handleClick.bind(this,this.props.itemData,this.props.idx)}>{this.props.idx}.{this.props.itemData.address}</View>
                {/* <View onClick={this.props.onChange.bind(this,this.props.idx)}>{this.props.idx}.{this.props.itemData.address}</View> */}
            </View>
        )
    }

}