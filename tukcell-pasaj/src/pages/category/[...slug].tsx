import ProductList from '@/components/Category/ProductList';
import Slider from '@/components/Category/Slider';
import CompareButton from '@/components/CompareMode/CompareButton';
import CompareModal from '@/components/CompareMode/CompareModal';
import Filter from '@/components/Filter';
import Pagination from '@/components/Filter/Pagination';
import { useCompareStore } from '@/lib/compareStore';
import { fetchProductsByCategory } from '@/lib/server';
import { CompareModalContainer, CompareModalContent } from '@/styles/Compare';
import { Column, Container, Row, Title } from '@/styles/Global';
import { Product } from '@/types/product';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { useMemo, useState } from 'react';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string[] };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['products', slug, 1],
    queryFn: () => fetchProductsByCategory(slug, 1),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};


type CategoryProps = {
  slug: string[];
};

const Category: React.FC<CategoryProps> = ({ slug  }) => {
  const toggleModal = useCompareStore((state) => state.toggleModal);
  const isModalOpen = useCompareStore((state) => state.isModalOpen);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery({
    queryKey: ['products', slug, currentPage],
    queryFn: () => fetchProductsByCategory(slug, currentPage),
  });

  const handleModal = () => {
    toggleModal();
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  type Filters = {
    sortBy: string;
    brand: string[];
    priceRange: number[];
    seller: string[];
    contracts: boolean;
    subCategory: string;
  }

  const [filters, setFilters] = useState<Filters>({
    sortBy: '',
    brand: [],
    priceRange: [0, 1000000000],
    seller: [],
    contracts: false,
    subCategory: '',
  });

  const handleFilterChange = (filterName: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  useMemo(() => {
    setFilters({
      sortBy: '',
      brand: [],
      priceRange: [0, 1000000000],
      seller: [],
      contracts: false,
      subCategory: '',
    })
  }, [slug]);

  const filteredData = useMemo(() => {
    if (!data) return [];

    let filtered = data;

    switch (filters.sortBy) {
      case 'mostPopular':
        filtered = filtered.filter((product: Product) => product.bestSeller);
        break;
      case 'newArrivals':
        filtered = filtered.filter((product: Product) => product.newArrival);
        break;
      case 'lowestPrice':
        filtered = filtered.sort((a: Product, b: Product) => a.price - b.price);
        break;
      case 'highestPrice':
        filtered = filtered.sort((a: Product, b: Product) => b.price - a.price);
        break;
      case 'highestRating':
        filtered = filtered.sort((a: Product, b: Product) => b.rating - a.rating);
        break;
      default:
        break;
    }
    if (filters.subCategory && filters.subCategory.length > 0) {
      filtered = filtered.filter((product: Product) => filters.subCategory.includes(product.subCategory));
    }

    if (filters.brand && filters.brand.length > 0) {
      filtered = filtered.filter((product: Product) => filters.brand.includes(product.brand));
    }
    if (filters.priceRange && filters.priceRange.length > 0) {
      filtered = filtered.filter((product: Product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);
    }

    if (filters.seller && filters.seller.length > 0) {
      filtered = filtered.filter((product: Product) => filters.seller.includes(product.seller));
    }
    if (filters.contracts) {
      filtered = filtered.filter((product: Product) => product.credit === filters.contracts);
    }

    return filtered;
  }, [data, filters]);

  return (
    <>
    <Container>
      <Title fsize='32px' fweight='700' margin='20px 0'>Ürünler</Title>
      <Row alignItems='center' justifyContent='flex-end' gap='10px'>
        <Title fsize='18px' fweight='700' fcolor='#5F6B76'>Karşılaştırma Modu</Title>
        <CompareButton handleModal={handleModal}/>
      </Row>
      <Row justifyContent='center' alignItems='flex-start'>
        <Column xs={12} md={3} lg={3} justifyContent='flex-start' alignItems='flex-start'>
          <Filter onFilterChange={handleFilterChange} data={data} />
        </Column>
        <Column xs={12} md={9} lg={9} justifyContent='0' alignItems='0'>
          <Row width='100%'>
            <Slider />
          </Row>
          <Row>
            <ProductList data={filteredData} />
          </Row>
          <Row width='100%'>
          <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(data.length / 12)}
              onPageChange={handlePageChange}
            />
          </Row>
        </Column>
      </Row>

    </Container>
    {
      isModalOpen && (<CompareModal />)
    }
    </>
  );
};

export default Category;
