import { Column, ImageWrapper, Row, StyledHr, Title } from '@/styles/Global'
import { ColoredInfo, FavIcon, FavoriteButton, PriceSection, ProductContent, ProductTag, ProductWrapper, SingleProductWrap } from '@/styles/Products/SingleProduct'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Rating } from '@smastrom/react-rating'
import { Pagination } from 'swiper/modules'
import { Product } from '@/types/product'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchFavoritesById, updateUserFavorites } from '@/lib/server'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useCompareStore } from '@/lib/compareStore'
import { StyledSwiper, StyledSwiperSlide } from '@/styles/Slider'
import { toast } from 'react-toastify'

type SingleProductProps = {
    product: Product
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {

    const addProduct = useCompareStore((state) => state.addProduct);
    const selectedProducts = useCompareStore((state) => state.selectedProducts);
    const isSelected = selectedProducts.some((p) => p.id === product.id);
    const isModalOpen = useCompareStore((state) => state.isModalOpen);

    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const router = useRouter();
    const { data: session } = useSession();
    const queryClient = useQueryClient()


    const id = (session?.user as { id: string })?.id
    const { data: favorites } = useQuery<Product[]>({
        queryKey: ['favorites'],
        queryFn: () => fetchFavoritesById(id)
    })

    const { mutate } = useMutation({
        mutationFn: ({ uid, favorite }: { uid: string, favorite: Product[] }) => updateUserFavorites({ uid, favorite }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favorites'] })
        }
    })


    const handleFavorite = (product: Product) => {
        if (id) {
            if (!favorites) return;
            const existingFavorite = favorites.find(fav => fav.id === product.id);
            let updatedFavorites: Product[];
            if (existingFavorite) {
                toast.success('Ürün favorilerden kaldırıldı');
                updatedFavorites = favorites.filter(fav => fav.id !== product.id);
            } else {
                toast.success('Ürün favorilere eklendi');
                updatedFavorites = [...favorites, product];
            }
            mutate({ uid: id, favorite: updatedFavorites });
        } else {
            toast.error('Favorilere eklemek için giriş yapmalısınız');
        }
    };

    useEffect(() => {
        if (!favorites) return;
        const existingFavorite = favorites.find(fav => fav.id === product.id);
        if (existingFavorite) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [favorites])

    const handleCompareClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isModalOpen && !isSelected && selectedProducts.length < 3) {
            addProduct(product);
        }else {
        router.push(`/product/${product.id}`)
        }
    }


    return (
        <SingleProductWrap isModalOpen={isModalOpen}
        onClickCapture={handleCompareClick} style={{ cursor: isModalOpen ? 'pointer' : 'default' }}
        >
            <ProductWrapper isModalOpen={isModalOpen}>
                <ProductContent>
                    {
                        product?.bestSeller && (
                            <ProductTag fsize='12px' fcolor='#fff' bgColor='#00e90a'>Çok Satanlar</ProductTag>
                        )
                    }
                    <Row justifyContent='flex-end'>
                        <FavoriteButton onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleFavorite(product)}}>
                            <FavIcon>
                                {isFavorite ? <FaHeart /> : <FaRegHeart />}
                            </FavIcon>
                        </FavoriteButton>
                    </Row>
                    <Row>
                        <StyledSwiper
                            slidesPerView={1}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            onClickCapture={(e) => e.stopPropagation()}
                        >
                            {
                                product?.image.map((image, index) => (
                                    <StyledSwiperSlide key={index}>
                                        <ImageWrapper width='248px' height='186px'>
                                            <Image src={`/images/products/${image.imgUrl}`} fill style={{ objectFit: 'contain' }}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  alt='Product Image' />
                                        </ImageWrapper>
                                    </StyledSwiperSlide>
                                ))
                            }
                        </StyledSwiper>

                    </Row>

                    <Title fsize='18px' fcolor='#253342' fweight='700' lineHeight='1.22' textAlign='start' className='CardText'>
                        {product?.name}
                    </Title>
                    <Row justifyContent='flex-start' padding='15px 0'>
                        <Rating
                            style={{ maxWidth: 70 }}
                            value={5}
                            items={5}
                            readOnly
                        />
                        <Title fsize='10px' fcolor='#253342' fweight='500' lineHeight='1' textAlign='start' margin='0 0 0 5px'>
                            {product?.rating}
                        </Title>
                    </Row>
                    <Row gap='5px' justifyContent='flex-start'>
                        {
                            product?.shoppingCredit && (
                                <ColoredInfo fsize='9px' bgColor='#00e90a1a' fcolor='#5f6b76' >
                                    Faturana Ek 36 Taksit
                                </ColoredInfo>
                            )
                        }
                        {
                            product?.freeShipping && (
                                <ColoredInfo fsize='9px' bgColor='#E5F8FF' fcolor='#5f6b76'>
                                    Ücretsiz Kargo
                                </ColoredInfo>
                            )
                        }
                        {
                            product?.fastDelivery && (
                                <ColoredInfo fsize='9px' bgColor='#FDF7E7' fcolor='#5f6b76'>
                                    Hızlı Gönderim
                                </ColoredInfo>
                            )
                        }
                    </Row>
                </ProductContent>
                <PriceSection>
                    {
                        product?.discountPercentage > 0 ? (
                            <Title fsize='18px' fcolor='#2855AC' fweight='700' lineHeight='1' textAlign='start'>
                                {(product?.price * ((100 - product?.discountPercentage) / 100)).toLocaleString('tr-TR')}
                            </Title>
                        ) : (
                            <Title fsize='18px' fcolor='#2855AC' fweight='700' lineHeight='1' textAlign='start'>
                                {product?.price.toLocaleString('tr-TR')}
                            </Title>
                        )
                    }
                    <Row gap='5px'>
                        {
                            product?.discountPercentage > 0 ? (
                                <Title className='text-line' fsize='12px' fcolor='#5F6B7666' fweight='700' >
                                    {product?.price.toLocaleString('tr-TR')}
                                </Title>
                            ) : <Title></Title>
                        }
                        {
                            product?.discountPercentage > 0 && (
                                <Title fsize='12px' fcolor='#00BAFC' fweight='700' >
                                    {(product.price * (product.discountPercentage / 100)).toLocaleString('tr-TR')} TL indirim
                                </Title>
                            )
                        }
                    </Row>
                    {
                        product?.discountPercentage > 0 && (
                            <Title fsize='10px' fcolor='#29C32E' fweight='700' lineHeight='1'>
                                Son 30 Günün en düşük fiyatı!
                            </Title>
                        )
                    }
                </PriceSection>
            </ProductWrapper >
        </SingleProductWrap>
    )
}

export default SingleProduct