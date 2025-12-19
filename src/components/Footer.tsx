
"use client";

import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>{t.footer.aboutTitle}</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            {t.footer.aboutDesc}
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h3>{t.footer.linksTitle}</h3>
                        <div className={styles.links}>
                            <Link href="/about" className={styles.link}>{t.nav.about}</Link>
                            <Link href="/teaching" className={styles.link}>{t.nav.teaching}</Link>
                            <Link href="/research" className={styles.link}>{t.nav.research}</Link>
                            <Link href="/courses" className={styles.link}>{t.nav.courses}</Link>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h3>{t.footer.connectTitle}</h3>
                        <div className={styles.links}>
                            <a href="mailto:ducnh@hub.edu.vn" className={styles.link}>Email: ducnh@hub.edu.vn</a>
                            <a href="#" className={styles.link}>LinkedIn Profile</a>
                            <a href="#" className={styles.link}>Google Scholar</a>
                            <a href="#" className={styles.link}>ResearchGate</a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
