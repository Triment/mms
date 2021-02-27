import React from 'react'
import {useRecoilState} from 'recoil'
import { userState } from '../recoil/index'
export default function(){
    const [state, setUserState] = useRecoilState(userState)
    return <div>
        <button onClick={e=>setUserState({isAuthenticated: true, username:'splub', role:'admin'})}>login</button>
    </div>
}