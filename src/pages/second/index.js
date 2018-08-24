import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button} from '@tarojs/components'
import './index.scss'

import {fromJS,List,Map} from 'immutable'
import Immutable from 'immutable'
// import Cursor from 'immutable/contrib/cursor'



export default class Second extends Component{
    config = {
        navigationBarTitleText:'第二页'
    }
    componentWillMount(){
        console.log('params',this.$router.params)
    }
    componentDidMount(){

    }

    

    takeOld = () => {
        let foo = {a:{b:1}};
        let bar = foo;
        bar.a.b = 2;
        console.log(foo.a.b);
        console.log(bar === foo)
    }

    takeNew = ()=>{
        const foo = fromJS({a:{b:1}});
        let bar = foo.setIn(['a','b'],2);
        console.log(foo.getIn(['a','b']));
        console.log(foo === bar)
    }

    takeIs = () => {
        /* 两个 immutable 对象可以使用 === 来比较，这样是直接比较内存地址，性能最好。但即使两个对象的值是一样的，也会返回 false： */
        let map1 = Immutable.Map({a:1, b:1, c:1});
        let map2 = Immutable.Map({a:1, b:1, c:1});
        console.log(map1 === map2);
        /* 为了直接比较对象的值，immutable.js 提供了 Immutable.is 来做『值比较』， */
        console.log(Immutable.is(map1, map2))
    }

    takeCursor = () =>{
        /* 由于 Immutable 数据一般嵌套非常深，为了便于访问深层数据，Cursor 提供了可以直接访问这个深层数据的引用。 */
        let data = Immutable.fromJS({ a: { b: { c: 1 } } });
        // 让 cursor 指向 { c: 1 }
        let cursor = Cursor.from(data, ['a', 'b'], newData => {
            // 当 cursor 或其子 cursor 执行 update 时调用
            console.log(newData);
        });

        cursor.get('c'); // 1
        cursor = cursor.update('c', x => x + 1);
        cursor.get('c'); // 2

    }

    takeOf =()=>{
        /* 
        List.of() 和 Map.of()
        创建一个新的包含value的List/Map对象
        size
        获取List/Map的长度
         */
        
        const foo = List.of([1,2,3]);
        const bar = Map.of('a',{b:1})
        console.log(foo.size,foo.toJS(),bar.toJS());
    }

    takeGet = () => {
        //获取数据结构中的数据
        const foo = fromJS({a:{b:1}});
        const bar = fromJS([1,2,[4,5]]);
        console.log(foo.get('a'),bar.get(0),foo.getIn(['a','b']),bar.getIn([2,0]))
    }

    takeHas = () => {
        //判断是否存在某一个key
        const foo = fromJS({a:{b:1}});
        console.log(foo.has('a'),foo.hasIn(['a','b']),foo.has('c'),foo.hasIn(['a','c']))
    }

    takeIncludes = () => {
        //判断是否存在某一个value
        Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(2); //true
        Immutable.fromJS([1,2,3,{a:4,b:5}]).includes('2'); //false 不包含字符2
        Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(5); //false 
        Immutable.fromJS([1,2,3,{a:4,b:5}]).includes({a:4,b:5}) //false
        Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(Immutable.fromJS({a:4,b:5})) //true
    }

    takeFirst = () => {
        //用来获取第一个元素或者最后一个元素，若没有则返回undefined
        const foo = fromJS({a:{b:1}});
        const bar = fromJS([1,2,[4,5]]);
        console.log(foo.first(),foo.last(),bar.first(),bar.last())
    }

    takeSet = () => {
        /* 
        set设置第一层key、index的值
        在List中使用时，若传入的number为负数，则将index为size+index的值设置为value，
        例，若传入-1，则将size-1的值设为value。
        若传入的number的值超过了List的长度，则将List自动补全为传入的number的值，将number设置为value，其余用undefined补全。
        注：跟js中不同，List中不存在空位，[,,,],List中若没有值，则为undefined。
         */
        const foo = fromJS({a:{b:1}});
        const bar = fromJS([1,2,[4,5]]);
    }

    takeShallow = () => {
        function simpleClone(initalObj) {    
            var obj = {};    
            for ( var i in initalObj) {
                obj[i] = initalObj[i];
            }    
            return obj;
        }
        
        var obj = {
            a: "hello",
            b:{
                a: "world",
                b: 21
            },
        c:["Bob", "Tom", "Jenny"],
        d:function() {
            alert("hello world");
        }
        }
        var cloneObj = simpleClone(obj); 
        console.log(cloneObj.b); 
        console.log(cloneObj.c);
        console.log(cloneObj.d);

        cloneObj.a='byebye'
        cloneObj.b.a = "changed";
        cloneObj.c = [1, 2, 3];
        cloneObj.d = function() { alert("changed"); };
        console.log(obj.a);
        console.log(obj.b);
        console.log(obj.c);
        console.log(obj.d);
    }

    takeDeep = () =>{
        //lodash cloneDeep
    } 
    
    render(){
        return (
            <View>
                <View>Immutable.js</View>
                <View>基本用法：</View>
                <Button onClick={this.takeOld}>原来的写法</Button>
                <Button onClick={this.takeNew}>使用immutable后</Button>
                <Button onClick={this.takeIs}>immutable.is</Button>
                {/* <Button onClick={this.takeCursor}>Cursor</Button> */}
                <Button onClick={this.takeOf}>List.of;Map.of;size</Button>
                <Button onClick={this.takeGet}>get;getIn</Button>
                <Button onClick={this.takeHas}>has;hasIn</Button>
                <Button onClick={this.takeIncludes}>includes</Button>
                <Button onClick={this.takeFirst}>first;last</Button>
                <View>数据修改：</View>
                <View>这里对于数据的修改，是对原数据进行操作后的值赋值给一个新的数据，并不会对原数据进行修改，因为Immutable是不可变的数据类型。</View>
                <Button onClick={this.takeSet}>set;setIn</Button>

                <View>拷贝</View>
                <Button onClick={this.takeShallow}>shallow copy</Button>
                <Button onClick={this.takeDeep}>deep copy</Button>
            </View>
        )
    }
}