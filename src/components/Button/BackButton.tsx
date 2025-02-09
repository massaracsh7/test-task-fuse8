import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  return (
    <button
      className={styles.buttonBack}
      onClick={goBack}
      aria-label="Go back to the main page"
    >
      To Main Page
    </button>
  );
};

export default BackButton;