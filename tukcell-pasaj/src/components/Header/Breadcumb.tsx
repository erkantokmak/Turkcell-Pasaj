import { Row, Title } from '@/styles/Global'
import { NavLink } from '@/styles/Header/HeaderStyle'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcumb = () => {
    const router = useRouter()

    return (
        <>
        {router.pathname !== '/' && (
           <Row justifyContent='flex-start' alignItems='center'>
            <NavLink href='/'>Anasayfa</NavLink>
            /
            <NavLink href={router.pathname}>{router.pathname.split('/').pop()}</NavLink>
           </Row>
        )
        }
        </>
    )
}

export default Breadcumb