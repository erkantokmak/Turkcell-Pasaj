import styled from 'styled-components';

export const ProductWrapper = styled.div`
border-radius: .625rem;
width: 290px;
height: 450px;
background-color: #fff;
display: flex;
flex-direction: column;
position: relative;
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const ProductContent = styled(ProductWrapper)`
padding: 1.5rem;
box-shadow: none;
width: 100%;
height: 100%;
`;


interface InfoProps {
    fsize?: string;
    fcolor?: string;
    bgColor?: string;

}
export const ColoredInfo = styled.span<InfoProps>`
font-size: ${(props) => props.fsize ? props.fsize : '16px'};
color: ${(props) => props.fcolor ? props.fcolor : '#000'};
background-color: ${(props) => props.bgColor ? props.bgColor : 'transparent'};
font-weight: 700;
max-width: 4rem;
line-height: 1.11;
text-align: center;
border-radius: .625rem;
padding: .25rem .375rem;
`;

export const ProductTag = styled.span<InfoProps>`
position: absolute;
top: 0;
left: 0;
border-bottom-right-radius: .5rem;
border-top-left-radius: .5rem;
border: none;
font-weight: 700;
padding: .25rem .375rem;
color: ${(props) => props.fcolor ? props.fcolor : '#fff'};
font-size: ${(props) => props.fsize ? props.fsize : '12px'};
background-color: ${(props) => props.bgColor ? props.bgColor : ''};
`;

export const PriceSection = styled.div`
border-top: 1px solid #e5e5e5;
padding: 0 1.25rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items:start;
height: 64px;
`;

export const FavIcon = styled.div`
color: #ffc900;
font-weight: 700;
font-size: 1.5rem;
`;