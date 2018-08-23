import {ADD,FINISH,UNFINISH,DELETE,CLEAR} from '../constants/todo'


export const add = (payload) => {
    return {
        type:ADD,
        payload
    }
}

export const finish = (payload) => {
    return {
        type:FINISH,
        payload
    }
}

export const unFinish = (payload) => {
    return {
        type:UNFINISH,
        payload
    }
}

export const deleteItem = (id) => {
    console.log(id)
    return {
        type:DELETE,
        id
    }
}

export const clear = () => {
    return {
        type:CLEAR
    }
}