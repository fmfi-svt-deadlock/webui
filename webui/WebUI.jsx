import React from 'react'
import './WebUI.sass'

const WebUI = (props) => (
    <div className='test'>
        Hello World! from the WebUI component<br />
        API URL: {props.api_url}
    </div>
)
WebUI.propTypes = { api_url: React.PropTypes.string }

export default WebUI
