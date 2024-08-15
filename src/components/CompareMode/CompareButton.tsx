import { useCompareStore } from '@/lib/compareStore';
import { ContratButton, ContratInput, ContratLabel } from '@/styles/Category/Filter'
import { Row } from '@/styles/Global'
import React, { useState } from 'react'

type CompareButtonProps = {
  handleModal: () => void;
}
const CompareButton: React.FC<CompareButtonProps> = ({handleModal}) => {
  const isModalOpen = useCompareStore((state) => state.isModalOpen);
  const handleChange = () => {
    handleModal();
  }
  return (
    <>
    <Row>
        <ContratInput
          id='compareCheck'
          type="checkbox"
          checked={isModalOpen}
          onChange={handleChange}
        />
        <ContratLabel htmlFor='compareCheck'>
          <ContratButton />
        </ContratLabel>
    </Row>
    </>
  )
}

export default CompareButton