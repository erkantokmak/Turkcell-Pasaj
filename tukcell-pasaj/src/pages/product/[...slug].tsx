import ProductTabs from '@/components/Products/TabMenu/ProductTabs';
import { fetchCartById, fetchProductById, updateUserBasket } from '@/lib/server'
import { SortingButton, SortingLabel } from '@/styles/Category/Filter';
import { Column, Container, ImageWrapper, Row, Title, YellowButton } from '@/styles/Global';
import { ColorBox, ColoredBox, DetailIcon, DropdownContainer, DropdownHeader, DropdownItem, DropdownList, FavoriteButton, Limited, ProductIcons, SellerWrapper, StyledLink } from '@/styles/Products/DetailPage';
import { FavIcon, ProductTag } from '@/styles/Products/SingleProduct';
import { CartItem } from '@/types/cart';
import {Product} from '@/types/product';
import { dehydrate, QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, {  useMemo, useState } from 'react'
import { FaCalendarAlt, FaChevronDown, FaChevronUp, FaRegHeart, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params as { slug: string[] };
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['products', slug, 1],
        queryFn: () => fetchProductById(slug[0]),
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            slug,
        },
    };
};

type ProductProps = {
    slug: string[];
}

const Product: React.FC<ProductProps> = ({ slug }) => {
    const { data } = useQuery<Product>({
        queryKey: ['product', slug],
        queryFn: () => fetchProductById(slug[0]),
    });

    const session = useSession();
    const uid = (session.data?.user as { id: string })?.id;

    const { data: cart } = useQuery<CartItem[]>({
        queryKey: ['cart'],
        queryFn: () => fetchCartById(uid),
    })
    const queryClient = new QueryClient();
    
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
    
    
    const { mutate } = useMutation({
        mutationFn: ({uid, cart}:{ uid: string, cart: CartItem[]}) => updateUserBasket({uid, cart}),
        onSuccess: () => {
            // alert
            queryClient.invalidateQueries({ queryKey: ['cart']})
        }
    })
    
    
    
    const handleAddToCart = async () => {
        if (!cart || cart.length === 0) {
            
            const cartItem: CartItem = {
                product: data || {} as Product,
                quantity: 1,
                options: { ...selectedOptions }
            };
            mutate({ uid: uid, cart: [cartItem] });
        } else {
           
            const existingCartItemIndex = cart.findIndex(
                (item: CartItem) => item.product.id === data?.id && JSON.stringify(item.options) === JSON.stringify(selectedOptions)
            );
    
            if (existingCartItemIndex !== -1) {
                
                const updatedCart = [...cart];
                updatedCart[existingCartItemIndex].quantity += 1;
                mutate({ uid: uid, cart: updatedCart });
            } else {
                
                const cartItem: CartItem = {
                    product: data || {} as Product,
                    quantity: 1,
                    options: { ...selectedOptions }
                };
                const newCart = [...cart, cartItem];
                mutate({ uid: uid, cart: newCart });
            }
        }
    };
    

    useMemo(() => {
        if (data?.options?.[0]) {
            const initialSelections: { [key: string]: string } = {};
            Object.entries(data.options[0]).forEach(([optionType, optionData]) => {
                initialSelections[optionType] = optionData.values[0]?.code || '';
            });
            setSelectedOptions(initialSelections);
        }
    }, [data]);

    const handleOptionChange = (optionType: string, value: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [optionType]: value,
        }));
        toggleDropdown(optionType);
    };

    const toggleDropdown = (optionType: string) => {
        setIsOpen((prev) => ({
            ...prev,
            [optionType]: !prev[optionType],
        }));
    };
    

    const getSelectedOptionName = (optionType: string): string[] => {
        const selectedOptionCode = selectedOptions[optionType];
        const optionData = data?.options[0][optionType];
        const selectedOption = optionData?.values.find((option) => option.code === selectedOptionCode);
        const selectedOptionName = selectedOption ? selectedOption.name : '';
        const optionDataName = optionData?.name;
        return [selectedOptionName, optionDataName];
    };

    return (
        <>
        <Container>
            <Row justifyContent='space-between' alignItems='flex-start'>
                <Column width='50%' >
                    <Row style={{ width: "100%" }} >
                        <Swiper
                            slidesPerView={1}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                        >
                            {
                                data?.image.map((image, index) => (

                                    <SwiperSlide key={index}>
                                        <ImageWrapper width='558px' height='418px'>
                                            <Image src={`/images/products/${image.imgUrl}`} fill objectFit='contain' alt='Product Image' />
                                        </ImageWrapper>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </Row>
                    <Row>
                        {data?.limitedSelling && (
                            <Limited>
                                Ürün alımları 1 adet ile sınırlıdır.
                            </Limited>
                        )}
                    </Row>
                </Column>
                <Column width='50%' alignItems='flex-start' gap='20px'>
                    <Row padding='0'>
                        <Title fsize='42px' fcolor='#253342' fweight='700' lineHeight='1.22' textAlign='start'>
                            {data?.name}
                        </Title>
                        <FavoriteButton>
                            <FavIcon>
                                <FaRegHeart />
                            </FavIcon>
                        </FavoriteButton>
                    </Row>
                    <Row>
                        {
                            data?.comments && data.comments.length !== 0 ? (
                                <Title fsize='12px' fcolor='#8e9fad'>
                                    Henüz yorum yok <StyledLink href='#'>Yorum Yaz</StyledLink>
                                </Title>
                            ) : ('')
                        }
                    </Row>

                    {
                        data?.discountPercentage && (
                            <Row gap='5px'>
                                <Title fsize='12px' fcolor='#253342' fweight='500'>
                                    İndirim Bitiş Tarihi:
                                </Title>
                                <Title fcolor='#2855AC' fsize='12px' fweight='700'>{data?.discountEndDate}</Title>
                            </Row>
                        )
                    }

                    <Row>
                        {data?.options?.[0] &&
                            Object.entries(data.options[0]).map(([optionType, optionData], index) => {
                                const [selectedOptionName, optionDataName] = getSelectedOptionName(optionType);
                                return (
                                    <DropdownContainer key={index}>
                                        <DropdownHeader onClick={() => toggleDropdown(optionType)}>
                                            <Row justifyContent='space-between'>
                                                <Title textAlign='start' fsize='12px' fcolor='#8e9fad'>{optionDataName}</Title>
                                                {isOpen[optionType] ? <FaChevronUp /> : <FaChevronDown />}
                                            </Row>
                                            <Row padding='0' alignItems='center'>
                                                <ColorBox color={selectedOptions[optionType]} />
                                                <Title fsize='16px' fcolor='#444'>{selectedOptionName || optionDataName}</Title>
                                            </Row>
                                        </DropdownHeader>
                                        {isOpen[optionType] && (
                                            <DropdownList>
                                                {optionData.values.map((option, index) => (
                                                    <DropdownItem key={index} onClick={() => handleOptionChange(optionType, option.code)}>
                                                        <ColorBox color={option.code} />
                                                        {option.name}
                                                    </DropdownItem>
                                                ))}
                                            </DropdownList>
                                        )}
                                    </DropdownContainer>
                                );
                            })
                        }
                    </Row>
                    {data?.credit &&
                        <Row padding='0' style={{ width: '100%' }}>
                            <SellerWrapper htmlFor='credit'>
                                {data?.seller && (
                                    <ProductTag fsize='12px' fcolor='#fff' bgColor='#2855AC'>Ücretsiz Kargo</ProductTag>
                                )
                                }
                                <Row justifyContent='flex-end'>
                                    <Title fsize='24px' fcolor='#2855AC' fweight='700'>
                                        {data?.creditPrice} TL
                                    </Title>
                                    <Title fsize='16px' fcolor='#2855AC' fweight='700' margin='0 0 0 5px'>
                                        x {data?.creditMonth} Ay
                                    </Title>
                                </Row>
                                <SortingButton
                                    type='radio'
                                    id='credit'
                                    name='sale'
                                />
                                <SortingLabel htmlFor='seller'>
                                    <Title fsize='14px' fcolor='#2855AC' fweight='700' margin='0 0 0 5px'>Kredi Kartı Limitine Takılmayın!</Title>
                                </SortingLabel>
                                <Row justifyContent='flex-end'>
                                    <Title fsize='12px' fcolor='#8E9FAD' fweight='500'>
                                        Kredi sorgulama sonucunuza göre tutarlar değişiklik gösterebilir.
                                    </Title>
                                </Row>
                            </SellerWrapper>
                        </Row>
                    }
                    <Row padding='0' style={{ width: '100%' }}>
                        <SellerWrapper htmlFor='seller'>
                            {data?.seller && (
                                <ProductTag fsize='12px' fcolor='#fff' bgColor='#2855AC'>Ücretsiz Kargo</ProductTag>
                            )
                            }
                            <Row justifyContent='flex-end'>
                                <Title fsize='24px' fcolor='#2855AC' fweight='700'>
                                    {data?.price.toLocaleString('tr-TR')} TL
                                </Title>
                            </Row>
                            <SortingButton
                                type='radio'
                                id='seller'
                                name='sale'
                            />
                            <SortingLabel htmlFor='seller'>
                                <Title fsize='14px' fcolor='#2855AC' fweight='700' margin='0 0 0 5px'>{data?.seller}</Title>
                            </SortingLabel>
                            <ColoredBox>
                                {data?.sellerPoint.toFixed(1)}
                            </ColoredBox>
                            <Row justifyContent='flex-end'>
                                <Title fsize='12px' fcolor='#8E9FAD' fweight='500'>
                                    3 iş günü içinde kargoda
                                </Title>
                            </Row>
                        </SellerWrapper>
                    </Row>
                    <Row width='100%' justifyContent='stretch'>
                        <YellowButton width='100%' display='block'><Title fsize="16px" fcolor='#253342' fweight='500' onClick={handleAddToCart}>Sepete Ekle</Title></YellowButton>
                    </Row>
                    <Row>
                        <ProductIcons>
                            <DetailIcon>
                                <FaTruck />
                            </DetailIcon>
                            <Title fsize='12px'>Ücretsiz Kargo</Title>
                        </ProductIcons>
                        <ProductIcons>
                            <DetailIcon>
                                <FaShieldAlt />
                            </DetailIcon>
                            <Title fsize='12px'>Turkcell Pasaj Garantisi</Title>
                        </ProductIcons>
                        <ProductIcons>
                            <DetailIcon>
                                <FaCalendarAlt />
                            </DetailIcon>
                            <Title fsize='12px'>Taksitli Alışveriş</Title>
                        </ProductIcons>
                    </Row>
                </Column>
            </Row>
          
        </Container>
        {data && <ProductTabs data={data} />}
    </>
        )
}

export default Product