import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px 16px;
  color: ${(props) => props.theme.corBG};
  font-size: 10px;
  font-weight: 700;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  postion: sticky;
  top: 80px;
  left: 0px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
