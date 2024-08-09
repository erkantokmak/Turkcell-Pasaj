import { FilterCard, FilterCheck, FilterCheckInput, FilterCheckWrapper, FilterItem, FilterSearch, FilterSearchWrapper } from '@/styles/Category/Filter';
import { Row} from '@/styles/Global';
import { IconWrapper } from '@/styles/Header/HeaderStyle';
import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import FilterItems from './FilterItem';
import { Product } from '@/types/product';

type FilterGroupProps = {
  onFilterChange: (filterName: string, value: any) => void;
  products: Product[];
};

const FilterGroup: React.FC<FilterGroupProps> = ({ onFilterChange, products }) => {
    const [search, setSearch] = useState('');
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([]);
    const [selectedSellers, setSelectedSellers] = useState<string[]>([]);
  
    const priceRanges = [
      { label: '0 - 500 TL', min: 0, max: 500 },
      { label: '500 - 1500 TL', min: 500, max: 1500 },
      { label: '1500 - 3000 TL', min: 1500, max: 3000 },
      { label: '3000 TL ve üzeri', min: 3000, max: Infinity },
    ];
  
    const filteredBrands = Array.from(new Set(products?.map((product) => product.brand)));
    const filteredSellers = Array.from(new Set(products?.map((product) => product.seller)));
  
    const handleBrandChange = (brand: string) => {
      const newBrands = selectedBrands.includes(brand)
        ? selectedBrands.filter((b) => b !== brand)
        : [...selectedBrands, brand];
      setSelectedBrands(newBrands);
      onFilterChange('brand', newBrands);
    };
  
    const handlePriceRangeChange = (min: number, max: number) => {
      const rangeExists = selectedPriceRange[0] === min && selectedPriceRange[1] === max;
      const newRange = rangeExists ? [] : [min, max];
      setSelectedPriceRange(newRange);
      onFilterChange('priceRange', newRange);
    };
  
    const handleSellerChange = (seller: string) => {
      const newSellers = selectedSellers.includes(seller)
        ? selectedSellers.filter((s) => s !== seller)
        : [...selectedSellers, seller];
      setSelectedSellers(newSellers);
      onFilterChange('seller', newSellers);
    };
  

  return (
    <FilterCard>
      <FilterItems isOpen={true} title={'Markalar'}>
        <Row margin='0 0 20px 0'>
          <FilterSearchWrapper>
            <FilterSearch
              type='text'
              placeholder='Ara'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconWrapper>
              <FaSearch />
            </IconWrapper>
          </FilterSearchWrapper>
        </Row>
        {filteredBrands
          .filter((brand) => brand.toLowerCase().includes(search.toLowerCase()))
          .map((brand) => (
            <FilterCheckWrapper key={brand}>
            <FilterCheckInput
              type="checkbox" 
              id={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <FilterCheck htmlFor={brand}>
            {brand}
            </FilterCheck>
          </FilterCheckWrapper>
          ))}
      </FilterItems>

      <FilterItems title={'Peşin Fiyat'} isOpen={true}>
      {priceRanges.map(({ label, min, max }) => (
          <FilterCheckWrapper key={label}>
            <FilterCheckInput
              type="checkbox"
              id={label}
              checked={selectedPriceRange[0] === min && selectedPriceRange[1] === max}
              onChange={() => handlePriceRangeChange(min, max)}
            />
            <FilterCheck htmlFor={label}>
              {label}
            </FilterCheck>
          </FilterCheckWrapper>
        ))}
      </FilterItems>

      <FilterItems title={'Satıcılar'} isOpen={true}>
        {filteredSellers.map((seller) => (
          <FilterCheckWrapper key={seller}>
            <FilterCheckInput
              type="checkbox" 
              id={seller}
              checked={selectedSellers.includes(seller)}
              onChange={() => handleSellerChange(seller)}
            />
            <FilterCheck htmlFor={seller}>
            {seller}
            </FilterCheck>
          </FilterCheckWrapper>
        ))}
      </FilterItems>
    </FilterCard>
  );
};

export default FilterGroup;