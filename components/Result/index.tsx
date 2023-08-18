import React, { useState } from 'react'
import Link from 'next/link'
import { Table, Row, Col, Button } from 'antd'

import { useAppSelector } from '@/redux/store'

const Result = () => {
  const projects = useAppSelector(state => state?.project?.projects ?? [])

  // Colums
  const columns: any = [
    {
      title: 'Project Name',
      dataIndex: 'project_name',
      key: 'project_name',
    },
    {
      title: 'Project Description',
      dataIndex: 'project_description',
      key: 'project_description',
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Project',
      dataIndex: 'project_name',
      key: 'project_name',
    },
    {
      title: 'Contractor',
      dataIndex: 'contractor',
      key: 'contractor',
    },
    {
      title: 'Max X',
      dataIndex: 'max_x',
      key: 'max_x',
    },
    {
      title: 'Min X',
      dataIndex: 'min_x',
      key: 'min_x',
    },
    {
      title: 'Max Y',
      dataIndex: 'max_y',
      key: 'max_y',
    },
    {
      title: 'Min Y',
      dataIndex: 'min_y',
      key: 'min_y',
    },
    {
      title: 'Max Z',
      dataIndex: 'max_z',
      key: 'max_z',
    },
    {
      title: 'Min Z',
      dataIndex: 'min_z',
      key: 'min_z',
    }
  ]

  return (
    <Row gutter={[12, 12]} style={{ flex: 1 }}>
      <Col span={4} offset={20}>
        <Link href="/add-data">
          <Button className='w-full bg-green-600'>{'Add New'}</Button>
        </Link>
      </Col>
      <Col span={24}>
        <Table columns={columns} dataSource={projects} />
      </Col>
    </Row>
  )
}

export default Result
