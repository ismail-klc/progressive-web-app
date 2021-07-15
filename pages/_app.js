import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../styles/user-card.style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from '../components/navbar'
import Header from '../components/header'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <RecoilRoot>
        <MyNavbar />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
