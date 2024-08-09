import { fetchProductById } from '@/lib/server'
import { Column, Container, ImageWrapper, Row } from '@/styles/Global';
import { Product } from '@/types/product';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react'
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
    console.log(slug)
    console.log(data)
    return (
        <Container>
            <Row>
                <Column width='50%'>
                    <Swiper
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {
                            data?.image.map((image, index) => (

                                <SwiperSlide key={index}>
                                    <ImageWrapper width='248px' height='186px'>
                                        <Image src={`/images/products/${image.imgUrl}`} fill objectFit='contain' alt='Product Image' />
                                    </ImageWrapper>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </Column>
            </Row>
        </Container>
    )
}

export default Product