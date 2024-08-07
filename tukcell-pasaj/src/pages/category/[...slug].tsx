import ProductList from '@/components/Category/ProductList'
import Slider from '@/components/Category/Slider'
import CompareButton from '@/components/CompareMode/CompareButton'
import Filter from '@/components/Filter'
import Pagination from '@/components/Filter/Pagination'
import { Column, Container, Row, Title } from '@/styles/Global'


const category = () => {
  return (
    <>
      <Container>
        <Title fsize='32px' fweight='700' margin='20px 0'>Category</Title>
        <Row alignItems='center' justifyContent='flex-end' gap='10px'>
            <Title fsize='18px' fweight='700' fcolor='#5F6B76'>Karşılaştırma Modu</Title>
            <CompareButton />
          </Row>
        <Row>
          <Column width='30%' justifyContent='flex-start' alignItems='flex-start'>
            <Filter />
          </Column>
          <Column width='70%' justifyContent='0' alignItems='0'>
         
          <Row>
            <Slider />
          </Row>
          <Row>
            <ProductList />
          </Row>
          <Row>
            <Pagination />
          </Row>
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default category