import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const platinPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = platinPrice.times(circSupply);

  let fSapphirePerBlock = 0;
  if(farms && farms[0] && farms[0].fSapphirePerBlock){
    fSapphirePerBlock = new BigNumber(farms[0].fSapphirePerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading color="white" size="xl" mb="24px">
          {TranslateString(534, 'WITCHER Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="FTM Price " />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
		<Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10023, 'Maximum Supply')}</Text>
          10,000
        </Row>		
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New WITCHER/block')}</Text>
          <Text bold fontSize="14px">{TranslateString(539, '0.001')}</Text>
        </Row>
      </CardBody>
	  
{/* 
  
        <a href="/pools">
    <img src="images/egg/32.png"
         alt="RugDoc Review" width="624" height="241" /></a>
         
 */}

    </StyledCakeStats>
  )
}

export default CakeStats
