import { FilterCard, SortingButton, SortingLabel } from '@/styles/Category/Filter'
import { Column, Row, Title } from '@/styles/Global'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import FilterItems from './FilterItem'

const Sorting = () => {
  return (
    <FilterCard>
      <FilterItems title={'Sıralama'} isOpen={false}>
        <Column justifyContent='flex-start' alignItems='flex-start' gap='10px'>
          <Row justifyContent='flex-start' alignItems='center'>
            <SortingButton
              type='radio'
              id='mostpopular'
              name='sorting'
            />
            <SortingLabel htmlFor='mostpopular'>
              En Popüler
            </SortingLabel>
          </Row>
          <Row justifyContent='flex-start' alignItems='center'>
            <SortingButton
              type='radio'
              id='news'
              name='sorting'
            />
            <SortingLabel htmlFor='news'>
              En Yeniler
            </SortingLabel>
          </Row>
          <Row justifyContent='flex-start' alignItems='center'>
            <SortingButton
              type='radio'
              id='lowprice'
              name='sorting'
            />
            <SortingLabel htmlFor='lowprice'>
              En Düşük Fiyat
            </SortingLabel>
          </Row>
          <Row justifyContent='flex-start' alignItems='center'>
            <SortingButton
              type='radio'
              id='highprice'
              name='sorting'
            />
            <SortingLabel htmlFor='highprice'>
              En Yüksek Fiyat
            </SortingLabel>
          </Row>
          <Row justifyContent='flex-start' alignItems='center'>
            <SortingButton
              type='radio'
              id='highpoint'
              name='sorting'
            />
            <SortingLabel htmlFor='highpoint'>
              En Yüksek Puan
            </SortingLabel>
          </Row>
        </Column>
      </FilterItems>
    </FilterCard>
  )
}

export default Sorting