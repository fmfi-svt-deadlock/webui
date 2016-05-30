import React from 'react'
import {FormattedMessage} from 'react-intl'

export class RecordTable extends React.Component {
    render() {
        return (
            <div className='record-table-wrapper'>
                <p>{this.props.is_fetching ? 'Loading...' : ''}</p>
                <table className='record-table'>
                    <thead>
                        <tr>
                            {this.props.head.map((node, i) => <td key={i}>{node}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.records.map(this.props.render_record)}
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
RecordTable.propTypes = {
    head:          React.PropTypes.arrayOf(React.PropTypes.node),
    render_record: React.PropTypes.func.isRequired,
    records:       React.PropTypes.arrayOf(React.PropTypes.object),
    is_fetching:   React.PropTypes.bool.isRequired,
    onMount:       React.PropTypes.func,
    onUnmount:     React.PropTypes.func,
}

export const TableOf = ({head, render_record}) => (function TableOf(props) {
    return <RecordTable head={head} render_record={render_record} {...props}/>
})

export const TranslaTable = ({head, render_record}) =>
    TableOf({head: head.map(id => <FormattedMessage id={id}/>), render_record: render_record})
