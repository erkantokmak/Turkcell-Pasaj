import { Column, Container, ImageWrapper, Row, Title, YellowButton } from '@/styles/Global';
import { BasketButton, BasketCount, IconWrapper, LoginButton, RegisterButton, SearchBar, SearchModal, SearchWrapper } from '@/styles/Header/HeaderStyle';
import Image from 'next/image'
import { FaAngleDown, FaRegUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";
import React, { useState } from 'react'
import { AccountContainer, AccountItem, AccountWrapper, AuthContainer, AuthWrapper } from '@/styles/Header/AuthStyle';
import { signOut, useSession } from 'next-auth/react';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import { useRouter } from 'next/router';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchAllProducts, fetchCartById } from '@/lib/server';
import { ModalCloseButton, StyledLink } from '@/styles/Products/DetailPage';
import { Product } from '@/types/product';
import SingleProduct from '../Products/SingleProduct';



const MidHeader = () => {
    const { data: session } = useSession()
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const id = (session?.user as { id: string })?.id;
    const router = useRouter();

    const { data: cart } = useQuery({
        queryKey: ['cart'],
        queryFn: () => fetchCartById((session?.user as { id: string })?.id),
        enabled: !!id
    })

    const { data: products} = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts,
    })

    const filteredData = products ? products.filter((product: Product) => product.name.toLowerCase() === searchValue.toLowerCase() || product.category.toLowerCase() === searchValue.toLowerCase() || product.brand.toLowerCase() === searchValue.toLowerCase()) : [];

    return (
        <>
        <AuthContainer>
                {
                    isModalOpen && (
                        <AuthWrapper>
                            <Container>
                                <Row justifyContent='flex-end' margin='15px 0 0 0'>
                                    <ModalCloseButton onClick={() => setModalOpen(!isModalOpen)}>&times;</ModalCloseButton>
                                </Row>
                                <Row alignItems='flex-start' margin='30px 0 '>
                                    <Column xs={12} md={6}>
                                        <ImageWrapper width='348px' height='203px'>
                                            <Image src="/images/login-image.webp" alt='Login Image' fill objectFit='contain' />
                                        </ImageWrapper>
                                        <Title fsize='24px' fcolor='#253342' fweight='700' margin='20px 0 0 0' textAlign='start'>Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!</Title>
                                        <Title fsize='14px' fcolor='#253342' fweight='500' margin='20px 0 0 0' textAlign='start'>Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz ürünler için bilgilendirmelerden, siparişlerinizle ilgili tüm işlemlere ve daha da fazlasına kolaylıkla erişim sağlayabilirsiniz.</Title>
                                    </Column>
                                    <Column xs={12} md={6} alignItems='flex-start'>
                                        <Title fsize='24px' fcolor='#253342' fweight='700' margin='0 0 20px 0' textAlign='start'>Giriş</Title>
                                        <Title fsize='14px' fcolor='#253342' fweight='500' margin='0 0 20px 0' textAlign='start'>Size özel ödeme avantajları ve size özel tekliflerden faydalanmak için Giriş Yap/Üye Ol seçeneği ile devam edebilirsiniz.</Title>
                                        <YellowButton display='block' width='100%'><Title fsize='24px' onClick={() => setIsLogin(!isLogin)}>Giriş Yap / Üye Ol</Title></YellowButton>
                                        {
                                            isLogin && (session ? (
                                                <>
                                                    <YellowButton onClick={() => signOut()}>Çıkış Yap</YellowButton>
                                                </>
                                            ) : (
                                                <Row alignItems='flex-start' justifyContent='center' margin='20px 0 0 0'>
                                                    <Login isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
                                                    <SignUp />
                                                </Row>
                                            ))
                                        }
                                    </Column>
                                </Row>
                            </Container>
                        </AuthWrapper>
                    )
                }
            </AuthContainer>
            <Container>
                <Row alignItems='center' justifyContent='space-evenly' margin='0 0 10px 0' gap='10px'>
                    <Column sm={12} md={12} lg={8} alignItems='stretch'>
                    <Row>
                    <StyledLink href="/">
                        <ImageWrapper width='116px' height='46px'>
                            <Image src="/images/logo.webp" alt="logo" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit:'contain'}} />
                        </ImageWrapper>
                    </StyledLink>
                    <SearchWrapper>
                        <IconWrapper>
                            <FaSearch />
                        </IconWrapper>
                        <SearchBar
                            type='text'
                            placeholder="Ürün,marka veya kategori ara"
                            onFocus={() => setIsSearch(true)}
                            onBlur={() => setIsSearch(false)}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            />
                            {isSearch && (
                                <SearchModal>
                                    <Row margin='20px 0 20px 0'>
                                {
                                    filteredData && filteredData.length > 0 && filteredData.slice(0,2).map((product: Product, index: number) => (
                                            <Row key={index}>
                                            <SingleProduct product={product}  />
                                            </Row>
                                    ))
                                }
                                </Row>
                                <Row>
                                    <YellowButton><StyledLink href='/category/cep-telefonu'><Title fsize='16px' fweight='700'>Tüm Ürünleri Gör</Title></StyledLink></YellowButton>
                                </Row>
                                </SearchModal>
                            )}
                    </SearchWrapper>
                            </Row>
                    </Column>
                    <Column sm={6} md={12} lg={2} alignItems=''>
                    {session ?
                        <>
                            <RegisterButton onClick={() => setIsRegister(!isRegister)}><Row alignItems='center' gap='5px'>
                                <FaRegUserCircle />
                                Hesabım
                                <FaAngleDown />
                            </Row>
                                <AccountContainer>
                                    {isRegister && (
                                        <AccountWrapper>
                                            <AccountItem onClick={() => signOut()}>Çıkış Yap</AccountItem>
                                        </AccountWrapper>
                                    )}
                                </AccountContainer></RegisterButton>

                        </> :
                        <LoginButton onClick={() => setModalOpen(!isModalOpen)}>
                            <Row alignItems='center' gap='5px'>
                                <FaRegUserCircle />
                                Giriş Yap
                                <FaAngleDown />
                            </Row>
                        </LoginButton>
                    }
                    </Column>
                    <Column sm={6} md={12} lg={2}>
                    <BasketButton onClick={() => router.push("/cart")}>
                        <Row gap='10px'>
                            <FaShoppingCart />
                            Sepet
                        </Row>
                        <BasketCount>{cart?.length || "0"}</BasketCount>
                    </BasketButton>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default MidHeader