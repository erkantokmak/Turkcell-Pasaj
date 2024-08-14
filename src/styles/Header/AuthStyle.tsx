import styled from 'styled-components';
import { YellowButton } from '../Global';

export const AuthContainer = styled.div`
position: relative;
`;

export const AuthWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  min-height: 590px;
  background-color: white;
  z-index: 3;
`;

export const AccountContainer = styled.div`
position: relative;
`;

export const AccountWrapper = styled.div`
position: absolute;
top: 15px;
right: 0;
left: 0;
width: 100%;
height: 100%;
background-color: white;
z-index: 9;
`;

export const AccountItem = styled.button`
padding: .25rem .25rem;
display: block;
width: 100%;
background-color: #fff;
border-radius: .625rem;
border: 1px solid #5e5e5e;
&:hover {
background-color: #ffc900;
color: #fff;
}
`;

export const AuthInput = styled.input`
border: 1px solid #5e5e5e;
border-radius: .625rem;
padding: .2rem;
&:focus {
border: 1px solid #ffc900;
outline: none;
}
&::placeholder {
color: #5e5e5e;
}
`;

export const AuthButton = styled(YellowButton)`
padding: .5rem 1rem;
font-weight: 700;
`;
