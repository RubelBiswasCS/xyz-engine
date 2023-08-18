import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
// @ts-ignore
import Papa from "papaparse"

import { message, Button, Input, Form, InputNumber, Steps, Result, Row, Col } from 'antd'
import FileInputButton from '../common/FileInputButton'
import KPAndXChartModal from './KPAndXChartModal'

// Import Icons
import { UploadOutlined } from '@ant-design/icons'

// Import Action and Methods
import { useAppDispatch } from '@/redux/store'
import { updateProjects } from '@/redux/reducers/projectReducer'
import { getMaxValue, getMinValue } from '@/utils/utils'

// Constants
const { Item } = Form
const { TextArea } = Input

const AddData = () => {
  const dispatch = useAppDispatch()

  // States
  const [current, setCurrent] = useState(0)
  const [file, setFile]: any = useState(null)
  const [projectInfo, setProjectInfo]: any = useState(null)
  const [xyzInfo, setXYZInfo]: any = useState(null)
  const [xyzValues, setXYZValues]: any = useState(null)
  const [open, setOpen] = useState(false)

  // Refs
  const projectInfoFromRef: any = useRef(null)
  const xyzInfoFormRef: any = useRef(null)

  // On Step 1 Form Submit
  const onProjectInfoSubmit = (values: any) => {
    // xyzInfoForm.setFieldsValue({  project_name: 'Changed', max_x: 100, min_x: 99 })
    projectInfoFromRef?.current?.setFieldsValue(values)
    setProjectInfo(values)
    setCurrent(1)
  }

  // On Step 1 Form Submit Error
  const onProjectInfoFormSubmitError = (error: any) => {
    console.log({ error })
  }

  // On Step 2 Form Submit
  const onXYZInfoSubmit = (values: any) => {
    dispatch(updateProjects({ ...values }))
    projectInfoFromRef?.current?.resetFields()
    xyzInfoFormRef?.current?.resetFields()
    setXYZInfo(null)
    setCurrent(2)
  }

  // On Step 2 Form Submit Error
  const onXYZInfoFormSubmitError = (error: any) => {
    console.log({ error })
  }

  // On File Upload
  const _onFileUpload = (e: any) => {
    const fileToUpload = e.target.files[0]
    const key = 'file-upload'

    const allowedExtensions = ["csv"]
    const fileExtension = fileToUpload?.type.split("/")[1]

    if (!allowedExtensions?.includes(fileExtension)) {
      message.error({ content: 'Input file is not a valid CSV file', key })
      return
    }

    if (!fileToUpload) {
      message.error({ content: 'No File', key })
      return
    }

    const reader = new FileReader()

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target?.result, { header: true, skipEmptyLines: true })
      const parsedData = csv?.data ?? []
      if (parsedData && parsedData?.length) {
        setXYZValues(parsedData)
        let max_x = getMaxValue(parsedData, 'X')
        let min_x = getMinValue(parsedData, 'X')
        let max_y = getMaxValue(parsedData, 'Y')
        let min_y = getMinValue(parsedData, 'Y')
        let max_z = getMaxValue(parsedData, 'Z')
        let min_z= getMinValue(parsedData, 'Z')
        setXYZInfo({ max_x, min_x, max_y, min_y, max_z, min_z })
      }
    }

    reader.readAsText(fileToUpload)

    setFile(fileToUpload)
  }

  // On Add New
  const onAddNew = () => {
    projectInfoFromRef?.current?.resetFields()
    xyzInfoFormRef?.current?.resetFields()
    setCurrent(0)
  }

  const steps = [
    {
      title: 'Step 1',
      content: (
        <div className="flex flex-col justify-center items-center h-full">
          <Form
            style={{ width: '100%', gap: 2 }}
            layout='vertical'
            size='middle'
            onFinish={ onProjectInfoSubmit }
            onFinishFailed={ onProjectInfoFormSubmitError }
            validateTrigger='onChange'
            ref={projectInfoFromRef}
          >
            <Item
              label="Project Name"
              name='project_name'
              rules={[
                {
                  required: true,
                  message: 'This field is required'
                }
              ]}
            >
              <Input placeholder='Project Nane' />
            </Item>
            <Item
              label="Project Description"
              name="project_description"
              rules={[
                {
                  required: true,
                  message: 'This field is required'
                }
              ]}
            >
              <TextArea rows={ 3 } placeholder="Project Description" />
            </Item>
            <Item
              label="Client"
              name='client'
              rules={[
                {
                  required: true,
                  message: 'This field is required'
                }
              ]}
            >
              <Input placeholder='Client' />
            </Item>
            <Item
              label="Contractor"
              name='contractor'
              rules={[
                {
                  required: true,
                  message: 'This field is required'
                }
              ]}
            >
              <Input placeholder='Contractor' />
            </Item>
            <Item style={{ margin: '24px 0px 0px 0px' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', gap: 16 }}>
                  <Button
                    htmlType={ 'submit' }
                    size={ 'middle' }
                    type={ 'primary' }
                    ghost
                  >
                    { 'Next' }
                  </Button>
                </div>
            </Item>
          </Form>
        </div>
      )
    },
    {
      title: 'Step 2',
      content: (
        <div className="flex flex-col justify-center items-center h-full">
          <Form
            style={{ width: '100%', gap: 2 }}
            layout='vertical'
            size='middle'
            onFinish={ onXYZInfoSubmit }
            onFinishFailed={ onXYZInfoFormSubmitError }
            validateTrigger='onChange'
            ref={xyzInfoFormRef}
          >
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Item
                  label="Project Name"
                  name='project_name'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <Input disabled placeholder='Project Nane' />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Project Description"
                  name="project_description"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <TextArea disabled rows={ 3 } placeholder="Project Description" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Client"
                  name='client'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <Input disabled placeholder='Client' />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Contractor"
                  name='contractor'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <Input disabled placeholder='Contractor' />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Max X"
                  name='max_x'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Max X" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Min X"
                  name='min_x'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <Input placeholder="Min X" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Max y"
                  name='max_y'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Max Y" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Min Y"
                  name='min_y'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Min Y" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Max Z"
                  name='max_z'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Max Z" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Min Z"
                  name='min_z'
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Min Z" />
                </Item>
              </Col>
              <Col span={ 12 }>
                <Item
                  label={ "Upload CSV File" }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 8 }}>
                    <FileInputButton
                      onChange={ _onFileUpload }
                      title={ 'Upload CSV File' }
                      style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #d9d9d9' }}
                      // @ts-ignore
                      icon={ <UploadOutlined /> }
                    />
                    <span>{ file?.name || '' }</span>
                  </div>
                </Item>
              </Col>
              <Col span={ 12 }>
                <Item
                  label={ "View XYZ Value in Chart" }
                >
                  <Button 
                    style={{ width: '100%' }} 
                    type='primary' 
                    ghost
                    disabled={(!xyzValues || xyzValues?.length <= 0)}
                    onClick={() => setOpen(true)}
                  >
                    View
                  </Button>
                </Item>
              </Col>
            </Row>
            <Item style={{ margin: '24px 0px 0px 0px' }}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', gap: 16 }}>
                <Button
                  onClick={ () => setCurrent(0) }
                  size={ 'middle' }
                >
                  { 'Back' }
                </Button>
                <Button
                  htmlType={ 'submit' }
                  size={ 'middle' }
                  type='primary'
                  ghost
                >
                  { 'Save' }
                </Button>
              </div>
            </Item>
          </Form>
        </div>
      )
    },
    {
      title: 'Done',
      content: (
        <div className="flex flex-col justify-center items-center h-full">
          <Result
            status="success"
            title="Record added Successfully"
            subTitle=""
            extra={[
              <Link key="show-result" href={'/result'}>
                <Button>Show Results</Button>
              </Link>,
              <Button key="add-new" onClick={onAddNew}>Add Another Record</Button>,
            ]}
          />
        </div>
      )
    }
  ]

  useEffect(() => {
    xyzInfoFormRef?.current?.setFieldsValue({
      ...projectInfo,
      ...xyzInfo
    })
  }, [projectInfo, xyzInfo])

  return (
    <div className='flex flex-col justify-center items-center h-full gap-6 px-16'>
      <h1 className='text-lg'>{ "Add Data" }</h1>
      <Steps 
        current={current} 
        items={steps.map((item) => ({ key: item.title, title: item.title }))} 
      />
      <div className='w-full'>
        {steps[current]?.content}
      </div>
      { open ? (
        <KPAndXChartModal
          open={open}
          onCancel={() => setOpen(false)}
          data={xyzValues}
        />
      ) : ''
      }
    </div>
  )
}

export default AddData
