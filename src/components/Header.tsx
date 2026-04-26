"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";

const WA_URL =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20falar%20com%20o%20engenheiro.";

const SERVICES = [
  { label: "Consultoria em Contratos de Engenharia", href: "/consultoria-contratos" },
  { label: "Assistência Técnica Judicial", href: "/assistencia-judicial" },
  { label: "Perícia Judicial em Engenharia Civil", href: "/pericia-judicial" },
  { label: "Vistorias Cautelares", href: "/vistorias-cautelares" },
  { label: "Avaliações Imobiliárias", href: "/avaliacao-imoveis" },
];

interface HeaderProps {
  basePath?: string;
}

export default function Header({ basePath = "" }: HeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    if (!isHome) return;
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const onScroll = () => {
      ref.current?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.inner}>
        <a href={`${basePath}#inicio`} className={styles.logo} onClick={(e) => { close(); handleAnchor(e, "inicio"); }}>
          <Image
            src="/images/logo_horizontal_branco.png"
            alt="Áddita Engenharia"
            width={160}
            height={40}
            className={styles.logoImg}
            priority
          />
        </a>

        <nav className={styles.nav}>
          <a href={`${basePath}#inicio`} onClick={(e) => handleAnchor(e, "inicio")}>Início</a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              Serviços <span className={styles.arrow}>▾</span>
            </button>
            <div className={styles.dropMenu}>
              {SERVICES.map((s) => (
                <a key={s.href} href={s.href}>{s.label}</a>
              ))}
            </div>
          </div>
          <a href={`${basePath}#sobre`} onClick={(e) => handleAnchor(e, "sobre")}>Sobre</a>
          <a href={`${basePath}#contato`} onClick={(e) => handleAnchor(e, "contato")}>Contato</a>
        </nav>

        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Falar no WhatsApp
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <p className={styles.mobileSection}>Serviços</p>
          {SERVICES.map((s) => (
            <a key={s.href} href={s.href} className={styles.mobileLink} onClick={close}>
              {s.label}
            </a>
          ))}
          <div className={styles.mobileDivider} />
          <a href={`${basePath}#sobre`} className={styles.mobileLink} onClick={(e) => { close(); handleAnchor(e, "sobre"); }}>Sobre</a>
          <a href={`${basePath}#contato`} className={styles.mobileLink} onClick={(e) => { close(); handleAnchor(e, "contato"); }}>Contato</a>
          <div className={styles.mobileDivider} />
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileWa}
            onClick={close}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
