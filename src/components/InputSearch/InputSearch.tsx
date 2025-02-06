import { useState } from "react";
import styles from "./InputSearch.module.css";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={styles.inputSearch}
    />
  );
}

export default InputSearch