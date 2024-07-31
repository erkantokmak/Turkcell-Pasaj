import { ImageWrapper, Row, Title } from '@/styles/Global'
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
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={false}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {
                        sliders.map(slider => (
                            <SwiperSlide key={slider.id}>
                                <ImageWrapper width='280px' height='420px' radius='.625rem'>
                                    <Image src={slider.image} alt='slider' fill objectFit='contain' />
                                </ImageWrapper>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Row>
        </>
    )
}

export default Opportunities