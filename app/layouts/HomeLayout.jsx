import React from 'react'
import useBodyClass from '../hooks/useBodyClass'

function HomeLayout({children}) {
    useBodyClass("login-page");
  return (
    <div>{children}</div>
  )
}

export default HomeLayout