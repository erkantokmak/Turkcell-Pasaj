import React, { useState, useEffect } from 'react';
import { FilterCard, FilterCheck, FilterCheckInput, FilterCheckWrapper } from '@/styles/Category/Filter';
import FilterItems from './FilterItem';
import { Product } from '@/types/product';

type CategoryProps = {
  products: Product[];
  onFilterChange: (filterName: string, value: any) => void;

};

const Category: React.FC<CategoryProps> = ({ products, onFilterChange }) => {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueSubCategories = Array.from(new Set(products?.map(product => product.subCategory)));
    setSubCategories(uniqueSubCategories);
  }, [products]);

  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategories((prevSelected) => {
      const newSelected = prevSelected.includes(subCategory)
        ? prevSelected.filter(sc => sc !== subCategory)
        : [...prevSelected, subCategory];
      onFilterChange('subCategory', newSelected);
      return newSelected;
    });
  };

  return (
    <>
      <FilterCard>
        <FilterItems isOpen={true} title={"Kategoriler"}>
          {subCategories.map((subCategory) => (
            <FilterCheckWrapper key={subCategory}>
              <FilterCheckInput
                type="checkbox"
                id={subCategory}
                checked={selectedSubCategories.includes(subCategory)}
                onChange={() => handleSubCategoryChange(subCategory)}
              />
              <FilterCheck htmlFor={subCategory} >
              {`${subCategory} (${products.filter(product => product.subCategory === subCategory).length})`}
              </FilterCheck>
            </FilterCheckWrapper>
          ))}
        </FilterItems>
      </FilterCard>
    </>
  );
};

export default Category;
