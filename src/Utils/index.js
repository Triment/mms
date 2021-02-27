import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil'


export default function (){
    const [state, setUserState] = useRecoilState(userState)
    useEffect(()=>{
        const [username, role, token] = [
            localStorage.getItem('username'),
            localStorage.getItem('role'),
            localStorage.getItem('token')
        ]
        fetch('/auth/user', {
            headers: {
                
            }
        })

    })
}