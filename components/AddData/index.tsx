import React, { useState } from 'react'
import { message, Button, Input, Form, InputNumber } from 'antd'

// Constants
const { Item } = Form
const { TextArea } = Input

const AddData = () => {
  const [ current, setCurrent ] = useState(0)

  const [ projectInfoForm ] = Form.useForm()
  const [ xyzInfoForm ] = Form.useForm()

  // On Step 1 Form Submit
  const onProjectInfoSubmit = (values: any) => {
    console.log({ values })
  }

  // On Step 1 Form Submit Error
  const onProjectInfoFormSubmitError = (error: any) => {
    console.log({ error })
  }

  // On Step 2 Form Submit
  const onXYZInfoSubmit = (values: any) => {
    console.log({ values })
  }

  // On Step 2 Form Submit Error
  const onXYZInfoFormSubmitError = (error: any) => {
    console.log({ error })
  }

  const steps = [
    {
      title: 'Step 1',
      content: (
        <div className="flex flex-col justify-center items-center h-full">
          <Form
            style={{ width: '100%', gap: 4 }}
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
              <Input disabled placeholder='Project Nane' />
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
              <Input disabled placeholder='Client' />
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
              <Input disabled placeholder='Contractor' />
            </Item>
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
                  <Button
                    onClick={ () => setCurrent(1) }
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
            style={{ width: '100%', gap: 4 }}
            layout='vertical'
            size='middle'
            onFinish={ onXYZInfoSubmit }
            onFinishFailed={ onXYZInfoFormSubmitError }
            validateTrigger='onChange'
            form={ xyzInfoForm }
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
              <Input disabled placeholder='Project Nane' />
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
              <Input disabled placeholder='Client' />
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
              <Input disabled placeholder='Contractor' />
            </Item>

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
            
            <Item
              label="Max Y"
              name='max_Y'
              rules={[
                {
                  required: true,
                  message: 'This field is required'
                }
              ]}
            >
              <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Max Y" />
            </Item>
            <Item
              label="Min Y"
              name='min_Y'
              rules={[
                {
                  required: true,
                  message: 'This field is required'
                }
              ]}
            >
              <InputNumber style={{ width: '100%' }} controls={ false } placeholder="Min Y" />
            </Item>

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
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      { steps[current]?.content }
    </div>
  )
}

export default AddData
