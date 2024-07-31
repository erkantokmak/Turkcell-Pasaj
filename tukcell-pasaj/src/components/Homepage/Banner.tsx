import { ImageWrapper, Row, Title, YellowButton } from '@/styles/Global'
import { BannerBg } from '@/styles/Home/HomeStyle'
import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const Banner = () => {
    return (
        <BannerBg>
            <Row justifyContent='space-between'>
                <ImageWrapper width='222px' height='150px'>
                    <Image src="/images/banners/home-banner.webp" alt="banner" fill objectFit='contain' />
                </ImageWrapper>
                <Title fsize='24px' fcolor='#fff'>
                    Turkcell Faturana Ek Alabileceğin Cihazlar
                </Title>
                <YellowButton>
                    İncele
                    <FaChevronRight />
                </YellowButton>
            </Row>
        </BannerBg>
    )
}

export default Banner