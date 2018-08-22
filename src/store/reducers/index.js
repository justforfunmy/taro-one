// src/reducers/index.js
import { combineReducers } from 'redux'
import counter from './counter'
import asyncApi from './asyncApi'

export default combineReducers({
    counter,
    asyncApi
})