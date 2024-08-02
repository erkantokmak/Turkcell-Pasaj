import { Row, Title } from '@/styles/Global'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleProduct from '../Products/SingleProduct'

const PasajNews = () => {
  return (
    <>
      <Row justifyContent='start' padding='50px 0 0 0'>
        <Title fsize='34px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='left'>
          Pasajın Yenileri
        </Title>
      </Row>
      <Row padding='50px 0'>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
        >
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
        </Swiper>
      </Row>
    </>
  )
}

export default PasajNews