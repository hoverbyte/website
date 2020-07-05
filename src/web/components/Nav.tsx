import * as React from 'react'
import { Link } from 'react-navi'
import { style } from 'typestyle'
import * as csstips from 'csstips'

const linkColor = 'green'

export const Nav = () => (
  <div className={style(csstips.fillParent, csstips.horizontal)}>
    <Link
      className={style(csstips.flex, { color: 'black' })}
      activeClassName={style({ color: linkColor })}
      href="/"
    >
      Hoverbyte
    </Link>
  </div>
)
