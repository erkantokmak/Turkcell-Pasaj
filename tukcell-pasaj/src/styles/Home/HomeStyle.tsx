import styled from 'styled-components';
import { Column, ImageWrapper } from '../Global';

export const CategoryItem = styled(Column)`
height: 145px;
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
