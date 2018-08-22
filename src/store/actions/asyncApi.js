import {SET_LIST} from '../constants/asyncApi'
import Api from '../../api'

export const setList = (payload)=>{
    return {
        type:SET_LIST,
        payload
    }
}

export const getList = () => {
    return dispatch =>{
        Api.getMock().then(res=>{
            dispatch(setList(res.data.projects))
        })
    }
}