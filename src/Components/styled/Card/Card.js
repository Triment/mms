import styled from 'styled-components'
import RoundBox from '../RoundBox'

export default styled(RoundBox)`
    color: ${({ theme })=>theme.color};
    background-color: ${({theme})=>theme.background};
    box-shadow: rgb(0 0 0 / 12%) 0px 5px 10px;
`