import { useEffect, useRef } from "react";
import styles from "./InputSearch.module.css";

interface InputSearchProps {
  setSearch: (query: string) => void;
  search: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ setSearch, search }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-z\s]*$/i.test(e.target.value)) return;
    setSearch(e.target.value.toLowerCase().trim());
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search characters..."
      value={search}
      onChange={handleChange}
      className={styles.inputSearch}
    />
  );
};

export default InputSearch;
