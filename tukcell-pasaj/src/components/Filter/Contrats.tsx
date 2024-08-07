import { ContratButton, ContratInput, ContratLabel, FilterCard } from '@/styles/Category/Filter'
import { Row, Title } from '@/styles/Global'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

const Contrats = () => {
  const [isContrat, setIsContrat] = useState(false);

  return (
    <FilterCard>
      <Row justifyContent='space-between'  padding='16px 20px'>
        <Title fsize='16px' fcolor='#5F6B76' textAlign='left' fweight='500'>Kontraltı Ürünler</Title>
        <ContratInput
          id='contratCheck'
          type="checkbox"
          checked={isContrat}
          onChange={e => setIsContrat(e.target.checked)}
        />
        <ContratLabel htmlFor='contratCheck'>
          <ContratButton />
        </ContratLabel>

      </Row>
    </FilterCard>
  )
}

export default Contrats