import { useParams } from "react-router-dom";
import { Wrap } from "../../components/Layout";
import GlowBox from "../../components/GlowBox";
import { useReveal } from "../../hooks/useReveal";
import { getCaseStudy } from "../../data";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
    useReveal();
    const { slug } = useParams();
    const p = getCaseStudy(slug);

    return (
        <div className={styles.page}>
            <Wrap>
                <div className={styles.hero}>
                    <a href="/" className={styles.back}>← Back to work</a>

                    <div data-reveal style={{ marginTop: 40 }}>
                        <div className={styles.eyebrow}>{p.tag}</div>
                        <h1 className={styles.title}>{p.title}</h1>
                        <p className={styles.lede}>{p.lede}</p>
                        <div className={styles.heroActions}>
                            <a className={styles.btnFill} href={p.liveUrl} target="_blank" rel="noreferrer">
                                Visit live site →
                            </a>
                        </div>
                    </div>

                    <div className={styles.meta}>
                        <GlowBox className={styles.metaItem}>
                            <div className={styles.metaKey}>Role</div>
                            <div className={styles.metaVal}>{p.role}</div>
                        </GlowBox>
                        <GlowBox className={styles.metaItem}>
                            <div className={styles.metaKey}>Year</div>
                            <div className={styles.metaVal}>{p.year}</div>
                        </GlowBox>
                        <GlowBox className={styles.metaItem}>
                            <div className={styles.metaKey}>Type</div>
                            <div className={styles.metaVal}>{p.type}</div>
                        </GlowBox>
                        <GlowBox className={styles.metaItem}>
                            <div className={styles.metaKey}>Stack</div>
                            <div className={styles.metaVal}>{p.stack}</div>
                        </GlowBox>
                    </div>
                </div>

                <div className={styles.gallery}>
                    {p.mainImage && (
                        <div data-reveal className={styles.shot}>
                            <img src={p.mainImage} alt={p.title} />
                        </div>
                    )}
                    {p.shots.length === 2 && (
                        <div className={styles.shotRow}>
                            {p.shots.map((src, i) => (
                                <div data-reveal key={i} className={styles.shot}>
                                    <img src={src} alt={p.title} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.block}>
                    <div data-reveal className={styles.kicker}>
                        <span className={styles.kickerNum}>01</span>
                        <h2 className={styles.kickerTitle}>Overview</h2>
                    </div>
                    <p data-reveal className={styles.body}>{p.overview}</p>
                </div>

                <div className={styles.block}>
                    <div data-reveal className={styles.kicker}>
                        <span className={styles.kickerNum}>02</span>
                        <h2 className={styles.kickerTitle}>Tools used</h2>
                    </div>
                    <div data-reveal className={styles.chips}>
                        {p.tools.map((t) => (
                            <span key={t} className={styles.chip}>{t}</span>
                        ))}
                    </div>
                </div>
            </Wrap>

            <footer className={styles.footer}>
                <Wrap>
                    <div data-reveal className={styles.footerCta}>
                        Want something<br />like this? <a href="/#contact">Let's talk.</a>
                    </div>
                    <div className={styles.footerRow}>
                        <div>© 2026 Karinna Rocha — New York, USA</div>
                        <div style={{ display: "flex", gap: 22 }}>
                            <a href="https://www.linkedin.com/in/karinnarocha/">LinkedIn</a>
                            <a href="https://github.com/karinnarocha">GitHub</a>
                            <a href="https://x.com/_nurvix">X</a>
                        </div>
                    </div>
                </Wrap>
            </footer>
        </div>
    );
}