import React from 'react'
import {combineReducers, applyMiddleware} from 'redux'
import {connect, Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import sk from 'react-intl/locale-data/sk'

import { init as sse_init } from '../common/sse.js'

import accesslog_reducer from '../accesslog/reducers.js'
import status_reducer    from '../status/reducers.js'
import settings_reducer  from '../settings/reducers.js'

import routes from './routes.js'
import { Container, Default } from './Container.jsx'

import messages from '../translations/messages.yml'

export const init = (store) => {
    addLocaleData([...en, ...sk])
    sse_init(store.dispatch)
}

export const reducer = combineReducers({
    accesslog: accesslog_reducer,
    status:    status_reducer,
    settings:  settings_reducer,
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

const AppComponent = props => (
    <IntlProvider locale={props.language}
                  messages={props.messages}>
        <AppInner {...props} />
    </IntlProvider>
)
AppComponent.propTypes = {
    store: React.PropTypes.object.isRequired,
    language: React.PropTypes.string.isRequired,
    messages: React.PropTypes.object.isRequired,
}

export const App = connect(state => ({
    language: state.settings.language,
    messages: messages[state.settings.language],
}))(AppComponent)
