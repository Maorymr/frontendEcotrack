import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div>
      <Header />
      <main className={styles.mainTest}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Ecotrack</h1>
            <p className={styles.heroSubtitle}>
              Ecotrack est une application mobile créée pour calculer votre
              empreinte carbone. Vous aurez accès à votre propre empreinte
              carbone et à celles des autres. Il y aura un classement qui va
              vous permettre de vous concurrencer entre amis ou avec les autres
              !
            </p>
            <div className={styles.heroButtons}>
              <button
                className={`${styles.primaryButton} ${styles.downloadButton}`}
                onClick={openModal}
              >
                Télécharger maintenant
              </button>
              <button className={styles.secondaryButton}>En savoir plus</button>
            </div>
          </div>
          <img src="./pixel.png" className={styles.heroImage} />
        </div>
        <div className={styles.page2container}>
          <div className={styles.page2}>
            <div className={styles.mini}>bxuozb</div>
            <div className={styles.title}>Titre</div>
            <div className={styles.descript}>description/paragraphe</div>
            <div className={styles.parent1}>
              <div className={styles.box}>box</div>
              <div className={styles.box}>box</div>
              <div className={styles.box}>box</div>
              <div className={styles.box}>box</div>
            </div>
          </div>
        </div>
        <div className={styles.page3}>
          <div className={styles.text}>hfègebize</div>
          <img src="./fixel.png" className={styles.heroImaze} />
          <div className={styles.text1}>hdàzoikfe</div>
        </div>
        <div className={styles.page4}>
          <div className={styles.text2}>
            gd_èzbuivuazfesjqcijk
            <div>fyibvizniergahtthth</div>
            <div className={styles.potent}>
              potential
              <div>customer</div>
            </div>
            <div className={styles.euro}>
              $40.507
              <div>$120.000</div>
            </div>
            <button className={styles.buton}>efzh</button>
          </div>
          <img src="./ght.jpg" className={styles.img} />
        </div>
        <div className={styles.princi}>
          <h2>text principal</h2>
          <div className={styles.boxcontainer}>
            <div className={styles.box1} style={{ border: "2px solid white"}}>
              <FontAwesomeIcon icon={faCheck} />
              ctuuxcuviboi
            </div>
            <div className={styles.box1} style={{ border: "2px solid white"}}>
              <FontAwesomeIcon icon={faLock} />
              ycyuyudctycg
            </div>
            <div
              className={styles.box1}
              style={{ border: "2px solid white"}}
            >
              <FontAwesomeIcon icon={faShield} />
              ydcudcvmvf-èd
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img src="url_du_qr_code" alt="QR Code" />
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
      <div className={styles.page6}>
      <h2>gd_èzbuivuazfesjqcijkzbohjpozf</h2>
      </div>
    </div>
  );
}
