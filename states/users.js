import { atom, selector } from 'recoil'

export const usersState = atom({
    key: 'users',
    default: [],
  })
