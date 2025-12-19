
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactContent() {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ padding: '40px 16px' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                alignItems: 'start'
            }}>
                <div className="animate-fade-in">
                    <h1 style={{ marginBottom: '24px' }}>{t.contact.title}</h1>
                    <p style={{ color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '32px', lineHeight: '1.6' }}>
                        {t.contact.subtitle}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '50%',
                                background: 'var(--md-sys-color-primary-container)',
                                color: 'var(--md-sys-color-on-primary-container)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                            }}>
                                📧
                            </div>
                            <div>
                                <div style={{ fontWeight: 600 }}>{t.contact.email}</div>
                                <a href="mailto:ducnh@hub.edu.vn" style={{ color: 'var(--md-sys-color-primary)' }}>ducnh@hub.edu.vn</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '50%',
                                background: 'var(--md-sys-color-primary-container)',
                                color: 'var(--md-sys-color-on-primary-container)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                            }}>
                                🏢
                            </div>
                            <div>
                                <div style={{ fontWeight: 600 }}>{t.contact.office}</div>
                                <div style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{t.contact.officeAddr}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                            {/* Social Icons Placeholder */}
                            {['LinkedIn', 'Facebook', 'Scholar'].map(social => (
                                <button key={social} className="btn btn-outlined" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card animate-fade-in" style={{ animationDelay: '0.2s', padding: '32px' }}>
                    <h2 style={{ marginBottom: '24px' }}>{t.contact.formTitle}</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>{t.contact.name}</label>
                            <input type="text" placeholder={t.contact.placeholders.name} style={{
                                width: '100%', padding: '12px', borderRadius: '8px',
                                border: '1px solid var(--md-sys-color-surface-variant)',
                                backgroundColor: 'var(--md-sys-color-background)',
                                color: 'inherit'
                            }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>{t.contact.email}</label>
                            <input type="email" placeholder={t.contact.placeholders.email} style={{
                                width: '100%', padding: '12px', borderRadius: '8px',
                                border: '1px solid var(--md-sys-color-surface-variant)',
                                backgroundColor: 'var(--md-sys-color-background)',
                                color: 'inherit'
                            }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>{t.contact.message}</label>
                            <textarea rows={5} placeholder={t.contact.placeholders.message} style={{
                                width: '100%', padding: '12px', borderRadius: '8px',
                                border: '1px solid var(--md-sys-color-surface-variant)',
                                backgroundColor: 'var(--md-sys-color-background)',
                                color: 'inherit',
                                fontFamily: 'inherit'
                            }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                            {t.contact.send}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
