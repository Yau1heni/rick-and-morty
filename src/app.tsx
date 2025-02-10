import './app.css'
import {CardsList, SearchField} from "@/components";
import {useState} from "react";
import {useGetCharacters} from "@/hooks";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const {data, isLoading} = useGetCharacters(searchValue);

  return (
    <>
      <SearchField quantity={data.length} value={searchValue} onChange={setSearchValue}/>
      <CardsList cards={data} isLoading={isLoading}/>
    </>
  )
}

export default App

