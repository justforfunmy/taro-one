import fly from './fly'

const mock = '/mock'
const login = '/weapp/login'

export default{
    getMock(params){
        return fly.get(mock,{...params})
    },
    login(){
        return fly.get(login)
    }
}
