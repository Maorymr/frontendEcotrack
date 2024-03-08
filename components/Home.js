import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBicycle } from "@fortawesome/free-brands-svg-icons";
import { faAnchor } from "@fortawesome/free-brands-svg-icons";
import Carousel from "./Carousell";
import SimpleSlider from "./SimpleSlider";
import {
  InfiniteMovingCards,
  InfiniteMovingCardsMaory,
} from "./InfiniteMovingCards";
import { SparklesPreview } from "./sparklestext";

export default function ComponentHome() {
  const [showModal, setShowModal] = useState(false);

  // Fonction pour ouvrir la modal
  const openModal = () => {
    setShowModal(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setShowModal(false);
  };
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Ajoutez autant d'images que nécessaire
  ];

  return (
    <div>
      <Header />
      <main className={styles.mainTest}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <SparklesPreview />
            </h1>
            <p className={`${styles.heroSubtitle} z-50 -mt-40`}>
              Ecotrack est une application mobile créée pour calculer votre
              empreinte carbone. Vous aurez accès à votre propre empreinte
              carbone et à celles des autres. Il y aura un classement qui va
              vous permettre de vous concurrencer entre amis ou avec les autres
              !
            </p>
            <div className={styles.heroButtons}>
              <button
                style={{ boxShadow: "4px 4px 0px #085229" }}
                className={styles.secondaryButton}
                onClick={openModal}
              >
                Télécharger maintenant
              </button>
              <button
                className={styles.secondaryButton}
                style={{ boxShadow: "4px 4px 0px #085229" }}
              >
                En savoir plus
              </button>
            </div>
          </div>
          <img src="./double.png" className={styles.heroImage} />
        </div>
        <div className={styles.page2container}>
          <div className={styles.page2}>
            <div className={styles.mini}></div>
            <div className={styles.title}></div>
            <div className={styles.descript}></div>
            <div className={styles.parent1}>
              <img src="/false.png" className={styles.box}></img>
              <img src="/true.png" className={styles.box}></img>
              <img src="/vrai.png" className={styles.box}></img>
              <div className={styles.api}></div>
            </div>
          </div>
        </div>
        <div className={styles.page3}>
          <div className={styles.text}>Voici une image de notre aplication</div>
          <img src="./true.png" className={styles.heroImaze} />
          <div className={styles.text1}>Ceci est votre empreinte Carbone</div>
        </div>
      </main>
      <div className={styles.page6}>
        <h2></h2>
        <InfiniteMovingCardsMaory />
        {/* <img ></img> */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles.bigGht}>
          <div className="carousel" style={{ witdh: "10px" }}></div>
        </div>
        <div className={styles.follow}>Follow Us</div>
      </div>

      <div
        style={{
          height: "300px",
          width: "100%",
          backgroundColor: "#000000",
          display: "flex",
        }}
      >
        <div style={{ height: "100%", width: "50%" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <img src="/image.png" style={{}} className={styles.imgContainer} />
            <p
              style={{
                fontSize: "25px",
                fontWeight: "700",
                marginBottom: "1px",
                paddingBottom: "50px",
                color: "white",
              }}
            >
              ECOTRACK
            </p>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",

              width: "100%",
              height: "100%",

              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: "800", color: "white" }}></p>
              <p className={styles.p}></p>
              <p className={styles.p}></p>
              <p className={styles.p}></p>
              <p className={styles.p}></p>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              width: "100%",
              height: "100%",

              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: "800", color: "white" }}></p>
              <p className={styles.p}></p>
              <p className={styles.p}></p>
              <p className={styles.p}></p>
              <p className={styles.p}></p>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              width: "100%",
              height: "100%",

              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",

                justifyContent: "center",
                gap: "20px",
              }}
            >
              <FontAwesomeIcon
                style={{ height: "30px", cursor: "pointer" }}
                color="white"
                icon={faDiscord}
                onClick={() => window.open("https://discord.gg/9EVjCtubqt")}
              />{" "}
              <FontAwesomeIcon
                style={{ height: "30px", color: "white", cursor: "pointer" }}
                color="white"
                icon={faInstagram}
                onClick={() =>
                  window.open("https://www.instagram.com/ecotrack1/")
                }
              />
              <FontAwesomeIcon
                style={{ height: "30px", cursor: "pointer" }}
                color="white"
                icon={faTiktok}
                onClick={() =>
                  window.open("https://www.tiktok.com/@ecotrack23")
                }
              />{" "}
              <FontAwesomeIcon
                style={{ height: "30px", cursor: "pointer" }}
                color="white"
                icon={faYoutube}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCFVKFtVa6IqnDxR7UjCci3w"
                  )
                }
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        styles={{ height: "30px", display: "flex", justifyContent: "center" }}
      ></div>
    </div>
  );
}
