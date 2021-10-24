import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import PageContainer from 'components/layout/Container'


const StyledCountdownBanner = styled.div`
  background: #21223b;
`


const Container = styled(PageContainer)`
  padding-bottom: 24px;
  padding-top: 24px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
  }
`


const Countdown = styled.div`
  font-size: 24px;
  line-height: 110%;
  white-space: nowrap;
  color: white;
`


const CountdownBanner = () => (
  <StyledCountdownBanner>
    <Container>
      <Countdown>
        Farming opens on block{' '}
        <a href="https://ftmscan.com/block/countdown/20422525" style={{ color: '#88bbdb' }}>
        20422525
        </a>
        .
      </Countdown>
    </Container>
  </StyledCountdownBanner>
)


export default CountdownBanner