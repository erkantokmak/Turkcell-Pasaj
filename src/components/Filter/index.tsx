import React, { useState } from 'react'
import Category from './Category'
import Sorting from './Sorting'
import Contrats from './Contrats'
import FilterGroup from './FilterGroup'
import { Column, Row, YellowButton } from '@/styles/Global'
import { Product } from '@/types/product'
import { FilterButton, FilterModal, FilterModalContent, FilterWrapper } from '@/styles/Category/Filter'
import { FaFilter } from 'react-icons/fa6'

type FilterProps = {
  data: Product[],
  onFilterChange: (filterName: string, value: any) => void,
}

const FilterIndex: React.FC<FilterProps> = ({data, onFilterChange}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <FilterButton>
    <YellowButton onClick={() => setIsOpen(!isOpen)}><FaFilter /> Filtreleme</YellowButton>
    </FilterButton>
    <FilterWrapper>
    <Column gap='20px' padding='0' margin='0'>
      <Category onFilterChange={onFilterChange} products={data} />
      <Sorting onFilterChange={onFilterChange} />
      <Contrats onFilterChange={onFilterChange}/>
      <FilterGroup  onFilterChange={onFilterChange} products={data}/>
    </Column>
    </FilterWrapper>
    <FilterModal isOpen={isOpen}>
      <FilterModalContent>
      <Column gap='20px' padding='0' margin='0'>
      <Category onFilterChange={onFilterChange} products={data} />
      <Sorting onFilterChange={onFilterChange} />
      <Contrats onFilterChange={onFilterChange}/>
      <FilterGroup  onFilterChange={onFilterChange} products={data}/>
      </Column>
      </FilterModalContent>
    </FilterModal>
    </>
  )
}

export default FilterIndex