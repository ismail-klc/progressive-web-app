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
  if (ctx.req) {
    try {
    const url = 'https://nodejs-firee.herokuapp.com' || 'http://localhost:8080'

      const response = await axios.get(`${url}/api/currentuser`, {
        headers: ctx.req.headers,
        credentials: true,
      });

      console.log(response.status);

      if (response.status === 200) {
        // let pageProps = {};

        const user = response.data
        // if (Component.getInitialProps) {
        //   pageProps = await Component.getInitialProps(ctx);
        // }

        return { user };

      }
      else {

        return {
        };
      }
    } catch (error) {

      return {
      };
    }
  }

  return {}
};

export default MyApp