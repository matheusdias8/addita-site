"use client";
import { useEffect, useRef } from "react";
import styles from "./Stats.module.css";

const stats = [
  { num: "+13", label: "anos de experiência em contratos de engenharia" },
  { num: "R$ 2bi+", label: "em contratos gerenciados" },
  { num: "Nº 275", label: "Perito IBAPE-GO" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = ref.current?.querySelectorAll(`.${styles.stat}`);
      if (!items) return;

      ctx = gsap.context(() => {
        gsap.from(Array.from(items), {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <div className={styles.bar}>
      <div ref={ref} className={styles.inner}>
        {stats.map((s) => (
          <div key={s.num} className={styles.stat}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.lbl}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
