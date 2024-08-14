import { Column, Row, Title } from '@/styles/Global'
import { CategoryImage, CategoryItem } from '@/styles/Home/HomeStyle'
import Image from 'next/image'
import React from 'react'

const PopularCategory = () => {

    const categories = [
        {
            name: "Hediye Çeklerim",
            image: "/images/populars/giftCoupons.webp"
        },
        {
            name: "En Çok Favorilenenler",
            image: "/images/populars/favorites.webp"
        },
        {
            name: "Fırsatlar Kapısı",
            image: "/images/populars/offers.webp"
        },
        {
            name: "Çok Satanlar",
            image: "/images/populars/bestSellers.webp"
        },
        {
            name: "Kulaklıklar",
            image: "/images/populars/headphones.webp"
        },
        {
            name: "Apple Telefonlar",
            image: "/images/populars/applePhones.webp"
        },
        {
            name: "Powerbank",
            image: "/images/populars/powerbank.webp"
        },
        {
            name: "Kahve Makineleri",
            image: "/images/populars/coffeeMachines.webp"
        },
        {
            name: "Apple Tabletler",
            image: "/images/populars/tablets.webp"
        },
        {
            name: "Bilgisayarlar",
            image: "/images/populars/computers.webp"
        }
    ]

    return (
        <>
            <Row justifyContent='start' padding='30px 0px'>
                <Title textAlign='' fsize='34px' fcolor='#253342'>
                    Popüler Kategoriler
                </Title>
            </Row>
            <Row gap='20px' padding='20px 0px 30px 0px'>
                {categories.map((category, index) => (
                    <Row key={index}>
                        <CategoryItem  alignItems='center' justifyContent='flex-start' xs={1} md={1} lg={1}>
                            <CategoryImage width='82px' height='82px' >
                                <Image src={category.image} alt={category.name} fill objectFit='contain' />
                            </CategoryImage>
                            <Title fsize='16px' fcolor='#253342'>
                                {category.name}
                            </Title>
                        </CategoryItem>
                    </Row>
                ))}
            </Row>
        </>
    )
}

export default PopularCategory