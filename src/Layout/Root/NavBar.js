import styled from 'styled-components'
import React from 'react'
import ParentItem from '../../Components/custom/Root/NavBar/Item'
import { Link } from 'react-router-dom'
const Navbar = styled.div`
    display: flex;
    color: ${({theme})=>theme.color};
    background-color: color(${({theme})=>theme.background}, h(50));
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
`


export default Navbar