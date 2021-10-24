import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
// import InfoRow from 'views/Nft/components/InfoRow'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnCard from './components/EarnCard'
// import TotalMarketCapCard from './components/TotalMarketCapCard'
import CountdownBanner from './components/CountdownBanner'
import BuyCard from './components/BuyCard'
import Timer from './components/Timer'
import AuditCard from './components/AuditCard'


const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 12px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/shrimps-bg-2.svg'), url('/images/shrimps-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 12px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`


const CTACards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 12px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const PageContainer = styled(Page)`
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-top: 20px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()


  return (
    <>
      <CountdownBanner />
      <PageContainer>
        <Hero>
          <Heading as="h1" size="xxl" color="#FFF">
            {TranslateString(578, 'Witcher DeFi')}
            
          </Heading>
          <CTACards>
          <EarnCard />
          <BuyCard />
        </CTACards>
        </Hero>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
        </Cards>

        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </PageContainer>
    </>
  )
}


export default Home