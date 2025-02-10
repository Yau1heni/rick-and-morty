import {Nullable} from "@/types";

type Info = {
  count: number;
  pages: number;
  next: Nullable<string>;
  prev: Nullable<string>;
};

export type CharacterStatus = "Alive" | "Dead" | "unknown";
type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

type ExtraData = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: ExtraData;
  location: ExtraData;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterResponse = {
  info: Info;
  results: Character[];
};