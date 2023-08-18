import React, { useState } from 'react'
import Link from 'next/link'
import { message, Button, Input, Form, InputNumber, Steps, Result, Row, Col } from 'antd'

import { useAppDispatch, useAppSelector } from '@/redux/store'
import { updateProjects } from '@/redux/reducers/projectReducer'

// Constants
const { Item } = Form
const { TextArea } = Input

const AddData = () => {
  const dispatch = useAppDispatch()

  const [ current, setCurrent ] = useState(0)

  const projects = useAppSelector(state => state?.project?.projects ?? [])
  console.log({ projects })
  const [ projectInfoForm ] = Form.useForm()
  const [ xyzInfoForm ] = Form.useForm()

  // On Step 1 Form Submit
  const onProjectInfoSubmit = (values: any) => {
    xyzInfoForm.setFieldsValue(values)
    setCurrent(1)
  }

  // On Step 1 Form Submit Error
  const onProjectInfoFormSubmitError = (error: any) => {
    console.log({ error })
  }

  // On Step 2 Form Submit
  const onXYZInfoSubmit = (values: any) => {
    dispatch(updateProjects({ ...values }))
    setCurrent(2)
  }

  // On Step 2 Form Submit Error
  const onXYZInfoFormSubmitError = (error: any) => {
    console.log({ error })
  }

  // On Add New
  const onAddNew = () => {
    projectInfoForm.resetFields()
    xyzInfoForm.resetFields()
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
            form={ projectInfoForm }
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
            form={xyzInfoForm}
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
                  <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Min X" />
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
    </div>
  )
}

export default AddData
