import { Container, Row, Title } from '@/styles/Global'
import { BreadCrumb, NavLink } from '@/styles/Header/HeaderStyle'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcumb = () => {
    const router = useRouter()

    return (
        <>
            <BreadCrumb>
                <Container>

                    {router.pathname !== '/' && (
                        <Row justifyContent='flex-start' alignItems='center'>
                            <NavLink href='/'>Anasayfa</NavLink>
                            <Title fcolor='#ffc900' fsize='13px' fweight='700' margin='0 3px'>{'>'}</Title>
                            {
                                router.pathname === '/category/[...slug]' && (
                                    <NavLink href='/category/cep-telefonu'>Ürünler</NavLink>
                                )
                            }
                            {
                                router.pathname === '/product/[...slug]' && (
                                    <>
                                    <Title fcolor='#ffc900' fsize='13px' fweight='700' margin='0 3px'>{'>'}</Title>
                                    <NavLink href='/category/cep-telefonu'>Ürünler</NavLink>
                                    <Title fcolor='#ffc900' fsize='13px' fweight='700' margin='0 3px'>{'>'}</Title>
                                    <NavLink href='/product/1'>Ürün Detay</NavLink>
                                    </>
                                )
                            }

                        </Row>
                    )
                    }
                </Container>
            </BreadCrumb>
        </>
    )
}

export default Breadcumb