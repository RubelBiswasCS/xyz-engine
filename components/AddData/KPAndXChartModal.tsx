import React from 'react'
import dynamic from 'next/dynamic'

// Import Components
import { Modal, Spin } from 'antd'

// Component Dynamic Imports
const AntVLine = dynamic(() => import('@ant-design/plots').then(({ Line }) => Line), { 
  ssr: false,
  loading: () => (
    <div className='flex w-full h-full justify-center items-center'>
      <Spin size='default' />
    </div>
  )
})

const KPAndXChartModal = ({ open, onCancel, data, ...rest }: any) => {
  return (
    <Modal
      title="KP and X Chart"
      centered
      open={open}
      footer={null}
      onCancel={onCancel}
      width={'90%'}
      bodyStyle={{ height: '60vh' }}
      {...rest}
    >
      <div className='w-full h-full'>
        <AntVLine
          data={data}
          padding={'auto'}
          xField={'KP'}
          yField={'X'}
        />
      </div>
    </Modal>
  )
}

export default KPAndXChartModal
