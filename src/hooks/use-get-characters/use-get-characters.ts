import {useEffect, useState} from "react";
import {Character} from "@/types";
import {characterApi} from "@/api/character/character.api.ts";
import {useDebounce} from "@/hooks";

export const useGetCharacters = (searchValue: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const debouncedValue = useDebounce(searchValue)

  const getCharacter = (searchValue: string) => {
    if (debouncedValue.length <= 3) {
      setCharacters([])
    } else {
      setIsLoading(true);
      characterApi.getCharacters(searchValue).then(characters => {
        setCharacters(characters);
        setIsLoading(false);
      }).catch(error => {
        setCharacters([]);
        setError(error?.message || 'something went wrong');
        setIsLoading(false);
      });
    }
  }

  useEffect(() => {
    getCharacter(debouncedValue)
  }, [debouncedValue])

  return {
    data: characters,
    isLoading,
    error
  }
}