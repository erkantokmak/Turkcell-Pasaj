import Link from 'next/link';
import styled from 'styled-components';
import { Title } from '../Global';
import { SearchBar } from '../Header/HeaderStyle';

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
  max-width: 274px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }

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
type SellerProps = {
  isActive: boolean;
}
export const SellerWrapper = styled.label<SellerProps>`
width: 100%;
height: auto;
border: 1px solid; 
border-color: ${(props) => props.isActive ? '#ffc900' : '#dee3ed'};
border-radius: .625rem;
background-color: ${(props) => props.isActive ? '#fff' : '#1e1f2019'};
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
@media (max-width: 768px) {
  width: 30%;
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

export const ProductTabItem = styled.div<{ active: boolean }>`
position: relative;
font-size: 16px;
font-weight: 500;
line-height: 1.33;
text-align: center;
padding: 1.25rem;
text-decoration: none;
cursor: pointer;
color: ${(props) => props.active ? '#2855AC' : '#5f6b76'};
border-bottom: 2px solid ${(props) => props.active ? '#2855AC' : 'transparent'};
width: 100%;
height: 60px;
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
}
&:nth-last-child::after {
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
margin-bottom: 1rem;
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
@media (max-width: 768px) {
  width: 50%;
  &:nth-child(2n)::after {
    display: none;
  }
}
@media (max-width: 576px) {
  width: 100%;
  &:nth-child(1n)::after {
    display: none;
  }
}
`;

export const FaqsTab = styled.div`
padding: 80px 0;
`;

export const FaqsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 1rem;
padding: 1.75rem 1.5rem;
background-color: #fff;
box-shadow: 0 1px 4px 0 rgba(37,51,66,.2);
border-radius: .625rem;
`;

export const FaqsItem = styled.div`
width: 100%;
`;

export const FaqsSearch = styled(SearchBar)`
width: 100%;
min-width: 20rem;
&:focus {
border: none;
outline: none;
}
@media (max-width: 768px) {
  width: 100%;
  min-width: 0;
}
@media (max-width: 576px) {
  width: 100%;
  min-width: 0;
}
`;


export const BlueButton = styled.button<{ width?: string, display?: string }>`
width: ${(props) => props.width ? props.width : ''};
border-radius: 50px;
background-color: #2855ac;
color: #fff;
padding: 16px;
cursor: pointer;
border: none;
display: ${(props) => props.display ? props.display : 'flex'};
gap: 30px;
align-items: center;
justify-content: space-between;
transition: background-color .3s;
&:hover {
background-color: #3a6ccd;
}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1001;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ReviewsTab = styled(FaqsContent)`
min-width: 20rem;
@media (max-width: 768px) {
  width: 100%;
}
@media (max-width: 576px) {
  width: 100%;
  min-width: 0;
}
`;

export const RatingCount = styled.span`
display: inline-block;
    width: 31px;
    line-height: 16px;
    background-color: rgba(236, 240, 242, .75);
    text-align: center;
    border-radius: .5rem;
    font-size: .75rem;
    font-weight: 700;
    margin-left: 10px;
`;

export const ReviewItem = styled.div`
color: #253342;
padding: 2.5rem 0;
border-top: 1px solid #ecf0f2;
`;

export const ModalInput = styled(FaqsSearch)`
width: 100%;
height: 150px;
padding: 1rem;
`;

export const SortDropdown = styled.select`
  padding: 1rem;
  font-size: 1rem;
  line-height: 3.5rem;
  border: 1px solid #ecf0f2;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  width: 30%;
  cursor: pointer;
  &:hover {
    border-color: #253342;
  }
  &:focus {
    outline: none;
    box-shadow: 2px 0px 20px -1px rgba(0,0,0,0.2);
  }
  option {
    padding: 8px;
    font-size: 16px;
    box-shadow: 2px 0px 26px -1px rgba(0,0,0,0.3);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BankTable = styled.table`
border-radius: .625rem;
position: relative;
background-color: #fff;
border-collapse: collapse;
`;

export const BankTableTh = styled.th`
height: 2.375rem;
vertical-align: middle;
font-size: .6875rem;
font-weight: 700;
line-height: 1.27;
color: #8e9fad;
padding: .75rem;
text-align: left;
`;

export const BankTableTd = styled.td`
font-size: .6875rem;
font-weight: 500;
color: #5f6b76;
border-bottom: 1px solid #dee3ed;
letter-spacing: normal;
padding: .875rem;
`;

export const BankTableThead = styled.thead`
border: 1px solid #dee3ed;
background-color: #f8f9fa;
`;

export const BankTableTbody = styled(BankTableThead)`
background-color: #fff;
`;

export const CancellationItem = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;
    border: 1px solid #ecf0f2;
    color: #253342;
    padding: 44px 0;
    height: 258px;
    background: #fff;
    overflow: hidden;
`;