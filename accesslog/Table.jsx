import React, { PropTypes } from 'react'

const LogRecord = ({data}) => (
    <tr className={data.allowed ? 'allowed' : 'denied'}>
        <td>TODO format {data.time}</td>
        <td><span title={data.controller}>{data.accesspoint}</span></td>
        <td>{data.card}</td>
        <td>{data.allowed ? '✓' : '✗'}</td>
    </tr>
)
LogRecord.propTypes = {
    data: React.PropTypes.shape({
        id:          PropTypes.number.isRequired,
        time:        PropTypes.number.isRequired,
        accesspoint: PropTypes.string.isRequired,
        controller:  PropTypes.string.isRequired,
        card:        PropTypes.string.isRequired,
        allowed:     PropTypes.bool.isRequired,
    }).isRequired,
}

export class Table extends React.Component {
    render() {
        return (
            <div className='accesslog-table-wrapper'>
                <p>{this.props.is_fetching ? 'Loading...' : ''}</p>
                <table className='accesslog-table'>
                    <tbody>
                        {this.props.records.map(record => <LogRecord key={record.id} data={record}/>)}
                    </tbody>
                </table>
            </div>
        )
    }

    componentWillMount() {
        if (this.props.onMount) this.props.onMount()
    }
    componentWillUnmount() {
        if (this.props.onUnmount) this.props.onUnmount()
    }
}
Table.propTypes = {
    records:     PropTypes.arrayOf(PropTypes.object),
    is_fetching: PropTypes.bool.isRequired,
    onMount:     PropTypes.func,
    onUnmount:   PropTypes.func,
}

export default Table
