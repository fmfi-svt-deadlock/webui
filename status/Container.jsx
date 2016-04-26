import { connect } from 'react-redux'

import { event_to_action } from '../common/sse.js'
import { myfetch } from '../common/utils.js'

import { REQUEST, RECEIVE } from './actions.js'
import { Table } from './Table.jsx'

// toto je action, lebo thunkMiddleware
const update_data = (dispatch) => myfetch('/status')(dispatch, REQUEST(), RECEIVE)

const mapStateToProps = state => ({
    is_fetching: state.status.is_fetching,
    records: state.status.records,
})

const mapDispatchToProps = dispatch => ({
    onMount: () => {
        event_to_action('status_update', update_data)
        dispatch(update_data)
    },
    onUnmount: () => {
        event_to_action('status_update', null)
    },
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(Table)

export default Container
