import { Container, Title } from '@/styles/Global'
import { DetailContent, DetailItem, DetailTab } from '@/styles/Products/DetailPage'
import { Product } from '@/types/product'
import React from 'react'

type DetailsProps = {
  data: Product;
}
const Details: React.FC<DetailsProps> = ({ data }) => {
  return (
    <>
      <DetailTab>
        <Container>
          <DetailContent>
            {
              Object.entries(data?.details).map(([key, value]) => (
                <DetailItem key={key}>
                  <Title fsize='16px' fcolor='#253342' fweight='700'>
                    {key.toUpperCase()}
                  </Title>
                  <Title fsize='14px' fcolor='#5F6B76'>
                    {String(value).toUpperCase()}
                  </Title>
                </DetailItem>
              ))
            }
          </DetailContent>
        </Container>
      </DetailTab>
    </>
  )
}

export default Details