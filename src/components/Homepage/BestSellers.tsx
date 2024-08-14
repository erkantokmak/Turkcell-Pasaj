import { Column, Grid, GridColumn, ImageWrapper, Row, Title } from '@/styles/Global'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleProduct from '../Products/SingleProduct'
import { Product } from '@/types/product'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { StyledSwiper } from '@/styles/Slider'

type BestSellersProps = {
  data: Product[]
}


const BestSellers: React.FC<BestSellersProps> = ({ data }) => {

  const categoryItems = [
    { name: "Cep Telefonu-Aksesuar", image: "cep-telefonu.webp", category: "cep-telefonu" },
    { name: "Bilgisayar-Tablet", image: "bilgisayar-tablet.webp", category: "bilgisayar-tablet" },
    { name: "Elektrikli Ev Aletleri", image: "elektrikli-ev-aletleri.webp", category: "elektrikli-ev-aletleri" },
    { name: "Beyaz Eşya", image: "beyaz-esya.webp", category: "beyaz-esya" },
    { name: "Sağlık-Kişisel Bakım", image: "saglik-kisisel-bakim.webp", category: "saglik-kisisel-bakim" },
    { name: "Hobi-Oyun", image: "hobi-oyun.webp", category: "hobi-oyun" },
    { name: "TV-Ses Sistemleri", image: "tv-ses-sistemleri.webp", category: "tv-ses-sistemleri" },
    { name: "Ev-Yaşam", image: "ev-yasam.webp", category: "ev-yasam" },
    { name: "Anne-Bebek-Oyuncak", image: "anne-bebek-oyuncak.webp", category: "anne-bebek-oyuncak" }
  ];


  const [currentCategory, setCurrentCategory] = React.useState<string>('cep-telefonu');
  const filteredData = data ? data.filter((product: Product) => product.category === currentCategory && product.bestOffer === true) : [];


  return (
    <>
      <Row justifyContent='start' padding='50px 0 30px 0'>
        <Title fsize='34px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='left'>
          Çok Satanlar
        </Title>
      </Row>
      <Row margin='30px 0'>
        <StyledSwiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={
            {
              0: {
                slidesPerView: 3,
                spaceBetween: 5
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 5
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 5
              }
            }
          }
        >
          {
            categoryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Column onClickCapture={() => setCurrentCategory(item.category)}>
                  <ImageWrapper width='30px' height='20px'>
                    <Image src={`/images/category/${item.image}`} alt={item.name} fill objectFit='contain' />
                  </ImageWrapper>
                  <Title fsize='12px' fcolor='#253342' fweight='700' textAlign='center'>{item.name}</Title>
                </Column>
              </SwiperSlide>
            ))
          }
        </StyledSwiper>
      </Row>
      <Grid columns={4} gap='20px'>
        {filteredData.slice(0, 8).map((product: Product, index: number) => (
          <GridColumn  key={index} >
            <SingleProduct product={product} />
          </GridColumn>
        ))}
      </Grid>
    </>
  )
}

export default BestSellers