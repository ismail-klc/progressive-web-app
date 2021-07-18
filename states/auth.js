import { atom, selector } from 'recoil'

export const authState = atom({
    key: 'auth',
    default: {
      user: null,
      loaded: false
    },
  })
