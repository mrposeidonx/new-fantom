import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'


const StyledEarnCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`


const EarnCard = () => (
  <StyledEarnCard>
    <CardBody>
      <Heading>
        Earn $WITCHER in our{' '}
        <a href="https://witcherdefi.com/farms" style={{ color: '#bd1220' }}>
          farms
        </a>{' '}
        and{' '}
        <a href="https://witcherdefi.com/pools" style={{ color: '#bd1220' }}>
          pools
        </a>{' '}
        🤑
      </Heading>
    </CardBody>
  </StyledEarnCard>
)


export default EarnCard