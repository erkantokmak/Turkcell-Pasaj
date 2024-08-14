import { ImageWrapper} from '@/styles/Global'
import { SliderWrapper, StyledSwiper } from '@/styles/Slider'
import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = () => {
  return (
    <>
    <SliderWrapper>
      <StyledSwiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-1.webp' alt='category-1' fill priority style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-2.webp' alt='category-2' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-3.webp' alt='category-3' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-4.webp' alt='category-4' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-5.webp' alt='category-5' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
        </SwiperSlide>
      </StyledSwiper>
    </SliderWrapper>
     </>
  )
}

export default Slider