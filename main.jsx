import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Container from './webui/Container.jsx'
import routes from './webui/routes.js'
import { init as sse_init } from './utils/sse.js'
import accesslog from './accesslog/reducers.js'

import './root.sass'

window.r = {accesslog, routing: routerReducer}
const store = createStore(
    combineReducers({accesslog, routing: routerReducer}),
    applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
    )
)
window.store = store // for debugging only

sse_init(store.dispatch)

const root = document.getElementById('deadlock-webui') || document.body
ReactDOM.render((
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route component={Container}>
                {routes.map(({path, component}, i) => <Route key={i} path={path} component={component}/>)}
            </Route>
        </Router>
    </Provider>
), root)
