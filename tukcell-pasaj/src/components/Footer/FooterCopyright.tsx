import { FooterNavLink } from '@/styles/Footer/FooterStyle'
import { Column, ImageWrapper, Row, Title } from '@/styles/Global'
import Image from 'next/image'
import React from 'react'

const FooterCopyright = () => {
  return (
     <>
    <Row justifyContent='space-between' alignItems='center' padding='30px 0'>
      <Column xs={12} md={6}>
        <Row gap='15px'>
          <FooterNavLink href="#" >
            Gizlilik ve Güvenlik
          </FooterNavLink>
          <FooterNavLink href="#" >
            Tarife Karşılaştırma
          </FooterNavLink>
        </Row>
      </Column>
      <Column xs={12} md={6}>
        <Row gap='15px'>
          <ImageWrapper width='40px' height='40px'>
            <Image src="/images/guven-damgasi-icon.webp" alt="Güven Damgası" fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
          <ImageWrapper width='40px' height='40px'>
            <Image src="/images/etbis-qr-code.webp" alt="ETBİS QR Code" fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </ImageWrapper>
          <Title fsize='14px' fcolor='#FFFFFF80'>
            © 2024 Turkcell
          </Title>
        </Row>
      </Column>
    </Row>
    </>
  )
}

export default FooterCopyright