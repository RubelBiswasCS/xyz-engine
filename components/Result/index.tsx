import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { Table, Row, Col, Button } from 'antd'

import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'

import { useAppSelector } from '@/redux/store'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingLeft: 48,
    paddingRight: 48
  },
  header: {
    margin: 10,
    padding: 10,
    textAlign: 'center'
  },
  row: {
    flexDirection:'row',
    gap: 16,
    padding: 2
  },
  rowLabel: {
    fontSize: 12
  },
  rowValue: {
    fontSize: 10,
    maxWidth: '60%'
  }
});

// Create Document Component
const ResultDocument: any = ({ data }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>XYZ Engine</Text>
      </View>
      { Object.keys(data)?.filter((key: any) => key !== 'key')?.map((key: any, idx: any) => (
        <View key={idx} style={styles.row}>
          <Text style={styles.rowLabel}>{`${key?.replaceAll('_',' ')?.toUpperCase()} :`}</Text>
          <Text style={styles.rowValue}>{data[key] ?? ''}</Text>
        </View>
      ))}
    </Page>
  </Document>
)

const Result = () => {
  const [isClient, setIsClient] = useState(false)

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
    },
    {
      title: 'Download',
      dataIndex: 'download',
      key: 'download',
      render: (value: any, row: any) => (
        isClient ? (
          <PDFDownloadLink 
            document={<ResultDocument data={row}/>} 
            fileName="report.pdf"
            style={{ color: '#1677ff' }}
          >
            {'Download'}
          </PDFDownloadLink>
        )
        : ''
      )
    }
  ]

  // Rows
  const rowData: any = useMemo(
    () => projects.map((p: any, idx: any) => ({ ...p, key: idx })),
    [projects]
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Row gutter={[12, 12]} style={{ flex: 1 }}>
      <Col span={4} offset={20}>
        <Link href="/add-data">
          <Button className='w-full bg-green-600'>{'Add New'}</Button>
        </Link>
      </Col>
      <Col span={24}>
        <Table columns={columns} dataSource={rowData} />
      </Col>
    </Row>
  )
}

export default Result
