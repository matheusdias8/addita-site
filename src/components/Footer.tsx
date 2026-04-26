import Image from "next/image";
import styles from "./Footer.module.css";

const WA = "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20falar%20com%20o%20engenheiro.";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <Image
              src="/images/logo_vertical_branco.png"
              alt="Áddita Engenharia"
              width={400}
              height={400}
              style={{ height: 100, width: "auto", marginBottom: 12 }}
            />
            <p className={styles.tagline}>
              Perícia Judicial · Assistência Técnica
              <br />
              Análise de Contratos
            </p>
          </div>
          <div>
            <h4 className={styles.colTitle}>Navegação</h4>
            <div className={styles.links}>
              <a href="#inicio">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#contato">Contato</a>
            </div>
            <h4 className={styles.colTitle} style={{ marginTop: 20 }}>Credenciais</h4>
            <div className={styles.links}>
              <span>Perito IBAPE-GO nº 275</span>
              <span>CREA-GO</span>
              <span>TJ-GO · TJDFT</span>
            </div>
          </div>
          <div>
            <h4 className={styles.colTitle}>Contato</h4>
            <div className={styles.links}>
              <a href="https://wa.me/5562920002426" target="_blank" rel="noopener noreferrer">
                (62) 92000-2426
              </a>
              <a href="mailto:contato@addita.com.br">contato@addita.com.br</a>
              <span>Goiânia · Região Metropolitana · Anápolis</span>
              <span>Seg–Sex 8h–18h</span>
            </div>
            <div style={{ marginTop: 20 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.85rem", padding: "11px 22px" }}>
                Falar no WhatsApp
              </a>
            </div>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/addita.eng" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="Instagram">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/additaengenharia/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="LinkedIn">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://ibape-go.com.br/peritos-e-avaliadores/?associado=163" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.socialText}`} title="IBAPE-GO">
                IBAPE-GO
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Áddita Engenharia e Consultoria. Todos os direitos reservados.</p>
          <p>Goiânia, GO — Atendimento presencial em Goiânia, Região Metropolitana, Anápolis e Distrito Federal</p>
        </div>
      </div>
    </footer>
  );
}
