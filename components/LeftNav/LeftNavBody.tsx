import React, { useState } from 'react'
import Link from 'next/link'

// Import Components
import { Menu } from 'antd'

// Import Icons
import { PlusOutlined, StockOutlined } from '@ant-design/icons'

// Import Actions & Methods
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setSelectedLeftNavMenuKeys } from '@/redux/reducers/navReducer'

// Const
const rootSubmenuKeys = [ 'add-data', 'result' ]

const LeftNavBody = () => {
  const dispatch = useAppDispatch()

  const selectedLeftNavMenuKeys = useAppSelector(state => state?.nav?.selectedLeftNavMenuKeys ?? [])

  // State
  const [ openKeys, setOpenKeys ] = useState([''])

  // On Leftnav Open Change
  const _onOpenChange: any = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  // On Selected Left Nav Keys Change
  const _onSelectedLeftNavMenuKeysChange = (value: any) => {
    dispatch(setSelectedLeftNavMenuKeys(value?.selectedKeys ?? [ 'add-data' ]))
  }

  return (
    <Menu
      className='side-navbar'
      mode='inline'
      theme='light'
      openKeys={ openKeys }
      onOpenChange={ _onOpenChange }
      selectedKeys={ selectedLeftNavMenuKeys }
      onSelect={ _onSelectedLeftNavMenuKeysChange }
      style={{ boxSizing: 'border-box', width: '100%', height: `calc(100vh - 52px)`, overflowX: 'hidden', overflowY: 'auto' }}
      items={[
        {
          key: 'add-data',
          label: 'Add Data',
          icon: <Link href='/add-data'><PlusOutlined /></Link>
        },
        {
          key: 'result',
          label: 'Result',
          icon: <Link href='/result'><StockOutlined /></Link>
        }
      ]}
    />
  )
}

export default LeftNavBody
