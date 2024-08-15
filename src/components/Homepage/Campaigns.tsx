import { CampaignImage, Column, ImageWrapper, Row, Title } from '@/styles/Global'
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
            <Row padding='0 0 50px 0 ' gap='20px'>
                <Column gap='20px'>
                    <CampaignImage width='780px' height='280px'>
                        <Image src="/images/banners/36aytaksit-kampanyalar-yatay-webx.webp" alt='36 ay taksit kampanyalar'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                    </CampaignImage>
                    <CampaignImage width='780px' height='280px'>
                        <Image src="/images/banners/pac-jbl--yatay-web.webp" alt='Jbl Kampanya'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill  />
                    </CampaignImage>
                </Column>
                <Column>
                    <ImageWrapper width='380px' height='580px'>
                        <Image src="/images/banners/hk30k-Kampanyalar-Dikey.webp" alt='HK30K Kampanyalar'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  fill />
                    </ImageWrapper>
                </Column>
            </Row>
        </>
    )
}

export default Campaigns