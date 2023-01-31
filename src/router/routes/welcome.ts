import { Route } from '@tanstack/react-router'

import { Welcome } from '@/pages/Welcome'

import { rootRoute } from './root'

/*
|-------------------------------------------------------------------------------
| Routes
|-------------------------------------------------------------------------------
*/

export const welcomeRoute = new Route({
  component: Welcome,
  getParentRoute: () => rootRoute,
  path: '/',
})
