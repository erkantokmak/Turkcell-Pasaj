import { Container, Grid, GridColumn, Row, Title } from '@/styles/Global'
import React from 'react'
import CalculateInstallment from './CalculateInstallment'
import { Product } from '@/types/product'

type CreditCartProps = {
  data: Product
}
const CreditCart: React.FC<CreditCartProps> = ({ data }) => {
  return (
    <Container>
      <Row margin='80px 0 40px 0'>
        <Title fsize='1rem' fcolor='#5F6B76' >Anlaşmalı olduğumuz bankalarla alışverişini kredi kartına taksit seçeneği ile hızlı, kolay ve güvenli bir şekilde tamamlayabilirsin.</Title>
      </Row>
      <Grid gap='20px' columns={4} padding='0 0 40px 0' >
        <GridColumn>
          <CalculateInstallment price={data.price} image='finans.webp' />
        </GridColumn>
        <GridColumn>
          <CalculateInstallment price={data.price} image='maximum.webp' />
        </GridColumn>
        <GridColumn>
          <CalculateInstallment price={data.price} image='world.webp' />
        </GridColumn>
        <GridColumn>
          <CalculateInstallment price={data.price} image='axess.webp' />
        </GridColumn>
        <GridColumn>
          <CalculateInstallment price={data.price} image='bonus.webp' />
        </GridColumn>
      </Grid>
    </Container>
  )
}

export default CreditCart