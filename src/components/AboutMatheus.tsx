import Image from "next/image";
import styles from "./AboutMatheus.module.css";

const tags = [
  "Perito IBAPE-GO nº 275",
  "TJ-GO",
  "TJDFT",
  "Banco do Brasil",
  "Caixa Econômica Federal",
];

export default function AboutMatheus() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imgWrap}>
            <Image
              src="/images/20250925_234147000_iOS.jpg"
              alt="Matheus Dias Lima — Engenheiro Fundador da Áddita"
              width={520}
              height={520}
              style={{ width: "100%", height: 520, objectFit: "cover", objectPosition: "center top", borderRadius: 12 }}
            />
          </div>
          <div>
            <span className={`label ${styles.labelDim}`}>Quem está do seu lado</span>
            <h2 className={styles.h2}>Matheus Dias Lima</h2>
            <p className={styles.p}>
              Engenheiro fundador da Áddita, Matheus viveu os quatro lados de um contrato de
              engenharia — como contratante, contratado, operador e, agora, perito independente.
            </p>
            <p className={styles.p}>
              Isso significa que ele sabe o que o outro lado vai argumentar — antes mesmo de começar.
            </p>
            <p className={styles.p}>
              Perito IBAPE-GO nº 275, inscrito no TJ-GO e TJDFT, credenciado por Banco do Brasil e
              Caixa Econômica Federal. Quando o laudo sai da Áddita, ele está pronto para resistir
              ao escrutínio judicial.
            </p>
            <div className={styles.tags}>
              {tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
