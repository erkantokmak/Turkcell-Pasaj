import { Column, Container, ImageWrapper, Row, Title } from '@/styles/Global';
import { Product } from '@/types/product';
import Image from 'next/image';
import React from 'react'

type ExplanationProps = {
  data: Product;
}
const Explanation: React.FC<ExplanationProps> = ({data}) => {
  return (
    <Container>
      {data?.explanation?.map((item, index) => (
        <Row key={index} margin='30px 0'>
          <Column>
          <Title fsize='32px' fcolor='#000' textAlign='start' margin='0 0 10px 0' lineHeight='1.3'>{item.title}</Title>
          <Title fsize='16px' fcolor='#253342' textAlign='start' lineHeight='1.3'>{item.text}</Title>
          </Column>
          <ImageWrapper width='100%' height='300px'>
            <Image src={`/images/products/${item.image}`} alt="Explanation" fill objectFit='contain'/>
          </ImageWrapper>
        </Row>
      ))}
    </Container>
  )
}

export default Explanation