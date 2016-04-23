import { connect } from 'react-redux'

import { event_to_action } from '../utils/sse.js'
import { myfetch } from '../utils/utils.js'

import { REQUEST, RECEIVE } from './actions.js'
import Table from './Table.jsx'

// toto je action, lebo thunkMiddleware
const update_data = (dispatch) => myfetch('/accesslog')(dispatch, REQUEST(), RECEIVE)

const mapStateToProps = state => ({
    is_fetching: state.accesslog.is_fetching,
    records: state.accesslog.records,
})

const mapDispatchToProps = dispatch => ({
    onMount: () => {
        event_to_action('accesslog_update', update_data)
        dispatch(update_data)
    },
    onUnmount: () => {
        event_to_action('accesslog_update', null)
    },
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(Table)

export default Container
