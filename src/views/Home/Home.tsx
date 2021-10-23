import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, LinkExternal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import StakeAssetCard from './components/StakeAssetCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import PancakeCard from './components/PancakeCard'
import EarnAPRCard from './components/EarnAPRCard'
import AuditCard from './components/AuditCard'
import CountDown from "./CountDown";

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
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
  margin-bottom: 48px;

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


const HeadingContainer = styled(Page)`
  width: 395px;
  height: 180px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
   
	<PageContainer>
 
	<Hero>
    <SecondRow>
	<div>
          <TotalValueLockedCard />
	</div>	  
		  
		  

        <a href="https://jagosafer.io/sapphire-defi">
    <img src="images/egg/33.png"
         alt="JaGo KYC" /></a>
		 
		<a href="/">
    <img src="images/egg/34.png"
         alt="RugDoc Review" /></a>
         


        </SecondRow>
<CountDown/>
 </Hero>
 
 
      <div>
        <Cards>
		  <FarmStakingCard />
          <CakeStats />
        </Cards>
      </div>
	  <TwitterCard />
  
	</PageContainer>
  
  )
}

export default Home
