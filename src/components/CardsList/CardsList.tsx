import styles from "./CardsList.module.css";

const CardsList = () => {
  return (
    <div>
      CardsList
      <ul className={styles.cardsList}>
        <li className={styles.cardsItem}>1</li>
        <li className={styles.cardsItem}>2</li>
        <li className={styles.cardsItem}>3</li>
        <li className={styles.cardsItem}>4</li>
        <li className={styles.cardsItem}>5</li>
        <li className={styles.cardsItem}>6</li>
        <li className={styles.cardsItem}>7</li>
        <li className={styles.cardsItem}>8</li>
      </ul>
    </div>
  );
};

export default CardsList;
