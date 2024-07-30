import { FooterTitle, LanguageSelect } from '@/styles/Footer/FooterStyle'
import { Row, SocialIcon, StyledHr, Title } from '@/styles/Global'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const FooterBottom = () => {
  return (
    <>
    <StyledHr />
    <Row padding='30px 0px' justifyContent='space-between'>
      <Row>
        <LanguageSelect className='active'>
          Türkçe
        </LanguageSelect>
        <LanguageSelect>
          English
        </LanguageSelect>
        <LanguageSelect
        >عربى
        </LanguageSelect>
        <LanguageSelect>
          русский
        </LanguageSelect>
      </Row>
      <Row gap='35px' alignItems='center' justifyContent='space-between'>
     <Title fsize='1rem' fcolor='#fff' fweight='700'>
          Bizi Takip Edin
     </Title>
   
        <Row gap='4px'>
          <SocialIcon href="#">
            <FaXTwitter />
          </SocialIcon>
          <SocialIcon href="#">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="#">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#">
            <FaYoutube />
          </SocialIcon>
          <SocialIcon href="#">
            <FaLinkedinIn />
          </SocialIcon>
        </Row>
      </Row>
    </Row>
    </>
  )
}

export default FooterBottom