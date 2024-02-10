import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Davi Sunrider</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        @DaviSunrider
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Designer / Front-End
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
