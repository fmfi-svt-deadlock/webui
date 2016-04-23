import { connect } from 'react-redux'

import { update_data } from './actions.js'
import Table from './Table.jsx'

// TODO the event source stuff should be centralized and event thingy should dispatch actions and
// stuff -- shouldn't be each object's responsibility

const mapStateToProps = state => ({
    is_fetching: state.accesslog.is_fetching,
    records: state.accesslog.records,
})

const mapDispatchToProps = dispatch => ({
    onShow: () => dispatch(update_data),
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(Table)

export default Container
