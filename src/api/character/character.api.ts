import {instance} from "../api.config.ts";
import {CharacterResponse} from "@/types";

export const characterApi = {
  async getCharacters(searchTerms: string) {
    const res = await instance.get<CharacterResponse>(`/character?name=${searchTerms}`);
    return res.data.results;
  },
};