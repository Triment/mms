import React, { useContext, createContext, useState } from "react";
import {
    HashRouter as Router,
    Link,
    Switch,
    Route,
    useHistory,
} from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { ThemeProvider } from 'styled-components'
import Login from "./Layout/Login";
import Root from "./Layout/Root";
import { userName } from "./recoil";

import { rootRoutes } from './RouteConfig'

const greenTheme = {
    color: '#fff',
    background: '#22CC99',
    notice: ''
}
export default function () {
    const user = useRecoilValue(userName)
    return  <ThemeProvider theme={greenTheme}>
                <Router hashType="slash">
                    {
                        !user ? <Router basename="/dashboard">
                                    <Root routes={rootRoutes}/>
                                </Router> : <Login/>
                    }
                    
                </Router>
            </ThemeProvider>
}