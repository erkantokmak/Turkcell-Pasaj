import { Column, ImageWrapper, Row, Title } from '@/styles/Global'
import Image from 'next/image'
import React from 'react'

const Campaigns = () => {
    return (
        <>
            <Row justifyContent='start' padding='50px 0 30px 0'>
                <Title fsize='34px' textAlign='left'>
                    Kampanyalar
                </Title>
            </Row>
            <Row padding='0 0 50px 0 '>
                <Column gap='20px'>
                    <ImageWrapper width='780px' height='280px'>
                        <Image src="/images/banners/36aytaksit-kampanyalar-yatay-webx.webp" alt='36 ay taksit kampanyalar' fill objectFit='contain' />
                    </ImageWrapper>
                    <ImageWrapper width='780px' height='280px'>
                        <Image src="/images/banners/pac-jbl--yatay-web.webp" alt='Jbl Kampanya' fill objectFit='contain' />
                    </ImageWrapper>
                </Column>
                <Column>
                    <ImageWrapper width='380px' height='580px'>
                        <Image src="/images/banners/hk30k-Kampanyalar-Dikey.webp" alt='HK30K Kampanyalar'  fill objectFit='contain'/>
                    </ImageWrapper>
                </Column>
            </Row>
        </>
    )
}

export default Campaigns