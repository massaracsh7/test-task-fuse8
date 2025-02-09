import { Character } from "../../types/types";
import styles from "./DetailInfo.module.css";

interface DetailInfoProps {
  character: Character;
}

const DetailInfo: React.FC<DetailInfoProps> = ({ character }) => {
  return (
    <div className={styles.detailWrapper}>
      {character.image && character.image.trim().length > 0 ? (
        <img
          src={character.image}
          alt={character.name}
          className={styles.detailImage}
        />
      ) : (
        <div className={styles.placeholderImage}>No image available</div>
      )}
      <h4 className={styles.detailName}>{character.name}</h4>
      <p>
        <b>Status: </b>
        {character.status}
      </p>
      <p>
        <b>Gender: </b>
        {character.gender}
      </p>
      <p>
        <b>Species: </b>
        {character.species}
      </p>
      <p>
        <b>Location: </b>
        {character.location.name}
      </p>
      <p>
        <b>Origin: </b>
        {character.origin.name}
      </p>
    </div>
  );
};

export default DetailInfo;
