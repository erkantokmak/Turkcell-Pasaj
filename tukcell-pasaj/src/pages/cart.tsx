import { fetchCartById, updateUserBasket } from '@/lib/server'
import { CartContainer, QuantitiyMinus, QuantityPlus, QuantityValue, SummaryContainer } from '@/styles/Cart/Cart'
import { Column, Container, ImageWrapper, Row, StyledHr, Title, YellowButton } from '@/styles/Global'
import { ColorBox, ModalCloseButton } from '@/styles/Products/DetailPage'
import { CartItem } from '@/types/cart'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CartPage = () => {


    const { data: session } = useSession()
    const id = (session?.user as { id: string })?.id
    const { data: cart } = useQuery({
        queryKey: ['cart'],
        queryFn: () => fetchCartById(id),
        enabled: !!id
    })
    const queryClient = useQueryClient()


    const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

    const handleQuantityChange = (productId: string | number, change: number) => {
        setQuantities(prev => {
            const newQuantity = (prev[productId] || 1) + change
            return {
                ...prev,
                [productId]: newQuantity > 0 ? newQuantity : 1
            }
        })
    }



    const { mutate } = useMutation({
        mutationFn: ({ uid, cart }: { uid: string, cart: CartItem[] }) => updateUserBasket({ uid, cart }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        }
    })

    const handleRemoveFromCart = (productId: string | number) => {
        const updatedCart = cart?.filter((item: CartItem) => item.product.id !== productId);
        mutate({ uid: id, cart: updatedCart || [] });
        toast.success('Ürün sepetten kaldırıldı');
    };


    const totalProductPrice = cart?.reduce((total: number, item: CartItem) => {
        const quantity = quantities[item.product.id] || 1
        return total + item.product.price * quantity
    }, 0) || 0

    const totalDiscount = cart?.reduce((total: number, item: CartItem) => {
        const quantity = quantities[item.product.id] || 1
        const discount = item.product.discountPercentage ? (item.product.price * (item.product.discountPercentage / 100)) * quantity : 0
        return total + discount
    }, 0) || 0

    const finalAmount = totalProductPrice - totalDiscount

    return (
        <>
            <Container>
                <Row alignItems='flex-start' margin='80px 0 40px 0'>
                    <Column xs={12} md={8} gap='20px'>
                        {cart?.length > 0 ? (
                            cart?.map((item: CartItem) => (
                                <CartContainer key={item.product.id}>
                                    <Row justifyContent='flex-end'>
                                        <ModalCloseButton onClick={() => handleRemoveFromCart(item.product.id)} >&times;</ModalCloseButton>
                                    </Row>
                                    <Row>
                                        <ImageWrapper width='500px' height='100px'>
                                            <Image src={`/images/products/${item.product.image[0].imgUrl}`} alt={item.product.name} fill objectFit="cover" />
                                        </ImageWrapper>
                                        <Column alignItems='flex-start'>
                                            <Title fsize='1rem' fcolor='#253342' fweight='700' textAlign='start'>{item.product.name}</Title>
                                            <Title fsize='16px' fcolor='#8e9fad' fweight='700'>
                                                <ColorBox color={item.options.color} />
                                            </Title>
                                        </Column>
                                        <Column alignItems='flex-start'>
                                            <Title fsize='14px' fcolor='#8e9fad'>Birim Fiyat</Title>
                                            <Title fsize='18px' fcolor='#8e9fad' fweight='700'>{item.product.price.toLocaleString('tr-TR')} TL</Title>
                                        </Column>
                                        <Column>
                                            <Title fsize='14px'>Adet</Title>
                                            <Row alignItems='center'>
                                                <QuantitiyMinus onClick={() => handleQuantityChange(item.product.id, -1)}>-</QuantitiyMinus>
                                                <QuantityValue>{quantities[item.product.id] || 1}</QuantityValue>
                                                <QuantityPlus onClick={() => handleQuantityChange(item.product.id, 1)}>+</QuantityPlus>
                                            </Row>
                                        </Column>
                                        <Column alignItems='flex-end'>
                                            <Title>Tutar</Title>
                                            <Title fsize='1rem' fcolor='#253342' fweight='700'>
                                                {(item.product.price * (quantities[item.product.id] || 1)).toLocaleString('tr-TR')} TL
                                            </Title>
                                        </Column>
                                    </Row>
                                </CartContainer>
                            ))
                        ) : (<CartContainer>
                            <Title fsize='1rem' fcolor='#253342'>Sepetiniz Boş <Link href="/category/cep-telefonu">Mağazaya Git.</Link></Title>
                        </CartContainer>)}
                    </Column>
                    <Column xs={12} md={4}>
                        <SummaryContainer>
                            <Row justifyContent='flex-start'>
                                <Title fsize='1rem' fcolor='#253342' fweight='700'>Sipariş Özeti</Title>
                                <Title>{` (${cart?.length || 0} Ürün)`}</Title>
                            </Row>
                            {
                                cart?.length > 0 ? (
                                    <>
                                        <Row justifyContent='space-between'>
                                            <Title fsize='14px' fcolor='#253342'>Ürünler Toplamı</Title>
                                            <Title fsize='16px' fcolor='#253342' fweight='700'>{totalProductPrice.toLocaleString('tr-TR')} TL</Title>
                                        </Row>
                                        <Row justifyContent='space-between'>
                                            <Title fsize='14px' fcolor='#253342'>İndirim</Title>
                                            <Title fsize='16px' fcolor='#253342' fweight='700'>-{totalDiscount.toLocaleString('tr-TR')} TL</Title>
                                        </Row>
                                        <Row justifyContent='space-between'>
                                            <Title fsize='14px' fcolor='#253342'>{'Ödenecek Tutar (KDV Dahil)'}</Title>
                                            <Title fsize='14px' fcolor='#253342' fweight='700'>{finalAmount.toLocaleString('tr-TR')} TL</Title>
                                        </Row>
                                    </>
                                ) : (<Title fsize='14px' fcolor='#253342'>Sepetiniz Boş</Title>)
                            }
                            {
                                cart?.length > 0 && (
                                    <Row>
                                        <YellowButton width='100%' display='block'>
                                            <Title fweight='700'>Siparişe Devam Et</Title>
                                        </YellowButton>
                                    </Row>
                                )
                            }
                        </SummaryContainer>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default CartPage
