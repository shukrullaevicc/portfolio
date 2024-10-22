import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('../routes/home/Home'));
const Contact = lazy(() => import('../routes/contact/Contact'));
const Projects = lazy(() => import('../routes/projects/Projects'));

import { Loading } from '../utils'

const RouteController = () => {
   return useRoutes([
      {
         path: '/',
         element: <Suspense fallback={<Loading />}><Home /></Suspense>
      },
      {
         path: '/contact',
         element: <Suspense fallback={<Loading />}><Contact /></Suspense>
      },
      {
         path: '/projects',
         element: <Suspense fallback={<Loading />}><Projects /></Suspense>
      }
   ])
}

export default RouteController