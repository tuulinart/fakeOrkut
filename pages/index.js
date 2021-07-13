import MainGrid from "../src/components/MainGrid/index"
import Box from "../src/components/Box/index"
import {AlurakutMenu, OrkutNostalgicIconSet} from "../src/lib/FakeorkutCommons";
import {ProfileRelationsBoxWrapper} from "../src/components/ProfileRelations/index"

function ProfileSidebar(propriedades) {
  console.log(propriedades)
    return (
      <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius:"8px"}} />
      </Box>
    )
  }

export default function Home() {

  const githubUser = "tuulinart"; 
  const personsFav = ["KaueCesar", "juunegreiros", "omariosouto", "peas", "felipefialho"]

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: "profileArea"}}>
      <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
      <Box className="title">
        <h1>
          Bem vindo

        <OrkutNostalgicIconSet />
        </h1>
      </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da comunidade ({personsFav.length})
        </h2>

        {personsFav.map((itemAtual) => {
          return (
            <ul>
              {personsFav.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          );
        })}
      </ProfileRelationsBoxWrapper>
      
      <Box>
        Comunidades
      </Box>
      </div>
     
    </MainGrid>
    </>
  )
}
