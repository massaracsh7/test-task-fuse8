import styles from "./InputSearch.module.css";

interface InputSearchProps {
  setSearch: (query: string) => void;
  search: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ setSearch, search }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem("textQuery", e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={search}
      onChange={handleChange}
      className={styles.inputSearch}
    />
  );
};

export default InputSearch;
