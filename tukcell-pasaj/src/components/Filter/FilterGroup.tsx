import { FilterCard, FilterItem, FilterSearch, FilterSearchWrapper } from '@/styles/Category/Filter'
import { Row, Title } from '@/styles/Global'
import { IconWrapper } from '@/styles/Header/HeaderStyle'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa6'
import FilterItems from './FilterItem'

const FilterGroup = () => {
    return (
        <>
            <FilterCard>
                <FilterItems isOpen={false} title={'Markalar'}>
                    <Row>
                        <FilterSearchWrapper>
                            <FilterSearch
                                type='text'
                                placeholder='Ara'
                            />
                            <IconWrapper>
                                <FaSearch />
                            </IconWrapper>
                        </FilterSearchWrapper>
                    </Row>
                </FilterItems>

                <FilterItems title={'Peşin Fiyat'} isOpen={false}>
                    asdf
                    
                </FilterItems>
                <FilterItems title={'Satıcılar'} isOpen={false}>
                    asd
                </FilterItems>
            </FilterCard>
        </>
    )
}

export default FilterGroup