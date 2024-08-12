import { Column, Container, Grid, GridColumn, ImageWrapper, Row, Title } from '@/styles/Global'
import { CancellationItem } from '@/styles/Products/DetailPage'
import { ProductTag } from '@/styles/Products/SingleProduct'
import Image from 'next/image'
import React from 'react'

const CancellationRefund: React.FC = () => {
  return (
    <Container>
      <Row margin='80px 0 20px 0'>
        <Column justifyContent='flex-start' alignItems='flex-start' >
          <Title fcolor='#5f6b76' fsize='1rem' fweight='700'>Dikkat edilmesi gerekenler</Title>
          <ul>
            <li><Title fcolor='#5f6b76' fsize='1rem' textAlign='start'>İade edilecek ürünün orijinal kutusu bozulmamış olmalı, ürünlerde çizik veya herhangi bir hasar olmamalıdır. İade edilen ürün tüm yan ürün ve aksesuarlarıyla birlikte gönderilmelidir. Ürünlerin 14 günde iade koşullarına uygun bir şekilde iade edilmesi gerekmektedir.</Title></li>
            <li><Title fcolor='#5f6b76' fsize='1rem' textAlign='start'>Büyük desili ürünlerde (Beyaz eşya, TV vb.) ambalajın teknik servis tarafından açılmadığı durumlar veya hasarlı ambalajlarda tutanak tutulmaması durumunda cayma hakkı geçerli değildir.</Title></li>
            <li><Title fcolor='#5f6b76' fsize='1rem' textAlign='start'>İlgili yasa gereği faturasız iade ve değişim yapılamamaktadır.</Title></li>
          </ul>
        </Column>
      </Row>
      <Row margin='20px 0 20px 0'>
        <Column justifyContent='flex-start' alignItems='flex-start'>
          <Title fcolor='#5f6b76' fsize='1rem' fweight='700'>İade yapılamayan ürünler</Title>
          <ul>
            <li><Title fcolor='#5f6b76' fsize='1rem' textAlign='start'>Dijital ürün kodlarında iade bulunmamaktadır. Elektronik ortamda anında iletilen hizmetler veya teslim edilen ürünlerde iade bulunmamaktadır.</Title></li>
            <li><Title fcolor='#5f6b76' fsize='1rem' textAlign='start'>Kullanım esnasında vücut ile birebir temas gerektiren ve kullanımla beraber sağlık açısından tehlike arz edebilen ürünlerin iadesi/değişimi yapılamamaktadır. (Tüm Kişisel Bakım Ürünleri, Kulak içi /kulak üstü kulaklık, saat, akıllı bileklik vb.)</Title></li>
          </ul>
        </Column>
      </Row>
      <Grid columns={3} padding='0 0 40px 0'>
        <GridColumn>
          <CancellationItem>
            <ProductTag bgColor='#8e9fad' color='#fff'  fsize='1rem'>1</ProductTag>
            <Column alignItems='center' justifyContent='center'>
              <ImageWrapper width='80px' height='80px'>
                <Image src="/images/cancellation-refund/time.webp" alt='Zaman' fill objectFit='contain' />
              </ImageWrapper>
              <Title fsize='14px' fcolor='#5f6b76'>
                Ürünün teslim tarihinden itibaren
              </Title>
              <Title fsize='14px' fcolor='#2855ac' fweight='700'>
                14 gün geçmediğine emin olun.
              </Title>
            </Column>
          </CancellationItem>
        </GridColumn>
        <GridColumn>
          <CancellationItem>
            <ProductTag bgColor='#8e9fad' color='#fff'  fsize='1rem'>2</ProductTag>
            <Column alignItems='center' justifyContent='center'>
              <ImageWrapper width='80px' height='80px'>
                <Image src="/images/cancellation-refund/orders.webp" alt='Zaman' fill objectFit='contain' />
              </ImageWrapper>
              <Title fsize='14px' fcolor='#5f6b76'>
              Pasaj üzerinde
              </Title>
              <Title fsize='14px' fcolor='#2855ac' fweight='700'>
              “Siparişlerim” sekmesine girin
              </Title>
            </Column>
          </CancellationItem>
        </GridColumn>
        <GridColumn>
          <CancellationItem>
            <ProductTag bgColor='#8e9fad' color='#fff'  fsize='1rem'>3</ProductTag>
            <Column alignItems='center' justifyContent='center'>
              <ImageWrapper width='80px' height='80px'>
                <Image src="/images/cancellation-refund/request.webp" alt='Zaman' fill objectFit='contain' />
              </ImageWrapper>
              <Title fsize='14px' fcolor='#5f6b76'>
              İade nedeninizi seçerek <Title fsize='14px' fcolor='#2855ac' fweight='700'>
              “İade Talebi OIuştur”
              </Title>
              </Title>
              <Title fsize='14px' fcolor='#5f6b76'>
              butonuna tıklayın.
              </Title>
            </Column>
          </CancellationItem>
        </GridColumn>
        <GridColumn>
          <CancellationItem>
            <ProductTag bgColor='#8e9fad' color='#fff'  fsize='1rem'>4</ProductTag>
            <Column alignItems='center' justifyContent='center'>
              <ImageWrapper width='80px' height='80px'>
                <Image src="/images/cancellation-refund/phone-code.webp" alt='Zaman' fill objectFit='contain' />
              </ImageWrapper>
              <Title fsize='14px' fcolor='#5f6b76'>
              SMS ile gelecek
              </Title>
              <Title fsize='14px' fcolor='#2855ac' fweight='700'>
              kargo kodunu
              </Title>
              <Title fsize='14px' fcolor='#5f6b76'>
              not alın.
              </Title>
            </Column>
          </CancellationItem>
        </GridColumn>
        <GridColumn>
          <CancellationItem>
            <ProductTag bgColor='#8e9fad' color='#fff'  fsize='1rem'>5</ProductTag>
            <Column alignItems='center' justifyContent='center'>
              <ImageWrapper width='80px' height='80px'>
                <Image src="/images/cancellation-refund/box.webp" alt='Zaman' fill objectFit='contain' />
              </ImageWrapper>
              <Title fsize='14px' fcolor='#5f6b76'>
              Ürünü eksiksiz bir şekilde paketleyerek faturası ile birlikte
              </Title>
              <Title fsize='14px' fcolor='#2855ac' fweight='700'>
              Yurtiçi Kargo’ya 7 iş günü içinde teslim edin.
              </Title>
            </Column>
          </CancellationItem>
        </GridColumn>
        <GridColumn>
          <CancellationItem>
            <ProductTag bgColor='#8e9fad' color='#fff'  fsize='1rem'>6</ProductTag>
            <Column alignItems='center' justifyContent='center'>
              <ImageWrapper width='80px' height='80px'>
                <Image src="/images/cancellation-refund/box.webp" alt='Zaman' fill objectFit='contain' />
              </ImageWrapper>
              <Title fsize='14px' fcolor='#5f6b76'>
              ÜÜrün bize ulaştıktan sonra maksimum<Title fsize='14px' fcolor='#2855ac' fweight='700'>
              5 gün içinde kontrol edilir,  iade talebiniz onaylandığında paranız otomatik olarak bankanıza aktarılır.
              </Title>
              </Title>
              
            </Column>
          </CancellationItem>
        </GridColumn>
      </Grid>
    </Container>
  )
}

export default CancellationRefund