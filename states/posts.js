import { atom, selector } from 'recoil'

export const postsState = atom({
    key: 'posts',
    default: [],
})
