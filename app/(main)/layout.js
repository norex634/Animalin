import React from 'react'
import Nav from '@/components/partials/Nav'

const layout = ({children}) => {
  return (
    <>
    
    <Nav />
    <div>{children}</div>
    </>
  )
}

export default layout