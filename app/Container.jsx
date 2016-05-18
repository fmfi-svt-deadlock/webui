import React from 'react'
import { Link } from 'react-router'
import routes from './routes.js'
import './container.sass'
import {FormattedMessage} from 'react-intl'
import GearIcon from 'babel!react-icons/io/gear-a'

import './common_styles.sass'

export const Container = (props) => (
    <div className='webui-container'>
        <header className='app-title'>
            <h1><FormattedMessage id='app.title' /></h1>
            <nav>
                {routes.map(({path}, i) => (
                    <Link key={i} to={path} activeClassName='active'>
                        {(path == 'settings' ? <GearIcon /> : <FormattedMessage id={'route.'+path} />)}
                    </Link>
                ))}
            </nav>
        </header>
        <div className='webui-content-wrapper'>
            {props.children}
        </div>
    </div>
)
Container.propTypes = {
    children: React.PropTypes.node,
}

export const Default = (props) => (
    <div className='not-implemented'>TODO help / intro / whatever</div>
)

export default Container
