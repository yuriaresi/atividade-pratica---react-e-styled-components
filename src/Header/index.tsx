import styled from "styled-components";
import imagemFundo from '../img/20210423_oceano1.webp'


interface HeaderProps {
    fontSize: string
    padding: string
}

export const Header = styled.div<HeaderProps>`
color: white;
background-image: url(${imagemFundo});
background-size:cover;
background-position:center ;
padding:${(props) => props.padding};
font-size: ${(props) => props.fontSize};
text-align: center
`