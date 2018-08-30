import Taro,{Component} from '@tarojs/taro'
import {View,Button} from '@tarojs/components'
import './index.scss'

import Header from '../../components/header'


export default class ES6 extends Component{
    constructor(){
        super(...arguments)
        this.state={
            title:'ES6'
        }
    }

    takeSet = () => {
        let set = new Set();
        set.add(5);
        set.add('5');
        console.log(set.size)
    }

    render(){
        return (
            <View className='container'>
                <Header title={this.state.title}></Header>
                <Button onClick={this.takeSet}>set</Button>
            </View>
        )
    }
}