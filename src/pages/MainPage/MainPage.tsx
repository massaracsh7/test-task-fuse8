import { useEffect, useState } from "react";
import CardsList from "../../components/CardsList/CardsList";
import InputSearch from "../../components/InputSearch/InputSearch";
import { searchCharacters } from "../../utils/api";
import { CharacterArray } from "../../types/types";

const MainPage = () => {
  const [search, setSearch] = useState(localStorage.getItem("textQuery") ?? "");
  const [loading, setLoading] = useState(false);
  const [textError, setError] = useState("");
  const [characters, setCharacters] = useState<CharacterArray>([]);
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    const getData = async () => {
        if (search.length < 3) {
          setCharacters([]);
          return; 
        }
      setLoading(true);
      setError("");
      try {
        const data = await searchCharacters(search);
        if (data?.results && data.results.length > 0) {
          setCharacters(data.results);
          setCounts(data.info.count);
          setLoading(false);
        } else {
          setLoading(false);
          setError("Sorry, your character is not found. Please, try again.");
          setCharacters([]);
          setCounts(0);
        }
      } catch (error) {
        setLoading(false);
        setError("Failed to load data. Please try again.");
        setCounts(0);
        console.error("Failed to load data", error);
      }
    };

    if (search) {
      getData();
    } else {
      setCharacters([]);
      setCounts(0);
    }
  }, [search]);

  return (
    <>
      <InputSearch setSearch={setSearch} search={search} />
      {counts > 0 && <div>Found characters: {counts}</div>}
      {loading ? <p>Loading...</p> : <CardsList characters={characters} />}
      {textError && <p>{textError}</p>}
    </>
  );
};

export default MainPage;
