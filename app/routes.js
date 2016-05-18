import { Container as AccessLog }   from '../accesslog/Container.jsx'
import { Container as AccessPoint } from '../accesspoint/Container.jsx'
import { Container as Rules }       from '../rules/Container.jsx'
import { Container as Settings }    from '../settings/Container.jsx'
import { Container as Status }      from '../status/Container.jsx'


export const routes = [
    { path: 'rules',       component: Rules       },
    { path: 'accesspoint', component: AccessPoint },
    { path: 'status',      component: Status      },
    { path: 'accesslog',   component: AccessLog   },
    { path: 'settings',    component: Settings    },
]

export default routes
