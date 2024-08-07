import React from 'react'
import TopHeader from './TopHeader'
import MidHeader from './MidHeader'
import Menu from './Menu'
import { Container } from '@/styles/Global'
import Breadcumb from './Breadcumb'

const index = () => {
    return (
        <>
            <Container>
                <TopHeader />
                <MidHeader />
                <Menu />
                <Breadcumb />
            </Container>

        </>
    )
}

export default index