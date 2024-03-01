import styles from "../styles/Home.module.css";
import Header from "./Header";

export default function ComponantHome() {
  return (
    <div>
      <Header />
      <main className={styles.mainTest}>
        <div
          style={{ height: "100vh", backgroundColor: "rgba(0, 255, 0, 0.301)" }}
        >
        </div>
        <div className={styles.div2}>
        <div className={styles.insc}>inscription</div>
        <div className={styles.app}>S'incrire avec Apple</div>
        <div className={styles.goo}>S'incrire avec Google</div>
        <div className={styles.ou}>ou</div>
        <div className={styles.cree}>Crée  un compte</div>
        <div className={styles.deja}>Vous avez déjà un compte</div>
        <div className={styles.conn}>Se connecter</div>
        </div>
      </main>
    </div>
  );
}
