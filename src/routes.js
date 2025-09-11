import { createBrowserRouter } from 'react-router';
// import Dashboard from './pages/dashboard';
import Login from './pages/login';

import Layout from './layout';
import { hashrateRoute } from '@/pages/hashrateSystem/hashrateRoute'
import { carRoute } from '@/pages/carSystem/carRoute'
import { projectRoute } from '@/pages/projectSystem/projectRoute'
import { peopleRoute } from '@/pages/peopleSystem/peopleRoute'
// import { aiRoute } from '@/pages/aiSystem/aiRoute'
import { userRoute } from '@/pages/user/userRoute'

const routes = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
    handle: { hideMenuIcon: true, hideSide: true, system: 'origin', role: ['root', 'admin'], alias: 'login' },
  },
  {
    path: '/',
    Component: Layout,
    children: [
      // {
      //   path: 'dashboard',
      //   Component: Dashboard,
      //   handle: { hideMenuIcon: true, hideSide: true, system: 'origin' },
      // },
        ...hashrateRoute,
        ...carRoute,
        ...projectRoute,
        ...peopleRoute,
        // ...aiRoute,
        ...userRoute,
    ],
  }
]);

export default routes;