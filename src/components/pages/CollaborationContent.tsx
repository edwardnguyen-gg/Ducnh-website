
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function CollaborationContent() {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ padding: '40px 16px' }}>
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h1 className="animate-fade-in">{t.collaboration.title}</h1>
                <p className="animate-fade-in" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {t.collaboration.subtitle}
                </p>
            </header>

            <div className="animate-fade-in grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '32px' }}>
                {t.collaboration.partners.map((p, idx) => (
                    <div key={idx} className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
                        <div style={{
                            width: '80px', height: '80px', background: '#eee', borderRadius: '50%',
                            margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2rem'
                        }}>
                            🤝
                        </div>
                        <h3 style={{ marginBottom: '8px' }}>{p.name}</h3>
                        <span style={{
                            display: 'inline-block', padding: '4px 12px', borderRadius: '16px',
                            background: 'var(--md-sys-color-surface-variant)', fontSize: '0.8rem', marginBottom: '16px'
                        }}>{p.type}</span>
                        <p style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{p.des}</p>
                    </div>
                ))}
            </div>

            <section className="card animate-fade-in" style={{ marginTop: '60px', textAlign: 'center', animationDelay: '0.2s', background: 'var(--md-sys-color-primary-container)', color: 'var(--md-sys-color-on-primary-container)', border: 'none' }}>
                <h2 style={{ marginBottom: '16px' }}>{t.collaboration.ctaTitle}</h2>
                <p style={{ marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
                    {t.collaboration.ctaDesc}
                </p>
                <button className="btn btn-primary">{t.collaboration.ctaBtn}</button>
            </section>
        </div>
    );
}
