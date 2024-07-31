import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.menu{

position: relative;}
.menuItem {
    text-decoration: none;
}
  `;

interface Props {
    width?: string;
    alignItems?: string;
    justifyContent?: string;
    gap?: string;
    padding?: string;
    margin?: string;
}

interface ImageProps {
    width?: string;
    height?: string;
}

interface GridProps {
    columns?: number;
    gap?: string;
    padding?: string;
}

interface TitleProps {
    fsize?: string;
    fcolor?: string;
    fweight?: string;
    family?: string;
    lineHeight?: string;
    letterSpacing?: string;
    textAlign?: string;
}

export const Container = styled.div`
max-width: 1200px;
padding: 0 10px;
margin: 0 auto;
@media (max-width: 768px) {
    max-width: 768px;
    padding: 0 15px;
}
@media (max-width: 456px) {
    max-width: 456px;
    padding: 0 20px;
}
`;

export const Row = styled.div<Props>`
display: flex;
flex-direction: row;
align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
gap: ${(props) => props.gap ? props.gap : '0px'};
padding: ${(props) => props.padding ? props.padding : '0px'};
margin: ${(props) => props.margin ? props.margin : '0px'};
`;

export const Column = styled.div<Props>`
display: flex;
flex-direction: column;
padding: 0 10px;
width: ${(props) => props.width ? props.width : '100%'};
align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
gap: ${(props) => props.gap ? props.gap : '0px'};
`;

export const ImageWrapper = styled.div<ImageProps>`
position: relative;
width: ${(props) => props.width ? props.width : ''};
height: ${(props) => props.height ? props.height : ''};
`;

export const Grid = styled.div<GridProps>`
display: grid;
grid-template-columns: repeat(${(props) => props.columns ? props.columns : 6}, 1fr);
gap: ${(props) => props.gap ? props.gap : '0px'};
padding: ${(props) => props.padding ? props.padding : '0px'};
@media (max-width: 768px) {
grid-template-columns: repeat(${(props) => props.columns ? props.columns/2 : 3}, 1fr);
}
@media (max-width: 456px) {
grid-template-columns: repeat(${(props) => props.columns ? props.columns/3 : 2}, 1fr);
}
`;

export const GridColumn = styled.div`
flex-basis: 0;
flex-grow: 1;
max-width: 100%;
padding: 0 .625rem;
`;

export const SocialIcon = styled(Link)`
color: #fff;
text-decoration: none;
cursor: pointer;
`;

export const Title = styled.h3<TitleProps>`
font-size: ${(props) => props.fsize ? props.fsize : '1rem'};
color: ${(props) => props.fcolor ? props.fcolor : '#000'};
font-weight: ${(props) => props.fweight ? props.fweight : '500'};
line-height: ${(props) => props.lineHeight ? props.lineHeight : '1.5rem'};
font-family: ${(props) => props.family ? props.family : 'inherit'};
letter-spacing: ${(props) => props.letterSpacing ? props.letterSpacing : '0px'};
text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};
`;

export const StyledHr = styled.hr`
border-bottom: 2px solid #fff;
margin:0 auto;
opacity: .1;
`;

export const YellowButton = styled.button`
border-radius: 50px;
background-color: #FFC900;
color: #000;
padding: 16px;
cursor: pointer;
border: none;
display: flex;
gap: 30px;
align-items: center;
justify-content: space-between;
transition: background-color .3s;
&:hover {
background-color: #ffd917;
}
`;


