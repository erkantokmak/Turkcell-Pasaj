import { Column, Container, ImageWrapper, Row, Title, YellowButton } from '@/styles/Global';
import { BasketButton, BasketCount, IconWrapper, LoginButton, RegisterButton, SearchBar, SearchWrapper } from '@/styles/Header/HeaderStyle';
import Image from 'next/image'
import { FaAngleDown, FaRegUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";
import React, { useState } from 'react'
import { AccountContainer, AccountItem, AccountWrapper, AuthContainer, AuthWrapper } from '@/styles/Header/AuthStyle';
import { signOut, useSession } from 'next-auth/react';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import { useRouter } from 'next/router';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchCartById } from '@/lib/server';
import { StyledLink } from '@/styles/Products/DetailPage';



const MidHeader = () => {
    const { data: session } = useSession()
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isRegister, setIsRegister] = useState<boolean>(false);

    const router = useRouter();

    const { data: cart } = useQuery({
        queryKey: ['cart'],
        queryFn: () => fetchCartById((session?.user as { id: string })?.id),
    })

    return (
        <>
            <Container>
                <Row alignItems='center' justifyContent='space-evenly' margin='0 0 10px 0'>
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
                        />
                    </SearchWrapper>
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
                    <BasketButton onClick={() => router.push("/cart")}>
                        <Row gap='10px'>
                            <FaShoppingCart />
                            Sepet
                        </Row>
                        <BasketCount>{cart?.length || "0"}</BasketCount>
                    </BasketButton>
                </Row>
            </Container>
            <AuthContainer>
                {
                    isModalOpen && (
                        <AuthWrapper>
                            <Container>
                                <Row alignItems='flex-start' margin='30px 0 '>
                                    <Column width='50%'>
                                        <ImageWrapper width='348px' height='203px'>
                                            <Image src="/images/login-image.webp" alt='Login Image' fill objectFit='contain' />
                                        </ImageWrapper>
                                        <Title fsize='24px' fcolor='#253342' fweight='700' margin='20px 0 0 0' textAlign='start'>Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!</Title>
                                        <Title fsize='14px' fcolor='#253342' fweight='500' margin='20px 0 0 0' textAlign='start'>Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz ürünler için bilgilendirmelerden, siparişlerinizle ilgili tüm işlemlere ve daha da fazlasına kolaylıkla erişim sağlayabilirsiniz.</Title>
                                    </Column>
                                    <Column width='50%' alignItems='flex-start'>
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
        </>
    )
}

export default MidHeader