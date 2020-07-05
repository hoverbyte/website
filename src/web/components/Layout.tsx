import * as React from 'react'
import { useCurrentRoute } from 'react-navi'
import { style } from 'typestyle'
import * as csstips from 'csstips'
import { color } from 'csx'

import { Nav } from './Nav'

export const Layout: React.FC = ({ children }) => {
  const route = useCurrentRoute()

  return (
    <div
      className={style(csstips.fillParent, csstips.centerCenter, {
        backgroundColor: 'white',
      })}
    >
      <Nav />
      <h2>{route.title}</h2>
      <div id="layout">{children}</div>
    </div>
  )
}
