import React from 'react'
import PlusIcon from 'babel!react-icons/io/plus'
import PoAIcon from 'babel!react-icons/io/flag'
import KeyIcon  from 'babel!react-icons/io/key'
import BoxIcon from 'babel!react-icons/io/cube'
import {FormattedMessage} from 'react-intl'

export class Container extends React.Component {
    render() {
        return (
            <div className="accesspoint-container">
                accesspoint/Container
                <div className="action-buttons">
                    <button><span className='icon'><PlusIcon/><BoxIcon/></span><FormattedMessage id='action.new_controller'/></button>
                    <button><span className='icon'><PlusIcon/><PoAIcon/></span><FormattedMessage id='action.new_poa'/></button>
                </div>
            </div>
        )
    }
}

export default Container
