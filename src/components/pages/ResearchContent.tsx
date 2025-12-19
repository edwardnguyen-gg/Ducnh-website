
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function ResearchContent() {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ padding: '40px 16px' }}>
            <header style={{ marginBottom: '40px' }}>
                <h1 className="animate-fade-in">{t.research.title}</h1>
                <p className="animate-fade-in" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {t.research.subtitle}
                </p>
            </header>

            <section className="animate-fade-in" style={{ marginBottom: '60px' }}>
                <h2 style={{ borderLeft: '4px solid var(--md-sys-color-primary)', paddingLeft: '12px', marginBottom: '24px' }}>
                    {t.research.publicationsTitle}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {t.research.publications.map((pub, idx) => (
                        <div key={idx} className="card" style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                                <span style={{
                                    fontWeight: 'bold',
                                    color: 'var(--md-sys-color-primary)',
                                    background: 'var(--md-sys-color-primary-container)',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                }}>{pub.year}</span>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{pub.title}</h3>
                                    <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontStyle: 'italic' }}>
                                        {pub.journal} • {pub.type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 style={{ borderLeft: '4px solid var(--md-sys-color-secondary)', paddingLeft: '12px', marginBottom: '24px' }}>
                    {t.research.projectsTitle}
                </h2>
                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                    {t.research.projects.map((proj, idx) => (
                        <div key={idx} className="card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{
                                    fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600,
                                    color: (proj.status === 'Đang thực hiện' || proj.status === 'Ongoing') ? 'var(--md-sys-color-tertiary)' : 'var(--md-sys-color-secondary)'
                                }}>
                                    {proj.status}
                                </span>
                                <span style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.9rem' }}>{proj.duration}</span>
                            </div>
                            <h3 style={{ marginBottom: '8px' }}>{proj.title}</h3>
                            <p style={{ fontWeight: 500, marginBottom: '12px', color: 'var(--md-sys-color-primary)' }}>{proj.role}</p>
                            <p style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{proj.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
