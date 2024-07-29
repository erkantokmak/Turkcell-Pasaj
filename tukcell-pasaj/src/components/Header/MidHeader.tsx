import { ImageWrapper, Row } from '@/styles/Global';
import { BasketButton, BasketCount, IconWrapper, LoginButton, RegisterButton, SearchBar, SearchWrapper } from '@/styles/Header/HeaderStyle';
import Image from 'next/image'
import { FaAngleDown, FaRegUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";
import React from 'react'

const MidHeader = () => {
    const user: boolean = false;
    return (
        <>
            <Row alignItems='center' justifyContent='space-evenly' margin='0 0 10px 0'>
                <ImageWrapper width='116px' height='46px'>
                    <Image src="/images/logo.webp" alt="logo" fill objectFit='contain' />
                </ImageWrapper>
                <SearchWrapper>
                    <IconWrapper>
                        <FaSearch />
                    </IconWrapper>
                    <SearchBar
                        placeholder="Ürün,marka veya kategori ara"
                    />
                </SearchWrapper>
                {user ?
                    <RegisterButton /> :
                    <LoginButton>
                        <Row alignItems='center' gap='5px'>
                            <FaRegUserCircle />
                            Giriş Yap
                            <FaAngleDown />
                        </Row>
                    </LoginButton>
                }
                <BasketButton>
                    <Row gap='10px'>
                        <FaShoppingCart />
                        Sepet
                    </Row>
                    <BasketCount>0</BasketCount>
                </BasketButton>
            </Row>
        </>
    )
}

export default MidHeader