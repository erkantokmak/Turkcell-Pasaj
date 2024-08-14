import { Column, ImageWrapper, Row, Title, YellowButton } from '@/styles/Global'
import { BannerBg } from '@/styles/Home/HomeStyle'
import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const Banner = () => {
    return (
        <>
            <BannerBg>
                <Row justifyContent='space-between' gap='10px'>
                    <Column xs={12} md={4} lg={4}>
                        <ImageWrapper width='222px' height='150px'>
                            <Image src="/images/banners/home-banner.webp" alt="banner" fill objectFit='contain' />
                        </ImageWrapper>
                    </Column>
                    <Column xs={12} md={4} lg={4}>
                        <Title fsize='24px' fcolor='#fff'>
                            Turkcell Faturana Ek Alabileceğin Cihazlar
                        </Title>
                    </Column>
                    <Column xs={12} md={4} lg={4}>
                        <YellowButton>
                            İncele
                            <FaChevronRight />
                        </YellowButton>
                    </Column>
                </Row>
            </BannerBg>
        </>
    )
}

export default Banner