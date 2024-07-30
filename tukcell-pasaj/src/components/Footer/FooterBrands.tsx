import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { ImageWrapper, Row } from '@/styles/Global';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';

interface Swiper {
  spaceBetween: number;
  slidesPerView: number;
  onSlideChange: () => void;
  onSwiper: (swiper: Swiper) => void;
}

const FooterBrands = () => {
  return (
    <Row padding='52px 30px'>
      <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={9}
    >
      <SwiperSlide>
        <ImageWrapper width='55px' height='38px' > 
          <Image src="/images/brands/fizy.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='132px' height='38px' > 
          <Image src="/images/brands/superonline.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='86px' height='38px' > 
          <Image src="/images/brands/platinum.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='39px' height='38px' > 
          <Image src="/images/brands/bip.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='39px' height='38px' > 
          <Image src="/images/brands/tv-plus.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='97px' height='38px' > 
          <Image src="/images/brands/LifeBox.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='104px' height='38px' > 
          <Image src="/images/brands/paycell.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='39px' height='38px' > 
          <Image src="/images/brands/gnc.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='198px' height='38px' > 
          <Image src="/images/brands/gaming.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='39px' height='38px' > 
          <Image src="/images/brands/suit.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='115px' height='38px' > 
          <Image src="/images/brands/Global-Bilgi.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='88px' height='38px' > 
          <Image src="/images/brands/wiyo.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='45px' height='38px' > 
          <Image src="/images/brands/Gelecegi-YazanKadinlar.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <ImageWrapper width='173px' height='38px' > 
          <Image src="/images/brands/Turkcell-Bulut.webp" alt="" fill objectFit='contain'/>
        </ImageWrapper>
      </SwiperSlide>
    </Swiper>
    </Row>
  )
}

export default FooterBrands