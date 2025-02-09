import { useEffect, useRef, useState } from "react";
import styles from "./InputSearch.module.css";

interface InputSearchProps {
  setSearch: (query: string) => void;
  search: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ setSearch, search }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setError("Only Latin letters and spaces are allowed");
      return;
    }

    setError("");
    setSearch(value.toLowerCase());
  };

  return (
    <div className={styles.inputContainer}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={handleChange}
        className={styles.inputSearch}
        aria-label="Search characters by name"
        aria-invalid={!!error}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputSearch;
