import React from 'react'
import Category from './Category'
import Sorting from './Sorting'
import Contrats from './Contrats'
import FilterGroup from './FilterGroup'
import { Column } from '@/styles/Global'
import { Product } from '@/types/product'

type FilterProps = {
  data: Product[],
  onFilterChange: (filterName: string, value: any) => void,
}

const FilterIndex: React.FC<FilterProps> = ({data, onFilterChange},categoryName) => {
  return (
    <>
    <Column gap='20px' padding='0' margin='0'>
      <Category onFilterChange={onFilterChange} products={data} />
      <Sorting onFilterChange={onFilterChange} />
      <Contrats onFilterChange={onFilterChange}/>
      <FilterGroup  onFilterChange={onFilterChange} products={data}/>
    </Column>
    </>
  )
}

export default FilterIndex