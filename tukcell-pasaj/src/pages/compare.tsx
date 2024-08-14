import { useCompareStore } from '@/lib/compareStore';
import { CompareDetail, CompareDetailItem, CompareItem } from '@/styles/Compare';
import { Container, ImageWrapper, Row, Title } from '@/styles/Global';
import { BlueButton, DetailItem } from '@/styles/Products/DetailPage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const compare: React.FC = () => {
  const selectedProducts = useCompareStore((state) => state.selectedProducts);
  return (
    <>
      <Container>
        <Row margin='80px 0'>
          <Title fsize='34px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='center'>
            Ürün Karşılaştırma Modu
          </Title>
        </Row>
        <Row alignItems='flex-start' justifyContent='space-between' gap='20px'>
          {selectedProducts.map((product) => (
            <CompareItem key={product.id} >
              <Row>
                <ImageWrapper width='100px' height='100px'>
                  <Image src={`/images/products/${product.image[0].imgUrl}`} alt='product' fill style={{ objectFit: 'contain' }} />
                </ImageWrapper>
              </Row>
              <Title fsize='16px' fcolor='#253342' fweight='700'>{product.name}</Title>
              <CompareDetail>

                {
                  Object.entries(product?.details).map(([key, value]) => (
                    <CompareDetailItem>
                      <Title fsize='16px' fcolor='#253342' fweight='700'>
                        {key.toUpperCase()}
                      </Title>
                      <Title fsize='14px' fcolor='#5F6B76'>
                        {String(value).toUpperCase()}
                      </Title>
                    </CompareDetailItem>
                  ))
                }
              </CompareDetail>


            </CompareItem>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default compare