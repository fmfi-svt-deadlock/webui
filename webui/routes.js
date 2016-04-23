import { Container as AccessLog }   from '../accesslog/Container.jsx'
import { Container as AccessPoint } from '../accesspoint/Container.jsx'
import { Container as Rules }       from '../rules/Container.jsx'
import { Container as Status }      from '../status/Container.jsx'

export const routes = [
    { name: 'Access Rules',  path: '/rules',       component: Rules },
    { name: 'Access Points', path: '/accesspoint', component: AccessPoint },
    { name: 'System Status', path: '/status',      component: Status },
    { name: 'Access Log',    path: '/accesslog',   component: AccessLog },
]

export default routes
