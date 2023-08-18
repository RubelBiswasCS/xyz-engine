import React, { useEffect } from 'react'
import type { NextPage } from 'next'

// Import Components
import { Row, Col } from 'antd'
import ResultComponent from '../components/Result'

// Import Actions and Methods
import { useAppDispatch } from '@/redux/store'
import { setSelectedLeftNavMenuKeys } from '@/redux/reducers/navReducer'

const Result: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setSelectedLeftNavMenuKeys(['result']))
  }, [])

  return (
    <Row style={{ width: '100%' }}>
      <Col span={ 24 }>
        <ResultComponent />
      </Col>
    </Row>
  )
}

export default Result