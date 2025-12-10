import Titulo from '../../components/Titulo'
import P from '../../components/Paragrafo'

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre</Titulo>
        <Paragrafo tipo="secundario">
            lorem ipsum mdkosdm lsdçm msd kmdslkdm
            lksndl nslknd lksnddmnkslndklsndlks
            dnlksndlksndlksndlksndjnsjndjsnd
            sndlksndlsndjsndlsnjdlsd
            dskndlskdslkdsjndbhbdedfmdknfpnmkdnclk
            dncdjbfdlfnlkanf
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=Michel07062007&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Michel07062007&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre
