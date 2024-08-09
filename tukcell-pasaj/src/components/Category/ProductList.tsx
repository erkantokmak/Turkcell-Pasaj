import { Product } from '@/types/product'
import React from 'react'
import SingleProduct from '../Products/SingleProduct'
import { Column, Grid, GridColumn, Row } from '@/styles/Global'

type ProductListProps = {
  data: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {


  return (
    <Grid columns={3} gap={'30px'}>
      {data.map((product) => (
        <GridColumn>
        <SingleProduct product={product} key={product.id} />
        </GridColumn>
      ))}
    </Grid>
  )
}

export default ProductList