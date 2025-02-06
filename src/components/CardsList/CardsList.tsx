import { Link } from "react-router-dom";
import { CharacterArray } from "../../types/types";
import styles from "./CardsList.module.css";
import formatDate from "../../utils/formatDate";

interface CardsListProps {
  characters: CharacterArray;
}

const CardsList: React.FC<CardsListProps> = ({ characters }) => {
  const colorText = (status: string): string => {
    if (status === "Alive") {
      return styles.green;
    } else if (status === "Dead") {
      return styles.red;
    } else {
      return styles.grey;
    }
  };

  return (
    <>
      {characters && (
        <ul className={styles.cardsList}>
          {characters.map((character) =>
            character ? (
              <li key={character.id} className={styles.cardsItem}>
                <Link
                  to={`/character/${character.id}`}
                  className={styles.cardsLink}
                >
                  <p>{character.name}</p>
                  <div className={styles.cardsBottom}>
                    <p>
                      Status:{" "}
                      <span className={colorText(character.status)}>
                        {character.status}
                      </span>
                    </p>
                    <p>Created: {formatDate(character.created)}</p>
                  </div>
                </Link>
              </li>
            ) : null
          )}
        </ul>
      )}
    </>
  );
};

export default CardsList;
