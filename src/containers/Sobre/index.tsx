import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eum
      voluptatem deserunt quo eveniet eligendi ratione quaerat nisi dolore ipsum
      rerum illo molestias quia, cum, inventore nihil officiis! Obcaecati,
      totam.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DaviSunrider&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DaviSunrider&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
