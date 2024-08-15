import { Row, Title } from '@/styles/Global'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleProduct from '../Products/SingleProduct'
import { Product } from '@/types/product'

type PasajNewsProps = {
  data: Product[]
}

const PasajNews: React.FC<PasajNewsProps> = ({data}) => {
  return (
    <>
      <Row justifyContent='start' padding='50px 0 0 0'>
        <Title fsize='34px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='left'>
          Pasajın Yenileri
        </Title>
      </Row>
      <Row padding='40px 0'>
        <Swiper
          spaceBetween={10}
          breakpoints={
            {
              0: {
                slidesPerView: 1.5,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10
              }
            }
          }
        >
          {
            data && data.length > 0 && data.slice(0,4)
            .map((product: Product, index: number) => (
              <SwiperSlide key={index}>
                <Row padding='10px 0'>
                  <SingleProduct product={product} />
              </Row>
                </SwiperSlide>
              ))}
        </Swiper>
      </Row>
    </>
  )
}

export default PasajNews