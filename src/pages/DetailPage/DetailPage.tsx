import { useEffect, useState, useCallback } from "react";
import { Character } from "../../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter } from "../../utils/api";
import DetailInfo from "../../components/DetailInfo/DetailInfo";
import styles from "./DetailPage.module.css";

const DetailPage: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const detailId = id ? parseInt(id, 10) : null;

  useEffect(() => {
    if (detailId === null || isNaN(detailId)) {
      setError("Invalid character ID");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getCharacter(detailId);
        if (data) {
          setCharacter(data);
        } else {
          setError("Character not found");
        }
      } catch (err) {
        console.error("Failed to load data", err);
        setError("Failed to load character data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [detailId]);

  const goBack = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className={styles.detailPage}>
      <button className={styles.buttonBack} onClick={goBack}>
        To Main Page
      </button>
      {loading && <div>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && character && <DetailInfo character={character} />}
    </div>
  );
};

export default DetailPage;
