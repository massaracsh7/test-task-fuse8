import { Link } from "react-router-dom";
import { CharacterArray } from "../../types/types";
import styles from "./CardsList.module.css";

interface CardsListProps {
  characters: CharacterArray;
}

const CardsList: React.FC<CardsListProps> = ({ characters }) => {
  return (
    <>
      {characters ? (
        <ul className={styles.cardsList}>
          {characters.map((character) => (
            <li key={character.id} className={styles.cardsItem}>
              <Link to={`/character/${character.id}`}>
              <h3>{character.name}</h3>
              <div>
                <p>{character.status}</p>
                <p>{character.created}</p>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No characters found</p>
      )}
    </>
  );
};

export default CardsList;
