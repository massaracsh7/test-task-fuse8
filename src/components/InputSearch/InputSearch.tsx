import styles from "./InputSearch.module.css";

interface InputSearchProps {
  setSearch: (query: string) => void;
  search: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ setSearch, search }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLInputElement).value.toLowerCase().trim();
    setSearch(text);
    localStorage.setItem("textQuery", text);
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
