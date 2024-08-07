import { Column, ImageWrapper, Row, StyledHr, Title } from '@/styles/Global'
import { ColoredInfo, FavIcon, PriceSection, ProductContent, ProductTag, ProductWrapper } from '@/styles/Products/SingleProduct'
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Rating } from '@smastrom/react-rating'
import { Pagination } from 'swiper/modules'
import { Product } from '@/types/product'

type SingleProductProps = {
    product: Product
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    return (
        <ProductWrapper>
            <ProductContent>
                {
                    product?.bestSeller && (
                        <ProductTag fsize='12px' fcolor='#fff' bgColor='#00e90a'>Çok Satanlar</ProductTag>
                    )
                }
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
                        {
                            product?.image.map((image, index)=> (
                                <SwiperSlide key={index}>
                                    <ImageWrapper width='248px' height='186px'>
                                        <Image src={`/images/products/${image.imgUrl}`} layout='fill' objectFit='contain' alt='Product Image' />
                                    </ImageWrapper>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </Row>

                <Title fsize='18px' fcolor='#253342' fweight='700' lineHeight='1.22' textAlign='start'>
                    {product?.name}
                </Title>
                <Row justifyContent='flex-start' padding='15px 0'>
                    <Rating
                        style={{ maxWidth: 70 }}
                        value={5}
                        items={5}
                        readOnly
                    />
                    <Title fsize='10px' fcolor='#253342' fweight='500' lineHeight='1' textAlign='start' margin='0 0 0 5px'>
                        {product?.rating}
                    </Title>
                </Row>
                <Row gap='5px' justifyContent='flex-start'>
                    {
                        product?.shoppingCredit && (
                            <ColoredInfo fsize='9px' bgColor='#00e90a1a' fcolor='#5f6b76' >
                                Faturana Ek 36 Taksit
                            </ColoredInfo>
                        )
                    }
                    {
                        product?.freeShipping && (
                            <ColoredInfo fsize='9px' bgColor='#E5F8FF' fcolor='#5f6b76'>
                                Ücretsiz Kargo
                            </ColoredInfo>
                        )
                    }
                    {
                        product?.fastDelivery && (
                            <ColoredInfo fsize='9px' bgColor='#FDF7E7' fcolor='#5f6b76'>
                                Hızlı Gönderim
                            </ColoredInfo>
                        )
                    }
                </Row>
            </ProductContent>
            <PriceSection>
                {
                    product?.discountPercentage > 0 ? (
                        <Title fsize='18px' fcolor='#2855AC' fweight='700' lineHeight='1' textAlign='start'>
                            {product?.price * ((100 - product?.discountPercentage) / 100)}
                        </Title>
                    ) : (
                        <Title fsize='18px' fcolor='#2855AC' fweight='700' lineHeight='1' textAlign='start'>
                            {product?.price}
                        </Title>
                    )
                }
                <Row gap='5px'>
                    {
                        product?.discountPercentage > 0 ? (
                            <Title className='text-line' fsize='12px' fcolor='#5F6B7666' fweight='700' >
                                {product?.price}
                            </Title>
                        ) : <Title></Title>
                    }
                    {
                        product?.discountPercentage > 0 && (
                            <Title fsize='12px' fcolor='#00BAFC' fweight='700' >
                                {product.price * (product.discountPercentage / 100)} TL indirim
                            </Title>
                        )
                    }
                </Row>
                {
                    product?.discountPercentage > 0 && (
                        <Title fsize='10px' fcolor='#29C32E' fweight='700' lineHeight='1'>
                            Son 30 Günün en düşük fiyatı!
                        </Title>
                    )
                }
            </PriceSection>
        </ProductWrapper >
    )
}

export default SingleProduct