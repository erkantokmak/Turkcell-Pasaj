import styled from 'styled-components';
import { Column, ImageWrapper } from '../Global';

export const CategoryItem = styled(Column)`
height: 145px;
width: 100%;
`;

export const CategoryImage = styled(ImageWrapper)`
 overflow: hidden;
  display: inline-block;
border-radius: 50%;
margin-bottom: 15px;
width: 82px;
height: 82px;
&:hover {
border: 5px solid #FFC900;
background-color: #fff;
}
`;

export const BannerBg = styled.div`
background: linear-gradient(5deg,#3697c9,#3baddf);
padding: 0px 2rem;
border-radius: .625rem;
border: 7px solid #fffa
`;

export const WhyIcon = styled.div`
background-color: #27356f;
color: #fff;
font-size: 45px;
border-radius: 50%;
margin-bottom: 25px;
overflow: hidden;
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`;

export const BestSellerMenuItem = styled(Column)<{isActive: boolean}>`
color: #253342;
&:hover{
color: #27356f;
font-weight: 700;
border-bottom: 4px solid #27356f;
cursor: pointer;
}
${({ isActive }) => isActive && `
color: #27356f;
font-weight: 700;
border-bottom: 4px solid #27356f;
`}
`;