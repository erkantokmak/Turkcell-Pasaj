import { getAllCampaigns } from '@/lib/server';
import { CampaignsContainer, CampaignsContent, CampaignsImage } from '@/styles/Campaigns';
import { Column, Container, Row, Title } from '@/styles/Global'
import { BlueButton } from '@/styles/Products/DetailPage';
import { Campaign } from '@/types/campaigns';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'

const campaigns = () => {
    const { data: campaigns } = useQuery<Campaign[]>({
        queryKey: ["campaigns"],
        queryFn: getAllCampaigns,
    });
    return (
        <>
            <Container>
                <>
                    {
                        campaigns?.map((campaign) => (
                            <CampaignsContainer>
                                <Row>
                                    <CampaignsImage>
                                        <Image src={`/images/campaigns/${campaign.image}`} alt='Kampanya' fill objectFit='cover' />
                                    </CampaignsImage>
                                    <CampaignsContent>
                                        <Column alignItems='flex-start'>
                                            <Title fsize='1.3125rem' fweight='700' fcolor='#253342' lineHeight='1.24' textAlign='start'>
                                                {campaign.name}
                                            </Title>
                                            <Title fsize='1rem' fcolor='#5f6b76' lineHeight='1.5' margin='0 0 2.5rem 0' textAlign='start'>
                                                {campaign.description}
                                            </Title>
                                            <BlueButton width='200px' display='block'>Devamı</BlueButton>
                                        </Column>
                                    </CampaignsContent>
                                </Row>
                            </CampaignsContainer>
                        ))
                    }
                </>
            </Container>
        </>
    )
}

export default campaigns