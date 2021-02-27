import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
    <React.StrictMode>
       <RecoilRoot> <App/></RecoilRoot>
    </React.StrictMode>,
    document.getElementById('app')
)