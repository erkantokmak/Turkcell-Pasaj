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
