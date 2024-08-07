import React from 'react'
import Category from './Category'
import Sorting from './Sorting'
import Contrats from './Contrats'
import FilterGroup from './FilterGroup'
import { Column, Row } from '@/styles/Global'

const index = () => {
  return (
    <Column gap='20px'>
      <Category />
      <Sorting />
      <Contrats />
      <FilterGroup />
    </Column>
  )
}

export default index