import axios, { AxiosResponse } from 'axios';
import { API_PEOPLE, API_RANDOM_PEOPLE } from '../constants';
import { ICharacter, IHomeworld, IListResponse, ISpecie } from '../types';
import { IPost } from '../components/PostsList/types';

export const loadPosts = async (limit): Promise<IPost[]> => {
  const charactersRes = await axios.get(API_PEOPLE) as AxiosResponse<IListResponse<ICharacter[]>>;

  const characters = charactersRes.data.results;

  const randomUserRes = await axios.get(API_RANDOM_PEOPLE) as AxiosResponse;

  const postList: IPost[] = await Promise.all(characters.map(async (character: ICharacter) => {
    let userImage = '';
    let characterSpecie = 'Unknown';
    let characterHomeworld = '';

    const characterHomeworldRes = await axios.get(character.homeworld) as AxiosResponse<IHomeworld>;

    userImage = randomUserRes.data.results[0].picture.medium;
    characterHomeworld = characterHomeworldRes.data.name

    if (character.species[0]) {
      const characterSpecieRes = await axios.get(character.species[0]) as AxiosResponse<ISpecie>
      characterSpecie = characterSpecieRes.data.name;
    }

    return {
      thumbnail: '',
      author: {
        avatar: userImage,
        name: character.name,
        specie: characterSpecie,
        home: characterHomeworld
      }
    };
  }));

  return postList.splice(0, limit);
}
