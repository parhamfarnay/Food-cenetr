import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
    </div>
  );
}

export default HomePage;
