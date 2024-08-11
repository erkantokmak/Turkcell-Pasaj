import Link from 'next/link';
import styled from 'styled-components';
import { Title } from '../Global';

export const FavoriteButton = styled.button`
margin-left: 5px;
padding: 25px 16px;
background-color: #fff;
cursor: pointer;
border-radius: .625rem;
border: 1px solid #dee3ed;
overflow: hidden;
width: 4.1875rem;
height: 5rem;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
font-weight: 700;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 274px;
  margin-right: 20px;
`;

export const DropdownHeader = styled.div`
  padding: 15px 20px;
  border: 1px solid #aaa;
  border-radius: 0.625rem;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
    align-items: flex-start;
`;


export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  border: 1px solid #aaa;
  border-radius: 0.625rem;
  background-color: #fff;
  z-index: 2;
  list-style-type: none;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    font-weight: 700;
    background-color: #f0f0f0;
  }
`;

export const ColorBox = styled.div<{ color?: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #000;
  display: inline-block;
  background-color: ${(props) => props.color || '#000'};
`;

export const SellerWrapper = styled.label`
width: 100%;
height: auto;
border: 1px solid #dee3ed;
border-radius: .625rem;
padding: 1rem;
cursor: pointer;
position: relative;
`;

export const ColoredBox = styled.span`
min-width: 41px;
border-radius: .625rem;
background-color: #05c15c;
color: #fff;
padding: 5px 10px;
font-weight: 700;
font-size: 12px;
margin: 20px 10px 0px 30px;
`;

export const DetailIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #ecf0f2;
color: #5f6b76;
width: 50px;
height: 50px;
border-radius: 50%;
`;

export const ProductIcons = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 120px;
width: 40%;
text-align: center;
gap: 10px;
cursor: pointer;
&:hover  ${DetailIcon} {
    background: linear-gradient(180deg, #ffc900 0%, #ff8a00 100%);
    color: #fff;
}
&:hover ${Title} {
color: #ffc900;
}
`;

export const Limited = styled.div`
background: linear-gradient(5deg,#3697c9,#3baddf);
padding: .5rem 2rem;
border-radius: .625rem;
color: #fff;
font-weight: 700;
&::before {
background: radial-gradient(circle at 0 50%, #49baee 19%, rgba(72, 185, 237, .75) 19%, rgba(72, 185, 237, .65) 34%, rgba(72, 185, 237, .5) 34%, rgba(72, 185, 237, .2) 47%, rgba(0, 0, 0, 0) 47%);
}
`;

export const ProductTabMenu = styled.div`
width: 100%;
box-shadow: 0 1px 4px 0 rgba(37,51,66,.2)
`;

export const ProductTabItem = styled.div<{active: boolean}>`
position: relative;
font-size: 16px;
font-weight: 500;
line-height: 1.33;
text-align: center;
padding: 1.25rem;
text-decoration: none;
color: ${(props) => props.active ? '#2855AC' : '#5f6b76'};
border-bottom: 2px solid ${(props) => props.active ? '#2855AC' : 'transparent'};
&::after {
align-items: center;
content: "";
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 0;
bottom: 0;
opacity: .5;
width: 1px;
height: 30px;
background-color: #5e6b76;
&:last-child::after {
display: none;
}
`;

export const DetailTab = styled.div`
padding: 5rem 0;
background-color: #ecf0f2;

`;

export const DetailContent = styled.div`
border-radius: .625rem;
background-color: #fff;
box-shadow: 0 1px 4px 0 rgba(37,51,66,.2);
padding: 2.187rem 5rem;
display: flex;
flex-wrap: wrap;
`;

export const DetailItem = styled.div`
width: 33%;
gap: 20px;
position: relative;
&::after {
align-items: center;
content: "";
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 0;
bottom: 0;
width: 1px;
opacity: .5;
height: 30px;
background-color: #5e6b76;
}
&:nth-child(3n)::after {
display: none;
}
`;