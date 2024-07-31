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
