import { Container, Row } from '@/styles/Global';
import { ProductTabItem, ProductTabMenu } from '@/styles/Products/DetailPage';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Explanation from './Explanation';
import Details from './Details';
import Reviews from './Reviews';
import Faqs from './Faqs';
import CreditCart from './CreditCart';
import Campaigns from './Campaigns';
import CancellationRefund from './CancellationRefund';
import { Navigation } from 'swiper/modules';
import { Product } from '@/types/product';


type ProductTabsProps = {
    data: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs: string[] = ["Ürün Açıklamaları", "Ürün Özellikleri", "Değerlendirmeler", "Ürün Soru&Cevapları", "Kredi Kartı Taksit Seçenekleri", "Banka Kampanyaları", "İptal/İade Koşulları"];

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return <Explanation data={data} />;
            case 1:
                return <Details data={data} />;
            case 2:
                return <Reviews data={data} />;
            case 3:
                return <Faqs data={data} />;
            case 4:
                return <CreditCart data={data} />;
            case 5:
                return <Campaigns />;
            case 6:
                return <CancellationRefund />;
            default:
                return <Explanation data={data} />;
        }
    };

    return (
        <>
            <Row>
                <ProductTabMenu>
                    <Container>
                        <Swiper
                            spaceBetween={10}
                            breakpoints={
                                {
                                    0: {
                                        slidesPerView: 2
                                    },
                                    768: {
                                        slidesPerView: 4
                                    },
                                    1200: {
                                        slidesPerView: 5
                                    }
                                }
                            }
                            navigation
                            modules={[Navigation]}
                        >
                            {tabs.map((tab, index) => (
                                <SwiperSlide key={index}>
                                    <ProductTabItem onClick={() => setActiveTab(index)} active={activeTab === index}>{tab}</ProductTabItem>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Container>
                </ProductTabMenu>
            </Row>
            {renderContent()}
        </>
    )
}

export default ProductTabs