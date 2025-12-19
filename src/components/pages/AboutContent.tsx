
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutContent() {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ padding: '64px 16px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t.about.title}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '48px' }}>
                    {t.about.subtitle}
                </p>

                <section style={{ marginBottom: '48px' }}>
                    <h2>{t.about.bioTitle}</h2>
                    <p style={{ lineHeight: 1.8, marginBottom: '24px' }}>
                        {t.about.bioP1}
                    </p>
                    <p style={{ lineHeight: 1.8 }}>
                        {t.about.bioP2}
                    </p>
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2>{t.about.philosophyTitle}</h2>
                    <blockquote style={{
                        borderLeft: '4px solid var(--md-sys-color-primary)',
                        paddingLeft: '24px',
                        fontStyle: 'italic',
                        fontSize: '1.1rem',
                        background: 'var(--md-sys-color-surface-variant)',
                        padding: '24px',
                        borderRadius: '0 16px 16px 0',
                        marginTop: '24px'
                    }}>
                        {t.about.philosophyQuote}
                    </blockquote>
                </section>

                <section>
                    <h2>{t.about.skillsTitle}</h2>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                        {t.about.skills.map(skill => (
                            <span key={skill} style={{
                                padding: '8px 16px',
                                background: 'var(--md-sys-color-surface)',
                                border: '1px solid var(--md-sys-color-surface-variant)',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>{skill}</span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
