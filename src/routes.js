import { createBrowserRouter } from 'react-router';
import Login from './pages/login';
import Layout from './layout';
import { hashrateRoute } from '@/pages/hashrateSystem/hashrateRoute'
import { carRoute } from '@/pages/carSystem/carRoute'
import { projectRoute } from '@/pages/projectSystem/projectRoute'
import { peopleRoute } from '@/pages/peopleSystem/peopleRoute'
import { userRoute } from '@/pages/user/userRoute'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
        ...hashrateRoute,
        ...carRoute,
        ...projectRoute,
        ...peopleRoute,
        ...userRoute,
    ],
  },
  {
    path: '/login',
    Component: Login,
    handle: { hideMenuIcon: true, hideSide: true, system: 'origin', role: ['root', 'admin'], alias: 'login' },
  },
]);

export default routes;