import {atom, selector} from 'recoil'

export const userState = atom({
    key: 'userState',
    default: {
        isAuthenticated: false,
        username: '',
        role: 0,
        token: ''
    }
})

export const userName = selector({
    key: 'userName',
    get: ({get}) => {
        const user = get(userState)
        return user.username
    }
})