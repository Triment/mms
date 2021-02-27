import React from 'react'
import Root from '../Layout/Root'
import admin from '../RoutePages/admin'
import filemanger from '../RoutePages/filemanger'
export const rootRoutes = [
    {
        title: '登录后的页面',
        path: '/admin',
        component: admin
    },
    {
        title: '文件管理',
        path: '/filemanger',
        component: filemanger
    }
]