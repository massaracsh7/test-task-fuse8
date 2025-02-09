import { Link } from "react-router-dom";
import { CharacterArray } from "../../types/types";
import styles from "./CardsList.module.css";
import formatDate from "../../utils/formatDate";
import { getStatusClass } from "../../utils/statusClass";

interface CardsListProps {
  characters: CharacterArray;
}

const CardsList: React.FC<CardsListProps> = ({ characters }) => {

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
                  tabIndex={0}
                  aria-label={`View details of ${character.name}`}
                >
                  <p>{character.name}</p>
                  <div className={styles.cardsBottom}>
                    <p>
                      Status:
                      <span className={getStatusClass(character.status)}>
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
