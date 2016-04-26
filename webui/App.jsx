import React from 'react'
import {combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import sk from 'react-intl/locale-data/sk'

import { init as sse_init } from '../common/sse.js'

import { accesslog as accesslog_reducer } from '../accesslog/reducers.js'
import { status    as status_reducer    } from '../status/reducers.js'

import { Container as AccessLog }   from '../accesslog/Container.jsx'
import { Container as AccessPoint } from '../accesspoint/Container.jsx'
import { Container as Rules }       from '../rules/Container.jsx'
import { Container as Status }      from '../status/Container.jsx'

import { Container, Default } from './Container.jsx'

export const init = (store) => {
    addLocaleData([...en, ...sk])
    sse_init(store.dispatch)
}
export const routes = [
    { name: 'Access Rules',  path: '/rules',       component: Rules },
    { name: 'Access Points', path: '/accesspoint', component: AccessPoint },
    { name: 'System Status', path: '/status',      component: Status },
    { name: 'Access Log',    path: '/accesslog',   component: AccessLog },
]

export const reducer = combineReducers({
    accesslog: accesslog_reducer,
    status:    status_reducer,
    routing:   routerReducer,
})
export const middleware = applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
)

export const AppInner = ({store}) => (
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route component={Container}>
                {routes.map(({path, component}, i) => <Route key={i} path={path} component={component}/>)}
                <Route path='*' component={Default} />
            </Route>
        </Router>
    </Provider>
)
AppInner.propTypes = {
    store: React.PropTypes.object,
}

export const App = (props) => (
    <IntlProvider locale={navigator.language}>
        <AppInner {...props} />
    </IntlProvider>
)
