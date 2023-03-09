import 'focus-visible'
import '@/styles/tailwind.css'
import '@tremor/react/dist/esm/tremor.css'
import { AppProviders } from '@/components/layouts'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const app = getLayout(<Component {...pageProps} />)
  return <AppProviders>{app} </AppProviders>
}
