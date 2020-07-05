import * as React from 'react'
import { Router, View } from 'react-navi'

import { routes } from './routes'
import { Error, ErrorBoundary } from './pages'
import { Layout } from './components'

export const App = () => (
  <Router routes={routes}>
    <ErrorBoundary>
      <Layout>
        <React.Suspense fallback={<Error />}>
          <View />
        </React.Suspense>
      </Layout>
    </ErrorBoundary>
  </Router>
)
