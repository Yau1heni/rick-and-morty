import './app.css'
import {CardsList, SearchField} from "@/components";
import {useState} from "react";
import {useGetCharacters} from "@/hooks";
import {REQUIRED_LENGTH_SEARCH_TERMS} from "@/constants";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const {data, isLoading} = useGetCharacters(searchValue);

  return (
    <>
      <SearchField key={searchValue} isLoading={isLoading} quantity={data.length} value={searchValue} onChange={setSearchValue}/>
      <CardsList cards={data} isLoading={isLoading} isValidSearchTerms={searchValue.length > REQUIRED_LENGTH_SEARCH_TERMS}/>
    </>
  )
}

export default App

