import { ImageWrapper, Row} from '@/styles/Global'
import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-1.webp' alt='category-1' fill objectFit='contain' />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-2.webp' alt='category-2' fill objectFit='contain' />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-3.webp' alt='category-3' fill objectFit='contain' />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-4.webp' alt='category-4' fill objectFit='contain' />
          </ImageWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper width='800px' height='368px'>
            <Image src='/images/sliders/category-5.webp' alt='category-5' fill objectFit='contain' />
          </ImageWrapper>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider