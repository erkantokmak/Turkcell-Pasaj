import { FilterItem } from '@/styles/Category/Filter';
import { Row, Title } from '@/styles/Global'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

type FilterItemsProps = {
    children: React.ReactNode;
    title: string;
    isOpen: boolean;
}

const FilterItems: React.FC<FilterItemsProps> = ({ children, title, isOpen }) => {
    const [toggle, setToggle] = React.useState(isOpen)
    return (
        <>
            <FilterItem>
                <Row justifyContent='space-between'
                    onClickCapture={() => setToggle(!toggle)} >
                    <Title fsize='16px' fcolor='#8E9FAD' textAlign='left' fweight='700'>{title}</Title>
                    <FaChevronDown />
                </Row>
            </FilterItem>
            {

                toggle && (
                    <FilterItem>
                        {children}
                    </FilterItem>
                )
            }
        </>
    )
}

export default FilterItems