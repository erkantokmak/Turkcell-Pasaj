import { ContratButton, ContratInput, ContratLabel, FilterCard } from '@/styles/Category/Filter';
import { Row, Title } from '@/styles/Global';
import React, { useState } from 'react';

type ContratsProps = {
  onFilterChange: (filterName: string, value: any) => void;
};

const Contrats: React.FC<ContratsProps> = ({ onFilterChange }) => {
  const [isContrat, setIsContrat] = useState(false);

  const handleContratChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsContrat(e.target.checked);
    onFilterChange('contracts', e.target.checked);
  };

  return (
    <FilterCard>
      <Row justifyContent='space-between' padding='16px 20px'>
        <Title fsize='16px' fcolor='#5F6B76' textAlign='left' fweight='500'>Kontratlı Ürünler</Title>
        <ContratInput
          id='contratCheck'
          type="checkbox"
          checked={isContrat}
          onChange={handleContratChange}
        />
        <ContratLabel htmlFor='contratCheck'>
          <ContratButton />
        </ContratLabel>
      </Row>
    </FilterCard>
  );
};

export default Contrats;
