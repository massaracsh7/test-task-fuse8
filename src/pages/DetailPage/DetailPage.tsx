import { useEffect, useMemo, useState } from "react";
import { Character, defaultCharacter } from "../../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter } from "../../utils/api";

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
    return (
      <div>
        <img src={character.image} />
        <h4 className="detail__name">{character.name}</h4>
        <p>
          <b>Status:</b>
          {character.status}
        </p>
        <p>
          <b>Gender:</b> {character.gender}
        </p>
        <p>
          <b>Species:</b> {character.species}
        </p>
        <p>
          <b>Loctaion:</b> {character.location.name}
        </p>
        <p>
          <b>Origin:</b> {character.origin.name}
        </p>
      </div>
    );
  }, [character, loading]);

  const goBack = () => {
    navigation("/", { replace: true });
  };

  return (
    <>
      <button onClick={goBack}>back</button>
      <div>{viewDetails}</div>
    </>
  );
};

export default DetailPage;
