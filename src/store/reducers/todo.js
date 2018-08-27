import { createReducer } from 'redux-immutablejs'
import { fromJS} from 'immutable'
import {ADDITEM,DELETE,FINISH,UNFINISH,CLEAR} from '../constants/todo'
import utils from '../../utils'

export default createReducer(fromJS([]),{
    [ADDITEM]:(state,action)=>{
        const listState = state.toJS();
        let id = utils.getIdCode();
        let newState = state.push({...action.payload,id})
        console.log(newState.toJS())
        return state.merge([...listState,{...action.payload,id}])
        
        // return state.push({...action.payload,id})
    },
    [FINISH]:(state,action)=>{
        // const listState = state.toJS();
        // let idx = listState.findIndex(val=>val.id===action.payload.id);
        let idx = state.findIndex(val=>{
            console.log(val)
            return val.get('id') == action.payload.id
        })
        return idx!==-1?state.setIn([idx,'status'],1):state
    },
    [UNFINISH]:(state,action) => {
        // const listState = state.toJS();
        // let idx = listState.findIndex(val=>val.id===action.payload.id);
        let idx = state.findIndex(val=>val.get('id') === action.payload.id)
        return idx!==-1?state.setIn([idx,'status'],0):state
    },
    [DELETE]:(state,action)=>{
        // const listState = state.toJS();
        // let idx = listState.findIndex(val=>val.id===action.id);
        let idx = state.findIndex(val=>val.get('id') === action.id)
        return idx!==-1 ? state.delete(idx) : state
    },
    [CLEAR]:(state,action)=>{
        return state.clear()
    }
})