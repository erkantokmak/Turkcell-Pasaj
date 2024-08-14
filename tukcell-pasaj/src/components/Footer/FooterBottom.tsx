import { FooterTitle, LanguageSelect } from '@/styles/Footer/FooterStyle'
import { Column, Row, SocialIcon, StyledHr, Title } from '@/styles/Global'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const FooterBottom = () => {
  return (
    <>
      <StyledHr />
      <Row padding='30px 0px' justifyContent='space-between'>
        <Column xs={12} md={6} lg={6} justifyContent='flex-start'>
          <Row justifyContent='flex-start'>
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
        </Column>
        <Column xs={12} md={6} lg={6} justifyContent='flex-end'>
          <Row gap='35px' alignItems='center' justifyContent='flex-end'>
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
        </Column>
      </Row >
    </>
  )
}

export default FooterBottom