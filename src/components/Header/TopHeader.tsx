import { Column, Container, ImageWrapper, Row } from '@/styles/Global'
import { MiniMenu, MobileMenu, NavLink, NavWrapper } from '@/styles/Header/HeaderStyle'
import { StyledLink } from '@/styles/Products/DetailPage';
import Image from 'next/image';
import { useRouter } from 'next/router';


const TopHeader = () => {
    const router = useRouter();
    return (
        <>
            <MiniMenu>
                <Container>
                    <Row padding='17px 0px'>
                        <Column xs={12} md={2} alignItems="flex-start" justifyContent='center'>
                            <NavLink href="/">
                                <Row margin='0px 10px 0px 0px'>
                                    <ImageWrapper width='32px' height='32px'>
                                        <Image src="/images/mini-logo.png" alt="logo" fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </ImageWrapper>
                                    turkcell.com.tr
                                </Row>
                            </NavLink>
                        </Column>
                        <Column xs={12} md={10} alignItems="flex-end" justifyContent='center'>
                            <NavWrapper>
                                <NavLink href="/favorites">Favorilerim</NavLink>
                                <NavLink href="/campaigns">Kampanyalar</NavLink>
                                {router.pathname === '/' &&
                                    <>
                                        <NavLink href="#">Yardım</NavLink>
                                        <NavLink href="#">Neden Pasaj?</NavLink>
                                        <NavLink href="#">Pasaj Blog</NavLink>
                                        <NavLink href="#">Sipariş Sorgulama</NavLink>
                                    </>
                                }
                            </NavWrapper>
                        </Column>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </MiniMenu>
            <MobileMenu>
                <Row justifyContent='flex-end' margin='10px 0 0 0'>
                    <Column xs={12} alignItems='flex-end'>
                    <NavWrapper>
                                <NavLink href="/favorites">Favorilerim</NavLink>
                                <NavLink href="/campaigns">Kampanyalar</NavLink>
                    </NavWrapper>
                    </Column>
                </Row>
            </MobileMenu>

        </>
    )
}

export default TopHeader