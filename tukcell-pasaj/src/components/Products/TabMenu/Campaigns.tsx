import { getAllCampaigns } from '@/lib/server'
import { CampaignsContainer, CampaignsContent, CampaignsImage } from '@/styles/Campaigns'
import { Column, Container, Row, Title } from '@/styles/Global'
import { BlueButton } from '@/styles/Products/DetailPage'
import { Campaign } from '@/types/campaigns'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

export const getStaticProps = async () => {
  const queryclient = new QueryClient();
  await queryclient.prefetchQuery(
    {
      queryKey: ['campaigns'],
      queryFn: getAllCampaigns,
    }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryclient),
    }
  }
}
const Campaigns: React.FC = () => {
  const { data: campaigns } = useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: getAllCampaigns,
  });

  return (
    <>
      <Container>
        <Row margin='80px 0 40px 0'>
          <Title fsize='1rem' fcolor='#5F6B76' >Anlaşmalı olduğumuz bankalarla alışverişini kredi kartına taksit seçeneği ile hızlı, kolay ve güvenli bir şekilde tamamlayabilirsin.</Title>
        </Row>
        {
          campaigns?.slice(0, 2).map((campaign) => (
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
      </Container>
    </>
  )
}

export default Campaigns