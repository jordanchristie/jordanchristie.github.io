import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterWrapper>
    <small>
      © Copyright {new Date().getFullYear()} -{' '}
      <span style={{ fontWeight: 'bold' }}>Jordan Christie</span>
    </small>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  color: #333;
  text-align: center;
`
