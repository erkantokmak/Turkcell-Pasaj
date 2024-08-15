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
.CardText {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
  line-height: 1.5; 
  max-height: 3em; 
}
body {
  font-family: 'GreyCliffCF' , sans-serif;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

:root {
  --swiper-navigation-size: 24px;
  --swiper-pagination-size: 8px;
  --swiper-button-size: 24px;
}
  `;

interface Props {
    width?: string;
    alignItems?: string;
    justifyContent?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    flexWrap?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

interface ImageProps {
    width?: string;
    height?: string;
    radius?: string;
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
    margin?: string;
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
.text-line {
text-decoration: line-through;
}
`;

export const Row = styled.div<Props>`
width: ${(props) => props.width ? props.width : ''};
display: flex;
flex-direction: row;
align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
gap: ${(props) => props.gap ? props.gap : '0px'};
padding: ${(props) => props.padding ? props.padding : '0px'};
margin: ${(props) => props.margin ? props.margin : '0px'};
flex-wrap: ${(props) => props.flexWrap ? props.flexWrap : 'nowrap'};
@media (max-width: 768px) {
    flex-wrap: wrap;
}
`;

export const Column = styled.div<Props>`
display: flex;
flex-direction: column;
padding: 0 10px;
width: ${(props) => props.width ? props.width : '100%'};
align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
gap: ${(props) => props.gap ? props.gap : '0px'};
${({ sm }) => sm && `
    @media (min-width: 576px) {
      flex: 0 0 ${(sm / 12) * 100}%;
      max-width: ${(sm / 12) * 100}%;
    }
  `}

  ${({ md }) => md && `
    @media (min-width: 768px) {
      flex: 0 0 ${(md / 12) * 100}%;
      max-width: ${(md / 12) * 100}%;
    }
  `}

  ${({ lg }) => lg && `
    @media (min-width: 992px) {
      flex: 0 0 ${(lg / 12) * 100}%;
      max-width: ${(lg / 12) * 100}%;
    }
  `}

  ${({ xl }) => xl && `
    @media (min-width: 1200px) {
      flex: 0 0 ${(xl / 12) * 100}%;
      max-width: ${(xl / 12) * 100}%;
    }
  `}
`;

export const ImageWrapper = styled.div<ImageProps>`
position: relative;
overflow: hidden;
display: inline-block;
width: ${(props) => props.width ? props.width : ''};
height: ${(props) => props.height ? props.height : ''};
border-radius: ${(props) => props.radius ? props.radius : '0px'};
@media (max-width: 768px) {
width: 100%;
}
@media (max-width: 576px) {
width: 100%;
height: ${(props) => props.height ? 'calc(' + props.height + ' / 2)' : 'calc(100% / 2)'};
}
`;

export const Grid = styled.div<GridProps>`
display: grid;
grid-template-columns: repeat(${(props) => props.columns ? props.columns : 6}, 1fr);
gap: ${(props) => props.gap ? props.gap : '0px'};
padding: ${(props) => props.padding ? props.padding : '0px'};
@media (max-width: 768px) {
grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 456px) {
grid-template-columns: repeat(1, 1fr);
}
`;

export const GridColumn = styled.div`
flex-basis: 0;
flex-grow: 1;
max-width: 100%;
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
margin: ${(props) => props.margin ? props.margin : '0px'};
`;

export const StyledHr = styled.hr`
border-bottom: 2px solid #fff;
margin:0 auto;
opacity: .1;
`;

export const YellowButton = styled.button<{width?: string, display?: string}>`
width: ${(props) => props.width ? props.width : ''};
border-radius: 50px;
background-color: #FFC900;
color: #000;
padding: 16px;
cursor: pointer;
border: none;
display: ${(props) => props.display ? props.display : 'flex'};
gap: 30px;
align-items: center;
justify-content: space-between;
transition: background-color .3s;
&:hover {
background-color: #ffd917;
}
`;
interface BackgroundProps {
    bgColor?: string;
}
export const BackgroundColor = styled.div<BackgroundProps>`
background-color: ${(props) => props.bgColor ? props.bgColor : '#fff'};
`;