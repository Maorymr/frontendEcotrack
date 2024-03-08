import styles from "../styles/Home.module.css";
import Link from "next/link";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src="/image.png" style={{ width: "130px", height: "70px" }} />
        <div className={styles.menuItems}>
          <p
            style={{
              fontWeight: "600",
              border: "1px solid white",
              padding: "13px",
              fontSize: "30px",
              marginTop: "px",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            EcoTrack
          </p>
        </div>
        <div className={styles.hiv}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: "10px",
                backgroundColor: "white",
                padding: "13px",
                borderRadius: "30px",
                width: "100%",
                whiteSpace: "nowrap",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationColor: "green",
              }}
            >
              {" "}
              Acceuil
            </p>
            <p
              style={{
                margin: "10px",
                backgroundColor: "white",
                padding: "13px",
                borderRadius: "30px",
                width: "100%",
                whiteSpace: "nowrap",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationColor: "green",
              }}
            >
              {" "}
              A propos
            </p>
            <p
              style={{
                margin: "10px",
                backgroundColor: "white",
                padding: "13px",
                borderRadius: "30px",
                width: "100%",
                whiteSpace: "nowrap",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationColor: "green",
              }}
            >
              {" "}
              portfolio{" "}
            </p>
            <p
              style={{
                margin: "10px",
                backgroundColor: "white",
                padding: "13px",
                borderRadius: "30px",
                width: "100%",
                whiteSpace: "nowrap",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationColor: "green",
              }}
            >
              pricing
            </p>
            <p
              style={{
                margin: "10px",
                backgroundColor: "white",
                padding: "13px",
                borderRadius: "30px",
                width: "100%",
                whiteSpace: "nowrap",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationColor: "green",
              }}
            >
              {" "}
              Contact{" "}
            </p>
            <button className={styles.secondaryButton}>Connexion</button>
            <button className={styles.secondaryButton}>Inscription</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
