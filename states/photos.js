import { atom, selector } from 'recoil'

export const photosState = atom({
    key: 'photos',
    default: [],
  })
