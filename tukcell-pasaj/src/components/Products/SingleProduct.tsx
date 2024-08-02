import { Column, ImageWrapper, Row, StyledHr, Title } from '@/styles/Global'
import { ColoredInfo, FavIcon, PriceSection, ProductContent, ProductTag, ProductWrapper } from '@/styles/Products/SingleProduct'
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Rating } from '@smastrom/react-rating'
import { Pagination } from 'swiper/modules'

const SingleProduct = () => {
    return (
        <ProductWrapper>
            <ProductContent>
                <ProductTag fsize='12px' fcolor='#fff' bgColor='#00e90a'>Çok Satanlar</ProductTag>
                <Row justifyContent='flex-end'>
                    <FavIcon>
                        <FaRegHeart />
                    </FavIcon>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <ImageWrapper width='248px' height='186px'>
                                <Image src='/images/products/iphone-15-pro-max.webp' layout='fill' objectFit='contain' alt='Product Image' />
                            </ImageWrapper>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImageWrapper width='248px' height='186px'>
                                <Image src='/images/products/iphone-15-pro-max1.webp' layout='fill' objectFit='contain' alt='Product Image' />
                            </ImageWrapper>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImageWrapper width='248px' height='186px'>
                                <Image src='/images/products/iphone-15-pro-max2.webp' layout='fill' objectFit='contain' alt='Product Image' />
                            </ImageWrapper>
                        </SwiperSlide>
                    </Swiper>

                </Row>

                <Title fsize='18px' fcolor='#253342' fweight='700' lineHeight='1.22' textAlign='start'>
                    Iphone 15 Pro Max
                </Title>
                <Row justifyContent='flex-start' padding='15px 0'>
                    <Rating
                        style={{ maxWidth: 70 }}
                        value={5}
                        items={5}
                        readOnly
                    />
                    <Title fsize='10px' fcolor='#253342' fweight='500' lineHeight='1' textAlign='start' margin='0 0 0 5px'>
                        4.7
                    </Title>
                </Row>
                <Row gap='5px' justifyContent='flex-start'>
                    <ColoredInfo fsize='9px' bgColor='#00e90a1a' fcolor='#5f6b76' >
                        Faturana Ek 36 Taksit
                    </ColoredInfo>
                    <ColoredInfo fsize='9px' bgColor='#E5F8FF' fcolor='#5f6b76'>
                        Info 1
                    </ColoredInfo>
                    <ColoredInfo fsize='9px' bgColor='#FDF7E7' fcolor='#5f6b76'>
                        Info 1
                    </ColoredInfo>
                </Row>
            </ProductContent>
            <PriceSection>
                <Title fsize='18px' fcolor='#2855AC' fweight='700' lineHeight='1' textAlign='start'>
                    12.999,99 TL
                </Title>
                <Row gap='5px'>
                    <Title className='text-line' fsize='12px' fcolor='#5F6B7666' fweight='700' >
                        15.999,99 TL
                    </Title>
                    <Title fsize='12px' fcolor='#00BAFC' fweight='700' >
                        1000 TL indirim
                    </Title>
                </Row>
                <Title fsize='10px' fcolor='#29C32E' fweight='700' lineHeight='1'>
                    Son 30 Günün en düşük fiyatı!
                </Title>
            </PriceSection>
        </ProductWrapper >
    )
}

export default SingleProduct