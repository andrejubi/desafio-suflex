import { FavoriteCharacter } from "../../@interfaces/IFavoriteCharacter";
import { Key, useEffect, useState } from "react";
import { API_LOCAL } from "../../services";
import { Content } from "./styles";
import api from "../../services/api";
import {
  Card,
  Container,
  Header,
  Menu,
  NoResultsFound,
} from "../../components";

const FavoriteCharactersPage = () => {
  const [favoriteCharacterState, setFavoriteCharacterState] = useState(false);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    const fetchFavoriteCharacters = async () => {
      try {
        const characters = await api.get(`${API_LOCAL}/favorite-character`);

        if (!characters.data || !characters.data.favoriteCharacters) {
          throw new Error();
        }
        setFavoriteCharacters(characters.data.favoriteCharacters);
      } catch (e) {
        setFavoriteCharacters([]);
      }
    };
    fetchFavoriteCharacters();
  }, [favoriteCharacterState]);

  const setFavoriteCharacter = async (character: FavoriteCharacter) => {
    try {
      const favoriteCharacterSavedOrRemoved = await api.post(
        `${API_LOCAL}/favorite-character`,
        {
          id_api: character?.id_api,
          name: character?.name,
          status: character?.status,
          species: character?.species,
          type: character?.type,
          gender: character?.gender,
          origin: character?.origin,
          location: character?.location,
          image: character?.image,
          episode: character?.episode,
          url: character?.url,
          created: character?.created,
        }
      );

      if (
        !favoriteCharacterSavedOrRemoved.data ||
        !favoriteCharacterSavedOrRemoved.data.result
      ) {
        throw new Error();
      }
      setFavoriteCharacterState(!favoriteCharacterState); // force use effect
    } catch (e) {
      alert("This action could not be performed!");
    }
  };

  return (
    <>
      <Menu></Menu>
      <Container>
        {favoriteCharacters && favoriteCharacters.length ? (
          <Header>
            <h4>Estes são seus Personagens favoritos</h4>
          </Header>
        ) : (
          <NoResultsFound
            title="No characters found"
            subtitle="No characters have been favorited"
          />
        )}

        <Content>
          {favoriteCharacters &&
            favoriteCharacters.map((character: FavoriteCharacter, key: Key) => (
              <Card
                key={key}
                link={`/detail/${character.id_api}`}
                title={character.name}
                image={character.image}
                checkedStar={true}
                handleClick={() => setFavoriteCharacter(character)}
              ></Card>
            ))}
        </Content>
      </Container>
    </>
  );
};

export default FavoriteCharactersPage;
