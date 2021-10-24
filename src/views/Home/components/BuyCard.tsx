import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'


const StyledBuyCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`


const BuyCard = () => (
  <StyledBuyCard>
    <CardBody>
      <Heading>
        Buy $WITCHER !{' '}
        <a href="https://spookyswap.finance/swap" style={{ color: '#bd1220' }}>
          Buy Now
        </a>{' '}
      </Heading>
    </CardBody>
  </StyledBuyCard>
)


export default BuyCard