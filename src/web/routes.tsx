import * as React from 'react'
import { mount, route } from 'navi'

import { Landing } from './pages'

export const routes = mount({
  '/': route({
    title: 'Hoverbyte Conversions',
    view: <Landing />,
  }),
  // '/services': route({
  //   title: 'Hoverbyte Services',
  //   view: <Services />,
  // }),
  // '/technology': route({
  //   title: 'Hoverbyte Technology',
  //   view: <Technology />,
  // }),
  // '/contact': route({
  //   title: 'Contact Hoverbyte',
  //   view: <Contact />,
  // }),
  // '/about': route({
  //   title: 'About Hoverbyte',
  //   view: <About />,
  // }),
  // '/legal': route({
  //   title: 'Hoverbyte - Legal',
  //   view: <Legal />,
  // }),
})
