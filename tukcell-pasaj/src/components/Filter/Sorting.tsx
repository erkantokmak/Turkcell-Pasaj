import { FilterCard, SortingButton, SortingLabel } from '@/styles/Category/Filter';
import { Column, Row } from '@/styles/Global';
import React from 'react';
import FilterItems from './FilterItem';

type SortingProps = {
  onFilterChange: (filterName: string, value: any) => void;
};

const Sorting: React.FC<SortingProps> = ({ onFilterChange }) => {
  const handleSortingChange = (value: string) => {
    onFilterChange('sortBy', value);
  };

  return (
    <FilterCard>
      <FilterItems title={'Sıralama'} isOpen={false}>
        <Column justifyContent='flex-start' alignItems='flex-start' gap='10px'>
          <Row justifyContent='flex-start' alignItems='center'>
            <SortingButton
              type='radio'
              id='mostpopular'
              name='sorting'
              onChange={() => handleSortingChange('mostPopular')}
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
              onChange={() => handleSortingChange('newArrivals')}
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
              onChange={() => handleSortingChange('lowestPrice')}
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
              onChange={() => handleSortingChange('highestPrice')}
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
              onChange={() => handleSortingChange('highestRating')}
            />
            <SortingLabel htmlFor='highpoint'>
              En Yüksek Puan
            </SortingLabel>
          </Row>
        </Column>
      </FilterItems>
    </FilterCard>
  );
};

export default Sorting;
