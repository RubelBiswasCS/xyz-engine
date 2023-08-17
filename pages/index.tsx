import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Spin } from 'antd'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/add-data')
  }, [])
  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>
      <Spin size='large' />
    </div>
  )
}
