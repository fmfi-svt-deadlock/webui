import React from 'react'

import {FormattedTime, FormattedRelative} from 'react-intl';

import {TranslaTable} from '../common/RecordTable.jsx'

import './style.sass'

const time_fmt = {
    year:   'numeric',
    month:  'numeric',
    day:    'numeric',
    hour:   'numeric',
    minute: 'numeric',
    second: 'numeric',
}

export const LogRecord = ({data}) => (
    <tr className={data.allowed ? 'allowed' : 'denied'}>
        <td className='col-numeric'>
            <FormattedTime value={data.time} {...time_fmt}/> (<FormattedRelative value={data.time}/>)
        </td>
        <td className='col-allowed-mark'>{data.allowed ? '✓' : '✗'}</td>
        <td>{data.card}</td>
        <td><span title={data.ap_id}>{data.ap}</span></td>
        <td className='col-numeric'>{data.controller}</td>
    </tr>
)
LogRecord.propTypes = {
    data: React.PropTypes.shape({
        id:          React.PropTypes.number.isRequired,
        time:        React.PropTypes.any.isRequired,
        ap:          React.PropTypes.string,
        ap_id:       React.PropTypes.number.isRequired,
        controller:  React.PropTypes.number.isRequired,
        card:        React.PropTypes.string.isRequired,
        allowed:     React.PropTypes.bool.isRequired,
    }).isRequired,
}

export const Table = TranslaTable({
    head: ['table.time', 'table.allowed', 'table.card_id', 'table.poa', 'table.controller'],
    render_record: record => <LogRecord key={record.id} data={record} />,
})

export default Table
