import { useEffect, useState } from "react";
import CardsList from "../../components/CardsList/CardsList";
import InputSearch from "../../components/InputSearch/InputSearch";

import styles from "./MainPage.module.css";
import useCharacterSearch from "../../hooks/useCharacterSearch";
import Loader from "../../components/Loader/Loader";

const MainPage = () => {
const [search, setSearch] = useState<string>(
  localStorage.getItem("textQuery") ?? ""
);

useEffect(() => {
  localStorage.setItem("textQuery", search);
}, [search]);

const { loading, characters, counts, error } = useCharacterSearch(search);

  return (
    <>
      <div className={styles.mainWrapper}>
        <InputSearch setSearch={setSearch} search={search} />
        {counts > 0 && (
          <div className={styles.mainCount}>Found characters: {counts}</div>
        )}
      </div>
      {loading ? <Loader /> : <CardsList characters={characters} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default MainPage;
