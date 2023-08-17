import React from 'react'

// Import Components
import { Typography } from 'antd'
import { LeftSquareOutlined } from '@ant-design/icons'

// Import Actions & Methods
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setIsLeftNavOpen } from '@/redux/reducers/navReducer'

// Constants
const { Title } = Typography

const LeftNavHeader = () => {
  const dispatch = useAppDispatch()

  const isLeftNavOpen: any = useAppSelector(state => state?.nav?.isLeftNavOpen ?? true)

  // On Left Nav Toggle
  const _onLeftNavToggle = () => {
    dispatch(setIsLeftNavOpen(!isLeftNavOpen))
  }

  return (
    <div style={ containerStyles }>
      <Title level={ 5 } ellipsis style={{ margin: 0, fontWeight: 600 }}>{ 'XYX Engine' }</Title>
      <LeftSquareOutlined onClick={ _onLeftNavToggle } style={{ fontSize: '1rem', zIndex: 1200 }} />
    </div>
  )
}

// JSS Styles
const containerStyles = {
  padding: '0.5rem',
  width: '100%',
  height: '45px',
  display: 'flex',
  flexDirection: 'row' as 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #f0f2f5',
  borderRight: '1px solid #f0f2f5',
  backgroundColor: '#FFF',
  position: 'relative' as 'relative',
  zIndex: 1000
}

export default LeftNavHeader
