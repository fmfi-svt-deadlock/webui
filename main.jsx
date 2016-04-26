import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'

import {App, init, reducer, middleware} from './webui/App.jsx'

import './root.sass'

const store = createStore(reducer, middleware)
init(store)
ReactDOM.render(<App store={store}/>, document.getElementById('deadlock-webui') || document.body)
