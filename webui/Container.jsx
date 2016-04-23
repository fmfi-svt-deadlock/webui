import React from 'react'
import { Link } from 'react-router'
import routes from './routes.js'
import './WebUI.sass'

export const Container = (props) => (
    <div className='webui-container'>
        <header><h1>Deadlock something something</h1></header>
        <nav>
            <ul>
                {routes.map(({name, path}, i) => <li key={i}><Link to={path} activeClassName='active'>{name}</Link></li>)}
            </ul>
        </nav>
        <p>
            Hello World! from the WebUI component<br />
        </p>
        <div className='webui-content-wrapper'>
            {props.children}
        </div>
    </div>
)
Container.propTypes = {
    children: React.PropTypes.node,
}

export const Default = (props) => (
    <div>TODO help / intro / whatever</div>
)

export default Container
