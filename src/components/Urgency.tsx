import styles from "./Urgency.module.css";

const WA_URGENCIA =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Tenho%20um%20prazo%20urgente%20e%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica.";

export default function Urgency() {
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.icon}>⚠️</div>
        <div>
          <h3 className={styles.h3}>Atenção para prazos processuais</h3>
          <p className={styles.p}>
            Em processos judiciais, os prazos para indicação de assistente técnico e para
            impugnação de laudos são rígidos.{" "}
            <strong>
              Se você tem uma audiência ou prazo se aproximando, entre em contato agora.
            </strong>
          </p>
          <a href={WA_URGENCIA} target="_blank" rel="noopener noreferrer" className="btn btn-amber">
            Entrar em Contato Agora
          </a>
        </div>
      </div>
    </div>
  );
}
