import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../styles/user-card.style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from '../components/navbar'
import Header from '../components/header'
import axios from 'axios'

function MyApp({ Component, pageProps, user }) {
  
  return (
    <>
      <Header />
      <RecoilRoot>
        <MyNavbar user={user} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  const appProps = await App.getInitialProps(appContext)
  let user = null

  if (ctx.req) {
    try {
    const url = 'https://nodejs-firee.herokuapp.com' || 'http://localhost:8080'

      const response = await axios.get(`${url}/api/currentuser`, {
        headers: ctx.req.headers,
        credentials: true,
      });

      console.log(response.status);

      if (response.status === 200) {
        user = response.data
      }
    } catch (error) {
    }
  }

  return { ...appProps, user }
};

export default MyApp