import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../styles/user-card.style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from '../components/navbar'
import Header from '../components/header'
import axios from '../helpers/axios'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    (
      async () => {
        setLoading(true)

        try {
          const response = await axios.get(`/api/currentuser`)
          setUser(response.data.user);
        } 
        catch (e) {
          setUser(null);
        }
        setLoading(false)
      }
    )();
  }, []);

  if (loading) {
    return <Loading />
  }

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

export default MyApp