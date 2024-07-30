import { FooterNavLink } from '@/styles/Footer/FooterStyle'
import { ImageWrapper, Row, Title } from '@/styles/Global'
import Image from 'next/image'
import React from 'react'

const FooterCopyright = () => {
  return (
    <Row justifyContent='space-between' alignItems='center' padding='30px 0'>
      <Row gap='15px'>
        <FooterNavLink href="#" >
          Gizlilik ve Güvenlik
        </FooterNavLink>
        <FooterNavLink href="#" >
          Tarife Karşılaştırma 
        </FooterNavLink>
      </Row>
      <Row gap='15px'>
        <ImageWrapper width='40px' height='40px'>
          <Image src="/images/guven-damgasi-icon.webp" alt="Güven Damgası" fill objectFit='contain' />
        </ImageWrapper>
        <ImageWrapper  width='40px' height='40px'>
          <Image src="/images/etbis-qr-code.webp" alt="ETBİS QR Code" fill objectFit='contain' />
        </ImageWrapper>
        <Title fsize='14px' fcolor='#FFFFFF80'>
        © 2024 Turkcell
        </Title>
      </Row>
    </Row>
  )
}

export default FooterCopyright