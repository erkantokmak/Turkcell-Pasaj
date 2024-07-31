import styled from 'styled-components';

interface ImageProps {
    background: string;
}

export const SliderContainer = styled.div`
position:relative;
display: flex;
justify-content: center;
align-items: center;
height: 590px;
`;

export const SliderBackground = styled.div<ImageProps>`
position: absolute;
filter: blur(5px);
top: 0;
left: 0;
z-index: -2;
width: 100%;
height: 590px;
background-image : url('${(props) => props.background}');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;