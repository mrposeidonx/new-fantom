import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledRules = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-image: url('/images/egg/info.png');
  background-repeat: no-repeat;
  background-position: right;
  min-height: 376px;
  background-size: cover;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 8px;
`

// toChange

const Rules = () => {
  const TranslateString = useI18n()

  return (
    <StyledRules>
      <CardBody>
        <Heading color="white" size="xl" mb="24px">
          Information and Rules
        </Heading>
        <ul>
          <Row><li> Audited By Techrate </li></Row>
          <Row><li> Layered Farming. Stake GRZ or GRZX to Earn Layer 2 Tokens </li></Row>
          <Row><li> Buyback and Burn Mechanism </li></Row>
          <Row><li> Deflationary Mechanism with 2% Transfer Tax </li></Row>
          <Row><li> Automatic Emission Reduction  </li></Row>
          <Row><li> Anti-Whale Mechanism</li></Row>
          <Row><li> Initital Liquidity Will Be Burned </li></Row>
          <Row><li> 1/4 of the desposit fees used for buybacks </li></Row>
          <Row><li> Migrator Code Removed </li></Row>
          <Row><li> HIGH RISK. Understand the Risks! </li></Row>
        </ul>
      </CardBody>
    </StyledRules>
  )
}

export default Rules
