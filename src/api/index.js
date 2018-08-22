import fly from './fly'

const mock = '/mock'

export default{
    getMock(params){
        return fly.get(mock,{...params})
    }
}
