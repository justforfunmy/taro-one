// src/reducers/index.js
import { combineReducers } from 'redux'
import counter from './counter'
import asyncApi from './asyncApi'
import todo from './todo'

export default combineReducers({
    counter,
    asyncApi,
    todo
})