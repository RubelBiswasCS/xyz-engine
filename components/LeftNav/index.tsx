import React from 'react'

// Import Components
import LeftNavHeader from './LeftNavHeader'
import LeftNavBody from './LeftNavBody'

const LeftNav = () => (
  <div style={ containerStyles }>
    <LeftNavHeader />
    <LeftNavBody />
  </div>
)

// JSS Styles
const containerStyles = {
  width: '100%',
  height: '100%',
  flexDirection: 'column' as 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

export default LeftNav
