import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { SET_LIST} from '../constants/asyncApi'

export default createReducer(fromJS({
    list: []
}),{
    [SET_LIST]: (state,action) => {
        return state.merge({
            list:action.payload
        })
    }
})