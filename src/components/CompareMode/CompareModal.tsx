import { useCompareStore } from '@/lib/compareStore';
import { CompareItem, CompareModalContainer, CompareModalContent } from '@/styles/Compare';
import { Column, Container, ImageWrapper, Row, Title, YellowButton } from '@/styles/Global';
import { BlueButton, ModalCloseButton } from '@/styles/Products/DetailPage';
import { ProductTag } from '@/styles/Products/SingleProduct';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const CompareModal = () => {
    const { selectedProducts, clearProducts, toggleModal } = useCompareStore();
    const removeProduct = useCompareStore((state) => state.removeProduct);
    const router = useRouter();

    const handleCompare = () => {
        toggleModal();
        router.push('/compare');
    };
    return (
        <>
            <CompareModalContainer>
                <CompareModalContent>
                    <Container>
                        <Row gap='20px'>
                            <CompareItem>
                                <Column>
                                    <Row>
                                        <ProductTag bgColor='#8e9fad' color='#fff' fsize='1rem'>1</ProductTag>

                                        {
                                            selectedProducts[0] ? (
                                                <>
                                                    <ModalCloseButton onClick={() => removeProduct(String(selectedProducts[0]?.id))} >&times;</ModalCloseButton>
                                                    <ImageWrapper width='100px' height='100px'>
                                                        <Image src={`/images/products/${selectedProducts[0]?.image[0].imgUrl}`} alt='product' fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: 'contain'}} />
                                                    </ImageWrapper>
                                                    <Title>{selectedProducts[0]?.name}</Title>
                                                </>
                                            ) : (
                                                <>
                                                    <ImageWrapper width='100px' height='100px'>
                                                        <Image src={`/images/def_tel.webp`} alt='product' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                                    </ImageWrapper>
                                                    <Title>Lütfen Listeden Bir Cihaz Seçin.</Title>
                                                </>
                                            )
                                        }
                                    </Row>

                                </Column>
                            </CompareItem>
                            <CompareItem>
                                <Column>
                                    <Row>
                                        <ProductTag bgColor='#8e9fad' color='#fff' fsize='1rem'>2</ProductTag>
                                        {
                                            selectedProducts[1] ? (
                                                <>
                                                    <ModalCloseButton onClick={() => removeProduct(String(selectedProducts[1]?.id))} >&times;</ModalCloseButton>
                                                    <ImageWrapper width='100px' height='100px'>
                                                        <Image src={`/images/products/${selectedProducts[1]?.image[0].imgUrl}`} alt='product' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                                    </ImageWrapper>
                                                    <Title>{selectedProducts[1]?.name}</Title>
                                                </>
                                            ) : (
                                                <>
                                                    <ImageWrapper width='100px' height='100px'>
                                                        <Image src={`/images/def_tel.webp`} alt='product' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                                    </ImageWrapper>
                                                    <Title>Lütfen Listeden Bir Cihaz Seçin.</Title>
                                                </>
                                            )
                                        }
                                    </Row>
                                </Column>
                            </CompareItem>
                            <CompareItem>
                                <Column>
                                    <Row>
                                        <ProductTag bgColor='#8e9fad' color='#fff' fsize='1rem'>3</ProductTag>
                                        {
                                            selectedProducts[2] ? (
                                                <>
                                                    <ModalCloseButton onClick={() => removeProduct(String(selectedProducts[2]?.id))} >&times;</ModalCloseButton>
                                                    <ImageWrapper width='100px' height='100px'>
                                                        <Image src={`/images/products/${selectedProducts[2]?.image[0].imgUrl}`} alt='product' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                                    </ImageWrapper>
                                                    <Title>{selectedProducts[2]?.name}</Title>
                                                </>
                                            ) : (
                                                <>
                                                    <ImageWrapper width='100px' height='100px'>
                                                        <Image src={`/images/def_tel.webp`} alt='product' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                                    </ImageWrapper>
                                                    <Title>Lütfen Listeden Bir Cihaz Seçin.</Title>
                                                </>
                                            )
                                        }
                                    </Row>
                                </Column>
                            </CompareItem>
                            <Row gap='20px'>

                                <BlueButton onClick={clearProducts}>Temizle</BlueButton>
                                <YellowButton
                                    onClick={handleCompare}
                                    disabled={selectedProducts.length < 2}
                                >
                                    Karşılaştır
                                </YellowButton>
                            </Row>
                        </Row>

                    </Container>
                </CompareModalContent>
            </CompareModalContainer >
        </>
    )
}

export default CompareModal
