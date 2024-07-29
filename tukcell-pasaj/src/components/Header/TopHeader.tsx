import { Column, Container, ImageWrapper, Row } from '@/styles/Global'
import { NavLink, NavWrapper } from '@/styles/Header/HeaderStyle'
import Image from 'next/image';
import { useRouter } from 'next/router';


const TopHeader = () => {
    const router = useRouter();
    return (
        <Container>
            <Row padding='17px 0px'>
                <Column alignItems="flex-start" justifyContent='center'>
                    <NavLink href="/">
                        <Row margin='0px 10px 0px 0px'>
                            <ImageWrapper width='32px' height='32px'>
                                <Image src="/images/mini-logo.png" alt="logo" fill objectFit='contain' />
                            </ImageWrapper>
                            turkcell.com.tr
                        </Row>
                    </NavLink>
                </Column>
                <Column alignItems="flex-end" justifyContent='center'>
                    <NavWrapper>
                        <NavLink href="#">Favorilerim</NavLink>
                        <NavLink href="#">Kampanyalar</NavLink>
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
    )
}

export default TopHeader