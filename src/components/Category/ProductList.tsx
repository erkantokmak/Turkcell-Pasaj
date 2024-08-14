import { Product } from '@/types/product'
import React from 'react'
import SingleProduct from '../Products/SingleProduct'
import { Column, Grid, GridColumn, Row } from '@/styles/Global'

type ProductListProps = {
  data: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {


  return (
    <>
      <Grid columns={3} gap={'10px'}>
        {data.map((product) => (
          <GridColumn key={product.id}>
            <SingleProduct product={product} />
          </GridColumn>
        ))}
      </Grid>
    </>
  )
}

export default ProductList