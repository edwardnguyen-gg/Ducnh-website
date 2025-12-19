
"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomeContent() {
    const { t } = useLanguage();

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={`${styles.heroTitle} animate-fade-in`}>
                        {t.home.heroTitle} <br />
                        <span className={styles.highlight}>{t.home.heroHighlight}</span>
                    </h1>
                    <p className={`${styles.heroSubtitle} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                        {t.home.heroSubtitle}
                    </p>
                    <div className={`${styles.heroActions} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                        <Link href="/courses" className={`btn ${styles.whiteBtn}`}>
                            {t.home.coursesBtn}
                        </Link>
                        <Link href="/about" className={`btn ${styles.outlineBtn}`}>
                            {t.home.aboutBtn}
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t.home.fieldTitle}</h2>
                    <p className={styles.sectionSubtitle}>{t.home.fieldSubtitle}</p>

                    <div className={styles.grid}>
                        {[
                            { icon: '📐', ...t.home.fields.math },
                            { icon: '📊', ...t.home.fields.data },
                            { icon: '🔐', ...t.home.fields.security },
                            { icon: '🇫🇷', ...t.home.fields.language },
                        ].map((item, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.cardIcon}>{item.icon}</div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                                <Link href="/teaching" style={{ color: 'var(--md-sys-color-primary)', fontWeight: 500 }}>
                                    {t.home.viewDetail}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.aboutSection}`}>
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>{t.home.aboutTitle}</h2>
                            <div style={{ width: '60px', height: '4px', background: 'var(--md-sys-color-primary)', marginBottom: '24px' }}></div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '24px' }}>
                                {t.home.aboutDesc}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                                {t.home.aboutItems.map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--md-sys-color-on-surface)' }}>
                                        <span style={{ color: 'var(--md-sys-color-primary)' }}>✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/about" className="btn btn-primary">
                                {t.home.learnMore}
                            </Link>
                        </div>
                        <div style={{
                            background: '#fff',
                            height: '400px',
                            borderRadius: '24px',
                            boxShadow: 'var(--elevation-2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/images/portrait.jpg"
                                alt="Chân dung Tiến sĩ Nguyễn Hoài Đức"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
