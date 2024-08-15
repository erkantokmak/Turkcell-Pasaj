import styled from 'styled-components';
import { Container } from '../Global';

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

export const HomeSliderContainer = styled(Container)`
padding: 0;
position: relative;
`;

export const SliderBackground = styled.div<ImageProps>`
position: absolute;
filter: blur(2px);
top: 0;
left: 0;
right: 0;
z-index: -2;
width: 100%;
height: 590px;
background-image : url('${(props) => props.background}');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width: 576px) {
    background-size: cover;
    width: 400px;
}
`;