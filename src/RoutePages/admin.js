import React from 'react'
import { useRecoilValue } from 'recoil'
import { userName } from '../recoil/index'
export default function(){
    const username = useRecoilValue(userName)
    return <div>用户名：{username}</div>
}