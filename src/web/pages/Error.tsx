import * as React from 'react'

import { Layout } from '../components'

interface Props {}

interface State {
  hasError: boolean
}

export const Error = () => (
  <Layout>
    <h1>Something went wrong...</h1>
    <p>Try refreshing the page, or trying again later.</p>
    <p>You may also want to reach out to us by email.</p>
  </Layout>
)

export class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError(err: string) {
    console.error(err)
    return { hasError: true }
  }

  componentDidCatch(err: Error, info: React.ErrorInfo) {
    console.error(err, info)
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }

    return this.props.children
  }
}
