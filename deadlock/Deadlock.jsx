import React from "react"
import './Deadlock.sass'

export class Deadlock extends React.Component {
    propTypes: {
        api_url: React.PropTypes.string
    };

    render() {
        return (
            <div className="test">
                Hello World! from the Deadlock component<br />
                API URL: {this.props.api_url}
            </div>
        )
    }
}

export default Deadlock
