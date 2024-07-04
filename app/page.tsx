import styles from "./global.module.css";
import { ReactElement } from "react";
import CardsLoader from "./hoc/CardsLoader";

const Home = (): ReactElement => {
  return (
    <main className={styles.main}>
      <CardsLoader />
    </main>
  );
};

export default Home;
