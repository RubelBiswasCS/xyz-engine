import React from 'react'
import type { NextPage } from 'next'

// Import Components
import { Row, Col, Spin } from 'antd'
import AddDataComponent from '../components/AddData'

const AddData: NextPage = () => {
  return (
    <Row style={{ width: '100%' }}>
      <Col span={ 24 }>
        <AddDataComponent />
      </Col>
    </Row>
  )
}

export default AddData
