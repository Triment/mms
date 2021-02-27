import styled from 'styled-components'
import RoundBox from '../RoundBox'
import React from 'react'

const InputBox = styled(RoundBox)`
    display: inline-flex;
    align-items: center;
    width: fit-content;
    height: calc(26.992pt);
    border-color: ${({ theme })=>theme.color};
    flex: 1;
    
`

const LabelBox = styled.span`
    display: inline-flex;
    width: initial;
    height: 100%;
    align-items: center;
    pointer-events: none;
    margin: 0px;
    padding: 0px 8pt;
    color: ${({ theme })=>theme.background};
    background-color: ${({ theme })=>theme.color};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top: 1px solid ${({ theme })=>theme.background};
    border-left: 1px solid ${({ theme })=>theme.background};
    border-bottom: 1px solid ${({ theme })=>theme.background};
    font-size: 0.875rem;
    line-height: 1;
`

const RightInputBox = styled.div`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    height: 100%;
    flex: 1 1 0%;
    user-select: none;
    border-radius: 5px;
    border: 1px solid ${({ theme })=>theme.background};
    transition: border 0.2s ease 0s, color 0.2s;
    background-color: ${({ theme })=>theme.color};
`

const Input = styled.input`
    margin: 4px 10px;
    padding: 0px;
    box-shadow: none;
    font-size: 0.875rem;
    background-color: transparent;
    border: none;
    color: ${({ theme })=>theme.background};
    outline: none;
    border-radius: 0px;
    width: 100%;
    min-width: 0px;
    appearance: none;
`

export default ({label, ...rest})=>(
    <InputBox>
    <LabelBox>{label}</LabelBox>
    <RightInputBox>
        <Input {...rest} ></Input>
    </RightInputBox>
    </InputBox>
)