import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import ParentItem from '../Components/custom/Root/NavBar/Item'
import NavBar from './Root/NavBar'
import Page from './Root/Page'
const Root = styled.div`
    display: flex;
    color: ${({theme})=>theme.color};
    background-color: ${({theme})=>theme.background};
    height: 100%;
    width: 100%;
    flex-direction: row;
`

export default function(props){
    return <Root>
                <NavBar>
                    {
                        props.routes.map((v,i)=>{
                            return <ParentItem key={i}><Link to={v.path}>{v.title}</Link></ParentItem>
                        })
                    }
                    
                </NavBar>
                <Page>
                    <Switch>
                    {    
                        props.routes.map((v,i)=>{
                                return <Route key={i} path={v.path} children={<v.component/>}/>
                            })
                    }
                    </Switch>
                </Page>
            </Root>
}
//根组件