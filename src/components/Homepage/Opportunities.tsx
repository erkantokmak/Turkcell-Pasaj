import { ImageWrapper, Row, Title } from '@/styles/Global'
import { StyledSwiper, StyledSwiperSlide } from '@/styles/Slider'
import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Opportunities = () => {

    const sliders = [
        {
            id: '1',
            image: '/images/banners/pacunku-kfa.webp'
        },
        {
            id: '2',
            image: '/images/banners/r1-spor-voit-KF.webp'
        },
        {
            id: '3',
            image: '/images/banners/pmf-kf.webp'
        },
        {
            id: '4',
            image: '/images/banners/go4-KF.webp'
        },
        {
            id: '5',
            image: '/images/banners/cfgo1305-KF.webp'
        },
        {
            id: '6',
            image: '/images/banners/Herschel-kacirilmayacak-firsatlar.webp'
        },
        {
            id: '7',
            image: '/images/banners/r1-tvpluspro-KF.webp'
        },
        {
            id: '8',
            image: '/images/banners/thermos-KF.webp'
        }
    ]

    return (
        <>
            <Row justifyContent='start' padding='50px 0 36px 0'>
                <Title fsize='34px'>
                    Kaçırılmayacak Fırsatlar
                </Title>
            </Row>
            <Row padding='0 0 50px 0'>
                <StyledSwiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={false}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        }
                    }}
                >
                    {
                        sliders.map(slider => (
                            <StyledSwiperSlide key={slider.id}>
                                <ImageWrapper width='280px' height='420px' radius='.625rem'>
                                    <Image src={slider.image} alt='slider' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill style={{objectFit: 'contain'}} />
                                </ImageWrapper>
                            </StyledSwiperSlide>
                        ))
                    }
                </StyledSwiper>
            </Row>
        </>
    )
}

export default Opportunities