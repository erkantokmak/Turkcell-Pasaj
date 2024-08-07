import { ContratButton, ContratInput, ContratLabel } from '@/styles/Category/Filter'
import { Row } from '@/styles/Global'
import React, { useState } from 'react'

const CompareButton = () => {
    const [isCompare, setIsCompare] = useState(false);
  return (
    <Row>
        <ContratInput
          id='compareCheck'
          type="checkbox"
          checked={isCompare}
          onChange={e => setIsCompare(e.target.checked)}
        />
        <ContratLabel htmlFor='compareCheck'>
          <ContratButton />
        </ContratLabel>
    </Row>
  )
}

export default CompareButton