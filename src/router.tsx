import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router'

import SidebarLayout from 'layouts/SidebarLayout';
import BaseLayout from 'layouts/BaseLayout';
import SuspenseLoader from './components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
)
// pages
const Overview = Loader(lazy(() => import('content/overview')));

// Dashboard
const Crypto = Loader(lazy(() => import('content/dashboard/Crypto')))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Overview />
      },
      {
        path: 'overview',
        element: (
          <Navigate
            to="/"
            replace
            />
        )
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/dashboard/crypto"
            replace
          />
        )
      },
      {
        path: 'crypto',
        element: <Crypto />
      }
    ]
  }
]

export default routes