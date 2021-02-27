import styled from 'styled-components'

const ParentItem = styled.div`
    margin: 0px;
    padding: 0px .5rem;
    width: 100%;
    transition: all 0.2s ease 0s;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${({theme})=> theme.color};
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    border: 1px solid transparent;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 12%) 0px 5px 10px;
    border-style: solid;
    & > a {
        color: ${({theme})=> theme.color};
        text-decoration: none;
    }
    &::first-child {
        margin-top: 0;
    }
    margin-top: .3rem;
`

export default ParentItem
//导航栏的子组件