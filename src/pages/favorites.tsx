import SingleProduct from '@/components/Products/SingleProduct'
import { fetchFavoritesById } from '@/lib/server'
import { Column, Container, Grid, GridColumn, Row, Title } from '@/styles/Global'
import { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React from 'react'

const Favorites = () => {
    const { data: session } = useSession();
    const id = (session?.user as { id: string })?.id

    const { data: favorites } = useQuery<Product[]>({
        queryKey: ['favorites'],
        queryFn: () => fetchFavoritesById(id),
        enabled: !!id
    })

    return (
        <>
            <Container>
                <Column padding='40px 0 0 0'>
                    <Title fsize='34px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='center' margin='40px 0 0 0'>
                        Favori ürünleriniz
                    </Title>
                    {favorites?.length === 0 && <Title fsize='24px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='center'>
                        Henüz favori ürününüz bulunmamaktadır.
                    </Title>}
                </Column>
                <Row margin='40px 0 80px 0'>
                    <Grid columns={4} gap='10px'>
                        {
                            favorites?.map((product: Product, index: number) => (
                                <GridColumn key={index} >
                                    <SingleProduct product={product} />
                                </GridColumn>
                            ))}
                    </Grid>
                </Row>
            </Container>
        </>
    )
}

export default Favorites