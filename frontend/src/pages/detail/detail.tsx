import { Location, Origin } from "../../@interfaces/IFavoriteCharacter";
import { Container, Header, Menu } from "../../components";
import { API_RICK_AND_MORTY } from "../../services";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Content } from "./styles";
import axios from "axios";

interface ICharacterDetail {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  episodesQtd: number;
  createdAt: string;
}

const Detail = () => {
  const [character, setCharacterState] = useState<ICharacterDetail>();
  const params = useParams();

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const characterInfo = await axios.get(
          `${API_RICK_AND_MORTY}/character/${params.characterId}`
        );
        if (!characterInfo.data) {
          throw new Error();
        }
        characterInfo.data.episodesQtd = characterInfo.data.episode.length;
        characterInfo.data.createdAt = new Date(
          characterInfo.data.created
        ).toLocaleDateString();
        setCharacterState(characterInfo.data);
      } catch (e) {
        alert("Unable to perform character search.");
      }
    };

    fetchCharacterData();
  }, []);

  return (
    <>
      <Menu></Menu>
      <Container>
        <Header>
          <h1>Detalhes do Personagem</h1>
        </Header>
        <Content>
          {character && (
            <>
              <div className="image">
                <img src={character.image} alt="" />
              </div>
              <div className="content">
                <h3>{character.name}</h3>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>
                  Apareceu em {character.episodesQtd}
                  {character.episodesQtd && character.episodesQtd > 1
                    ? " episódios"
                    : " episódio"}
                </p>
                <p>Desde {character.createdAt}</p>
              </div>
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Detail;
