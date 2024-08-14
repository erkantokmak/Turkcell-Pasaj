import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderWrapper = styled.div`
width: 100%;
position: relative;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;

  .swiper-pagination {
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }
  
  .swiper-pagination-bullet {
    background-color: #dee3ed;
    opacity: 1;
    &.swiper-pagination-bullet-active {
        background: #2855ac;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #fff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .15);
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5rem;
`;
