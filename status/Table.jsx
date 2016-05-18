import React, { PropTypes } from 'react'
import {injectIntl, FormattedRelative} from 'react-intl';

import {TranslaTable} from '../common/RecordTable.jsx'

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

export const StatusRecord = ({data}) => {
    let time_drift = data.last_seen ?
        new Date(data.last_seen).getTime() - new Date(data.controller_time).getTime() :
        ''
    return (
        <tr>
            <td><span title={data.id}>{data.name}</span></td>
            <td><span title={data.type_id}>{data.type}</span></td>
            <td>{data.controller}</td>
            <td>{data.last_seen ? <TimeField value={data.last_seen} /> : ''}</td>
            <td>{data.db_version}</td>
            <td>{data.fw_version}</td>
            <td className='col-numeric'>{data.last_seen ? time_drift + 'ms': ''}</td>
        </tr>
    )
}
StatusRecord.propTypes = {
    data: React.PropTypes.shape({
        id:              PropTypes.number.isRequired,
        name:            PropTypes.string,
        type:            PropTypes.string,
        type_id:         PropTypes.number,
        controller:      PropTypes.number,
        last_seen:       PropTypes.any,
        controller_time: PropTypes.any,
        db_version:      PropTypes.number,
        fw_version:      PropTypes.number,
    }).isRequired,
}

export const Table = TranslaTable({
    head: ['table.poa', 'table.poa_type', 'table.controller', 'table.last_seen', 'table.db_version', 'table.fw_version', 'table.time_drift'],
    render_record: record => <StatusRecord key={record.id} data={record} />,
})

export default Table
