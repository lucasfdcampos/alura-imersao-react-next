import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} alt="Lucas" />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>

      <ul>
        {/* {communities.slice(0, 6).map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`/users/${itemAtual.title}`}>
                <img src={itemAtual.image} alt={itemAtual.title} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          );
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const githubUser = 'lucasfdcampos';
  const [communities, setComunnities] = React.useState([]);
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'peas',
    'diego3g',
    'EliasGcf',
    'omariosouto',
    'rafaballerini',
    'filipedeschamps',
    'juunegreiros',
    'edgardmessias',
  ];

  const [followers, setFollowers] = React.useState([]);

  React.useEffect(function () {
    fetch('https://api.github.com/users/lucasfdcampos/followers')
      .then(function (response) {
        return response.json();
      })
      .then(function (response2) {
        setFollowers(response2);
      });

    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '919205afc9936192ecb05fb3e9b7de',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
        allCommunities {
          id,
          title,
          imageUrl,
          creatorSlug
        }
      }`,
      }),
    })
      .then((response) => response.json())
      .then((response2) => {
        setComunnities(response2.data.allCommunities);
      });
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCreateCommunity(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                const community = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                };
                setComunnities([...communities, community]);
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBox title="Seguidores" items={followers} />

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>

            <ul>
              {communities.slice(0, 6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/communities/${itemAtual.id}`}>
                      <img src={itemAtual.imageUrl} alt={itemAtual.title} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.slice(0, 6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img
                        src={`https://github.com/${itemAtual}.png`}
                        alt={itemAtual}
                      />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
