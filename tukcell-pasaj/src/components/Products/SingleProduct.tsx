import { Title } from '@/styles/Global'
import { ProductWrapper } from '@/styles/Products/SingleProduct'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const SingleProduct = () => {
    return (
        <ProductWrapper>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
            <Title fsize='18px' fcolor='#253342'>
                Product Title
            </Title>
            
        </ProductWrapper>
    )
}

export default SingleProduct