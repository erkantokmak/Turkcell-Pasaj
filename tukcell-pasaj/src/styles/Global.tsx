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








