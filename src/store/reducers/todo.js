import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import {ADD,DELETE,FINISH,UNFINISH} from '../constants/todo'
import utils from '../../utils'

export default createReducer(fromJS({
    items:[]
}),{
    [ADD]:(state,action)=>{
        const listState = state.toJS();
        let id = utils.getIdCode()
        return state.merge({
            items:[...listState.items,{...action.payload,id}]
        })
    },
    [FINISH]:(state,action)=>{
        const listState = state.toJS();
        let idx = listState.items.findIndex(val=>val.id===action.payload.id);
        return state.setIn(['items',idx,'status'],1)
    },
    [UNFINISH]:(state,action) => {
        const listState = state.toJS();
        let idx = listState.items.findIndex(val=>val.id===action.payload.id);
        return state.setIn(['items',idx,'status'],0)
    },
    [DELETE]:(state,action)=>{
        const listState = state.toJS();
        let idx = listState.items.findIndex(val=>val.id===action.id);
        return idx!==-1 && state.deleteIn(['items',idx])
    }
})