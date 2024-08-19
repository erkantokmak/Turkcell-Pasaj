import { Column, Grid, GridColumn, ImageWrapper, Row, Title } from '@/styles/Global'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleProduct from '../Products/SingleProduct'
import { Product } from '@/types/product'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { StyledSwiper } from '@/styles/Slider'
import { BestSellerMenuItem } from '@/styles/Home/HomeStyle'

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
                slidesPerView: 2,
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
          <Row alignItems='flex-start' justifyContent='flex-start'>
          {
            categoryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <BestSellerMenuItem onClickCapture={() => setCurrentCategory(item.category)} isActive={currentCategory === item.category} justifyContent='flex-start'>
                  <ImageWrapper width='40px' height='30px'>
                    <Image src={`/images/category/${item.image}`} alt={item.name} fill objectFit='contain' />
                  </ImageWrapper>
                  <Title fsize='16px' fweight='700' fcolor='#253342' textAlign='center' margin='10px 0 0 0' className='bestCategory'>{item.name}</Title>
                </BestSellerMenuItem>
              </SwiperSlide>
            ))
          }
          </Row>
        </StyledSwiper>
      </Row>
      <Row>

      <Grid columns={4} gap='20px'>
        {filteredData.length > 0 && filteredData.slice(0, 8).map((product: Product, index: number) => (
          <GridColumn  key={index} >
            <SingleProduct product={product} />
          </GridColumn>
        ))}
      </Grid>
        </Row>
    </>
  )
}

export default BestSellers