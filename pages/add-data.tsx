import React, { useEffect } from 'react'
import type { NextPage } from 'next'

// Import Components
import { Row, Col } from 'antd'
import AddDataComponent from '../components/AddData'


// Import Actions and Methods
import { useAppDispatch } from '@/redux/store'
import { setSelectedLeftNavMenuKeys } from '@/redux/reducers/navReducer'

const AddData: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setSelectedLeftNavMenuKeys(['add-data']))
  }, [])
  
  return (
    <Row style={{ width: '100%' }}>
      <Col span={ 24 }>
        <AddDataComponent />
      </Col>
    </Row>
  )
}

export default AddData
