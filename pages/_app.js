import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../styles/user-card.style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from '../components/navbar'
import Header from '../components/header'
import axios from 'axios'
import App from 'next/app';
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps, uuser }) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    (
      async () => {
        setLoading(true)

        const url = 'https://nodejs-firee.herokuapp.com' || 'http://localhost:8080'

        try {
          const response = await fetch(`${url}/api/currentuser`, {
            credentials: 'include',
          });

          const content = await response.json();

          setUser(content.user);
        } catch (e) {
          setUSer(null);
        }
        setLoading(false)
      }
    )();
  }, []);

  if (loading) {
    return null
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