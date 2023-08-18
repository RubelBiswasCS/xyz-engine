import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'

// Import Components
import { Table as AntDTable, Row, Col, Button } from 'antd'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'
import * as ReactPDFTable from "@david.kucsai/react-pdf-table"

// Import Actions and Methods
import { useAppSelector } from '@/redux/store'

const { Table, TableHeader, TableCell, DataTableCell, TableBody }: any = ReactPDFTable

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingLeft: 48,
    paddingRight: 48
  },
  table: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 28,
    marginTop: 16
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
    fontSize: 12,
    maxWidth: '60%'
  },
  headerRow: {
    backgroundColor: "gray",
    borderWidth: 0,
    fontSize: 8,
    textAlign: "right"
  },
  cellRightAlign: {
    fontSize: 8,
    textAlign: "right",
    padding: 2
  },
  cellCenter: {
    fontSize: 8,
    textAlign: "center",
    padding: 2
  },
  tableCell: {
    fontSize: 8,
    textAlign: 'center',
    padding: 2,
    backgroundColor: '#f5dccb'
  }
})

// Create Document Component
const TableAsPDF: any = ({ data }: any) => (
  <Document>
    <Page size="A3" style={styles.page}>
      <View style={styles.header}>
        <Text>XYZ Engine - Results</Text>
      </View>
      <View>
        <Table
          style={styles.headerRow}
          data={data}
        >
          <TableHeader textAlign={"center"}>
            <TableCell style={styles.tableCell}>Project</TableCell>
            <TableCell style={styles.tableCell}>Client</TableCell>
            <TableCell style={styles.tableCell}>Contractor</TableCell>
            <TableCell style={styles.tableCell}>Max X</TableCell>
            <TableCell style={styles.tableCell}>Min Xr</TableCell>
            <TableCell style={styles.tableCell}>Max Y</TableCell>
            <TableCell style={styles.tableCell}>Min Yr</TableCell>
            <TableCell style={styles.tableCell}>Max Z</TableCell>
            <TableCell style={styles.tableCell}>Min Zr</TableCell>
          </TableHeader>
          <TableBody>
            <DataTableCell style={styles.cellCenter} getContent={(r: any) => r?.project_name ?? ''} />
            <DataTableCell style={styles.cellCenter} getContent={(r: any) => r?.client ?? ''} />
            <DataTableCell style={styles.cellCenter} getContent={(r: any) => r?.contractor ?? ''} />
            <DataTableCell style={styles.cellRightAlign} getContent={(r: any) => r?.max_x ?? ''} />
            <DataTableCell style={styles.cellRightAlign} getContent={(r: any) => r?.min_x ?? ''} />
            <DataTableCell style={styles.cellRightAlign} getContent={(r: any) => r?.max_y ?? ''} />
            <DataTableCell style={styles.cellRightAlign} getContent={(r: any) => r?.min_y ?? ''} />
            <DataTableCell style={styles.cellRightAlign} getContent={(r: any) => r?.max_z ?? ''} />
            <DataTableCell style={styles.cellRightAlign} getContent={(r: any) => r?.min_z ?? ''} />
          </TableBody>
        </Table>
      </View>
    </Page>
  </Document>
)

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
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
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
      <Col span={4} offset={16}>
        {
          isClient ? (
            <PDFDownloadLink 
              document={<TableAsPDF data={rowData} />} 
              fileName="report.pdf"
              style={{ color: '#1677ff' }}
            >
              <Button className='w-full bg-white'>{'Export as PDF'}</Button>
            </PDFDownloadLink>
          )
          : ''
        }
      </Col>
      <Col span={4}>
        <Link href="/add-data">
          <Button className='w-full bg-white'>{'Add New'}</Button>
        </Link>
      </Col>
      <Col span={24}>
        <AntDTable 
          columns={columns} 
          dataSource={rowData}
          scroll={{
              x: true
          }}
        />
      </Col>
    </Row>
  )
}

export default Result
