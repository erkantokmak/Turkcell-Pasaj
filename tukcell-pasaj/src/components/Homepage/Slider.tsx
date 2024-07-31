import { Container, ImageWrapper, Row } from '@/styles/Global'
import { SliderBackground, SliderContainer } from '@/styles/Home/Slider'
import Image from 'next/image'
import React, { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = () => {
    const sliders = [
        {
            id: 1,
            image: '/images/sliders/3Taksit-hero-banner-web.webp'
        },
        {
            id: 2,
            image: '/images/sliders/Klima-hero-banner-webx.webp'
        },
        {
            id: 3,
            image: '/images/sliders/pdaf-pasaj-hero.webp'
        },
        {
            id: 4,
            image: '/images/sliders/Sepete-kredi-0-faiz-06-hero-banner-webffd.webp'
        },
        {
            id: 5,
            image: '/images/sliders/Pasaj_Yaz-hero-banner-web.webp'
        },
        {
            id: 6,
            image: '/images/sliders/nsrpr-pasaj-hero.webp'
        },
        {
            id: 7,
            image: '/images/sliders/gwul-pasaj-hero.webp'
        },
        {
            id: 8,
            image: '/images/sliders/AppleWatch-Kordon-hero-banner-web.webp'
        },
        {
            id: 9,
            image: '/images/sliders/Pasaj_fibabanka-heroff-banner-web.webp'
        },
        {
            id: 10,
            image: '/images/sliders/ay2-temmuz-pasaj-herof.webp'
        },
        {
            id: 11,
            image: '/images/sliders/pasaj_paycell-07-hero-banner-web.webp'
        },
        {
            id: 12,
            image: '/images/sliders/bisiklet-pasaj-hero.webp'
        },
        {
            id: 13,
            image: '/images/sliders/Pasajdan-Aldm-iPhone15-hero-banner-web.webp'
        },
        {
            id: 14,
            image: '/images/sliders/Sepete-kredi-0-faiz-SamsoniteCM5-hero-banner-web.webp'
        },
        {
            id: 15,
            image: '/images/sliders/ntrn-pasaj-hero.webp'
        }

    ]

    const [swiper, setSwiper] = useState<string>('/images/sliders/3Taksit-hero-banner-web.webp')
  
    const handleSlide = (swiper: string) => {
        const activeIndex = swiper.activeIndex;
        setSwiper(sliders[activeIndex].image)
    }

    return (

        <SliderContainer>
            <Row>
                <SliderBackground background={swiper} />
                <Container>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={false}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        onSlideChange={handleSlide}
                    >
                        {
                            sliders.map(slider => (
                                <SwiperSlide key={slider.id}>
                                    <ImageWrapper width='1200px' height='550px'>
                                        <Image src={slider.image} alt='slider' fill objectFit='contain' />
                                    </ImageWrapper>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Container>
            </Row>
        </SliderContainer>
    )
}

export default Slider