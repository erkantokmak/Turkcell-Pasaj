import React from 'react'
import TopHeader from './TopHeader'
import MidHeader from './MidHeader'
import Menu from './Menu'
import { Container } from '@/styles/Global'
import Breadcumb from './Breadcumb'

const HeaderIndex = () => {
    return (
        <>
            <Container>
                <TopHeader />
            </Container>
                <MidHeader />
            <Container>
                <Menu />
            </Container>

        </>
    )
}

export default HeaderIndex