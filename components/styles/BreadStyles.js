import styled from 'styled-components'

const BreadStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:4rem;
    background-color: ${props => props.theme.bodyColor};
    a {
        text-decoration:none;
        color: ${props => props.theme.white};
        margin-right:1.8rem;
        font-weight:400;
    }
` 
export default BreadStyles;