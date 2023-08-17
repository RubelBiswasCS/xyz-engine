import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import MainLayout from '@/components/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
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
