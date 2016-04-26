import React, { PropTypes } from 'react'

import TableOf from '../common/RecordTable.jsx'
import {injectIntl, FormattedRelative} from 'react-intl';

const time_fmt = {
    year:   'numeric',
    month:  'numeric',
    day:    'numeric',
    hour:   'numeric',
    minute: 'numeric',
    second: 'numeric',
}

const TimeField = injectIntl(({value, intl}) => (
    <span title={intl.formatDate(value, time_fmt)}>
        <FormattedRelative value={value}/>
    </span>
))

export const StatusRecord = ({data}) => (
    <tr>
        <td>{data.name}</td>
        <td>{data.ip}</td>
        <td>{data.type}</td>
        <td>{data.controller}</td>
        <td>{data.last_seen ? <TimeField value={data.last_seen} /> : ''}</td>
        <td>{data.db_version}</td>
        <td>{data.fw_version}</td>
    </tr>
)
StatusRecord.propTypes = {
    data: React.PropTypes.shape({
        name:       PropTypes.string,
        ip:         PropTypes.string,
        type:       PropTypes.string,
        controller: PropTypes.string,
        last_seen:  PropTypes.any,
        db_version: PropTypes.number,
        fw_version: PropTypes.number,
    }).isRequired,
}

export const Table = TableOf({
    head: ['AP name', 'IP', 'type', 'controller', 'last seen', 'DB version', 'FW version'],
    render_record: record => <StatusRecord key={record.ip} data={record} />,
})

export default Table
