import { Character } from "../../types/types";
import styles from "./DetailInfo.module.css";

interface DetailInfoProps {
  character: Character;
}

const DetailInfo: React.FC<DetailInfoProps> = ({ character }) => {
  return (
    <div className={styles.detailWrapper}>
      <img src={character.image} />
      <h4 className={styles.detailName}>{character.name}</h4>
      <p>
        <b>Status: </b>
        {character.status}
      </p>
      <p>
        <b>Gender: </b>{character.gender}
      </p>
      <p>
        <b>Species: </b>{character.species}
      </p>
      <p>
        <b>Loctaion: </b>{character.location.name}
      </p>
      <p>
        <b>Origin: </b>{character.origin.name}
      </p>
    </div>
  );
};

export default DetailInfo;
