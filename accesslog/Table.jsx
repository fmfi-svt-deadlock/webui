import React, { PropTypes } from 'react'

import {FormattedTime, FormattedRelative} from 'react-intl';

import TableOf from '../common/RecordTable.jsx'

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
        <td><FormattedTime value={data.time} {...time_fmt}/> (<FormattedRelative value={data.time}/>)</td>
        <td><span title={data.controller}>{data.accesspoint}</span></td>
        <td>{data.card}</td>
        <td className='allowed-mark'>{data.allowed ? '✓' : '✗'}</td>
    </tr>
)
LogRecord.propTypes = {
    data: React.PropTypes.shape({
        id:          PropTypes.number.isRequired,
        time:        PropTypes.any.isRequired,
        accesspoint: PropTypes.string.isRequired,
        controller:  PropTypes.string.isRequired,
        card:        PropTypes.string.isRequired,
        allowed:     PropTypes.bool.isRequired,
    }).isRequired,
}

export const Table = TableOf({
    head: ['time', 'AP', 'Card ID', 'Allowed?'],
    render_record: record => <LogRecord key={record.id} data={record} />,
})

export default Table
