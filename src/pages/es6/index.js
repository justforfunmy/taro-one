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
    
    componentDidMount(){
        this.testDesignModal()
    }

    testDesignModal = () =>{
        /* 工厂模式 :创建多个相似对象，但不知道对象的类型*/
        function createPerson(name,age,job) {
            let o = new Object();
            o.name=name;
            o.age=age;
            o.job=job;
            o.sayName=function () {
                console.log(this.name)
            }
            return o
            
        }

        var person1 = createPerson("Nicholas", 29, "Software Engineer");
        var person2 = createPerson("Greg", 27, "Doctor");
        person1.sayName()
        person2.sayName()

        /* 构造函数模式 
        没有显式地创建对象；
        直接将属性和方法赋给了 this 对象；
        没有 return 语句。
        */
       /* 要创建 Person 的新实例，必须使用 new 操作符 */
       /* new的过程
        (1) 创建一个新对象；
        (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
        (3) 执行构造函数中的代码（为这个新对象添加属性）；
        (4) 返回新对象。 */

        function Person(name,age,job) {
            this.name = name;
            this.age = age;
            this.job = job;
            this.sayName = function(){
                console.log(this.name);
            };
        }
        var person3 = new Person("Nicholas", 29, "Software Engineer");
        var person4 = new Person("Greg", 27, "Doctor")
        person3.sayName()
        person4.sayName()
        //检测对象类型
        console.log(person3 instanceof Object,person3 instanceof Person)


        /* 原型模式 
        但与构造函数模式不同的是，新对象的这些属性和方法是由所有实例共享的*/
        /* 所有原型对象都会自动获得一个 constructor
（构造函数）属性，这个属性包含一个指向 prototype 属性所在函数的指针。 */
        function People() {
            
        }
        People.prototype.name='king';
        People.prototype.age=13;
        People.prototype.sayName = function () {
            console.log(this.name)
        }
        let person5 = new People();
        person5.sayName()

        console.log(People.prototype.constructor)

    }

    takeSet = () => {
        let set = new Set();
        set.add(5);
        set.add('5');
        console.log(set.size)
    }

    takeOop = () => {
        /* 数据属性configurable enimerable writable value */
        /* 访问器属性  configurable enumerable getter setter*/
        let person = {};
        Object.defineProperty(person,'name',{
            writable:false,
            value:'kingdom'
        })
        console.log(person.name);
        
        let book = {};
        Object.defineProperties(book,{
            _year:{
                value:2003,
                writable:true
            },
            edition:{
                value:1,
                writable:true
            },
            year:{
                get:function(){
                    return this._year
                },
                set:function(newValue){
                    if(newValue>2003){
                        this._year = newValue;
                        this.edition += newValue-2003
                    }
                }
            }
        })

        console.log(book.edition)
        book.year = 2018;
        console.log(book.edition)
    }

    render(){
        return (
            <View className='container'>
                <Header title={this.state.title}></Header>
                <Button onClick={this.takeSet}>set</Button>
                <Button onClick={this.takeOop}>oop</Button>
            </View>
        )
    }
}