import React from 'react'
import FooterMenu from './FooterMenu'
import FooterBottom from './FooterBottom'
import FooterBrands from './FooterBrands'
import FooterCopyright from './FooterCopyright'
import { Container } from '@/styles/Global'
import { Footer } from '@/styles/Footer/FooterStyle'

const FooterIndex = () => {
    return (
        <>
            <Footer>
                <Container>
                    <FooterMenu />
                    <FooterBottom />
                    <FooterBrands />
                    <FooterCopyright />
                </Container>
            </Footer>
        </>
    )
}

export default FooterIndex