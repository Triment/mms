import styled from 'styled-components'
const Page = styled.div`
    display: flex;
    color: ${({theme})=>theme.background};
    background-color: ${({theme})=>theme.color};
    flex: 4;
    width: 100%;
    height: 100%;
`

export default Page

//页面盒子