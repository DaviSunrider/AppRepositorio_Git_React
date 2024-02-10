import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corBG};
  font-size: 14px;
  background-color: ${(props) => props.theme.corBGBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
