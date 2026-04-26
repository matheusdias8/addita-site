import styles from "./Credentials.module.css";

const badges = [
  "Perito IBAPE-GO nº 275",
  "CREA-GO",
  "TJ-GO",
  "TJDFT",
  "Banco do Brasil",
  "Caixa Econômica Federal",
];

export default function Credentials() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {badges.map((b) => (
          <span key={b} className={styles.badge}>{b}</span>
        ))}
      </div>
    </div>
  );
}
