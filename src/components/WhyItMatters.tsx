import Image from "next/image";
import styles from "./WhyItMatters.module.css";

export default function WhyItMatters() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={`label ${styles.labelDim}`}>Por que isso importa?</span>
            <h2 className={styles.h2}>
              Processos de engenharia são ganhos com prova técnica.
            </h2>
            <p className={styles.p}>
              Quando uma disputa chega à Justiça, o processo não é ganho com boa vontade — é ganho
              com prova técnica. Um laudo mal fundamentado, uma planilha de BDI contestável ou uma
              vistoria feita sem metodologia podem custar anos de processo e uma decisão contrária
              — mesmo quando a razão é sua.
            </p>
            <p className={styles.p}>
              A Áddita existe para isso: transformar situações técnicas complexas em documentos
              claros, fundamentados e com peso judicial.
            </p>
            <blockquote className={styles.quote}>
              "Quem gerenciou mais de R$ 2 bilhões em contratos públicos sabe onde os problemas se
              escondem — e sabe como encontrá-los e resolvê-los."
            </blockquote>
          </div>
          <div className={styles.visual}>
            <Image
              src="/images/logo_vertical.png"
              alt="Áddita Engenharia"
              width={320}
              height={320}
              style={{ width: "70%", maxWidth: 320, height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
