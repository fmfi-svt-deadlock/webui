import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'

import {App, init, reducer, middleware} from './app/App.jsx'

import './root.sass'

const store = createStore(reducer, middleware)
init(store)
window.store = store // for debugging
let root = document.getElementById('deadlock') || document.body
ReactDOM.render(<App store={store}/>, root)
