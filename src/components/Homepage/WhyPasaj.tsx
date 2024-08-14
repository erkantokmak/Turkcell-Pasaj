import { BackgroundColor, Column, Container, Row, Title } from '@/styles/Global'
import { WhyIcon } from '@/styles/Home/HomeStyle'
import React from 'react'
import { FaCreditCard, FaTruckMoving } from 'react-icons/fa6'
import { GiReturnArrow } from 'react-icons/gi'

const WhyPasaj = () => {
    return (
        <>
            <BackgroundColor bgColor='#eff2f5'>
                <Container>

                    <Row padding='100px 0 0 0'>
                        <Column>
                            <Row margin='0 0 20px 0'>
                                <Title fsize='34px' >
                                    Neden Pasaj?
                                </Title>
                            </Row>
                            <Row margin='0 0 20px 0'>
                                <Title fsize='18px'>
                                    Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve Turkcell Pasaj ayrıcalığıyla keşfedin.
                                </Title>
                            </Row>
                        </Column>
                    </Row>
                    <Row padding='0 0 100px 0'>
                        <Column justifyContent='flex-start'>
                            <WhyIcon>
                                <FaTruckMoving />
                            </WhyIcon>
                            <Title fsize='26px' fcolor='#253342' margin='0 0 12px 0' fweight='700'>
                                Ücretsiz Kargo
                            </Title>
                            <Title fsize='16px' fcolor='#253342'>
                                Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla gelin ve mağazadan teslim alın.
                            </Title>
                        </Column>
                        <Column>
                            <WhyIcon>
                                <FaCreditCard />
                            </WhyIcon>
                            <Title fsize='26px' fcolor='#253342' margin='0 0 12px 0' fweight='700'>
                                Esnek Ödeme Seçenekleri
                            </Title>
                            <Title fsize='16px' fcolor='#253342'>
                                Alışverişlerinizi ister kredi kartınıza taksitlendirin ister Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.
                            </Title>
                        </Column>
                        <Column>
                            <WhyIcon>
                                <GiReturnArrow />
                            </WhyIcon>
                            <Title fsize='26px' fcolor='#253342' margin='0 0 12px 0' fweight='700'>
                                Ücretsiz İptal ve İade
                            </Title>
                            <Title fsize='16px' fcolor='#253342'>
                                Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade edebilirsiniz.
                            </Title>
                        </Column>
                    </Row>
                </Container>
            </BackgroundColor>
        </>
    )
}

export default WhyPasaj