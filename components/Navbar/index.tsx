import React from 'react'

// Import Components
import { Row, Col, Popover, Avatar } from 'antd'

// Import Icons
import { MenuOutlined } from '@ant-design/icons'

// Import Actions & Methods
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setIsLeftNavOpen } from '@/redux/reducers/navReducer'

const TopNav = () => {
  const dispatch = useAppDispatch()

  const isLeftNavOpen = useAppSelector(state => state?.nav?.isLeftNavOpen ?? true)

  // On Left Nav Toggle
  const _onLeftNavToggle = () => {
    dispatch(setIsLeftNavOpen(!isLeftNavOpen))
  }

  return (
    <div style={ containerStyles }>
      <Row style={{ width: '100%' }} gutter={[ 0, 0 ]}>
        <Col
          span={ 8 }
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          { !isLeftNavOpen && <MenuOutlined onClick={ _onLeftNavToggle } style={{ fontSize: '1rem' }} /> }
        </Col>
        <Col
          span={ 8 }
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
        <Col
          span={ 8 }
          style={{
            display: 'flex',
            flexDirection: 'row' as 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '16px',
            padding: '0px 0px'
          }}
        >
          <Popover
            placement='bottomRight'
            title={''}
            content={null}
            trigger='click'
          >
            <Avatar
              size={ 'default' }
              style={{ backgroundColor: '#f56a00', cursor: 'pointer' }}
              src={ 'U' }
            />
          </Popover>
        </Col>
      </Row>
    </div>
  )
}

// JSS Styles
const containerStyles = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row' as 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  padding: '32px 24px',
  margin: '0px 0px',
  backgroundColor: '#FFFFFF'
}

export default TopNav
