import styled from 'styled-components';

export const CartContainer = styled.div`
padding: 1.5rem 1.875rem;
border-radius: .625rem;
border: 1px solid #dee3ed;
background-color: #fff;
width: 100%;
`;

export const SummaryContainer = styled(CartContainer)`
background-color: #f5f7f9;
display: flex;
flex-direction: column;
gap: 1.25rem;
`;


export const QuantitiyMinus = styled.button`
background-color: #F0F0F0;
padding: 16px 20px 16px 20px;
border: none;
border-top-left-radius: 62px;
border-bottom-left-radius: 62px;
cursor: pointer;
`;

export const QuantityPlus = styled.button`
background-color: #F0F0F0;
padding: 16px 20px 16px 20px;
border: none;
border-top-right-radius: 62px;
border-bottom-right-radius: 62px;
cursor: pointer;
`;

export const QuantityValue = styled.p`
background-color: #F0F0F0;
align-self:center;
padding: 15px 20px 14px 20px;
margin: 0;
color: black;
`;
