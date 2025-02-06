import { useEffect, useMemo, useState } from "react";
import { Character, defaultCharacter } from "../../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter } from "../../utils/api";
import DetailInfo from "../../components/DetailInfo/DetailInfo";
import styles from "./DetailPage.module.css";

const DetailPage = () => {
  const [character, setCharacter] = useState<Character>(defaultCharacter);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const detailId = params.id ?? 0;
  const navigation = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getCharacter(+detailId);
        if (data) {
          setCharacter(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error("Failed to load data", error);
      }
    };
    getData();
  }, [detailId]);

  const viewDetails = useMemo(() => {
    if (loading) return <div>Loading...</div>;
    return <DetailInfo character={character} />;
  }, [character, loading]);

  const goBack = () => {
    navigation("/", { replace: true });
  };

  return (
    <>
      <button className={styles.buttonBack} onClick={goBack}>
        To Main Page
      </button>
      {viewDetails}
    </>
  );
};

export default DetailPage;
