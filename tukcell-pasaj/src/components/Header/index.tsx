import React from 'react'
import TopHeader from './TopHeader'
import MidHeader from './MidHeader'
import Menu from './Menu'
import { Container } from '@/styles/Global'

const index = () => {
    return (
        <>
            <Container>
                <TopHeader />
                <MidHeader />
                <Menu />
            </Container>

        </>
    )
}

export default index