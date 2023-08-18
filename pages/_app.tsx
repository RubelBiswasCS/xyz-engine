import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { Spin } from 'antd'
import MainLayout from '@/components/MainLayout'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [ loading, setLoading ]: any = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if(loading){
    return (
      <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <Spin size='large' />
      </div>
    )
  }

  return (
    <Provider store={ store }>
      <div className="flex w-full min-h-screen overflow-hidden">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </Provider>
  )
}
