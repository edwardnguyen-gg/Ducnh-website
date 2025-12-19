
"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TeachingContent() {
    const { t } = useLanguage();

    const subjects = [
        { id: 'math', icon: '📐', ...t.teaching.subjects.math },
        { id: 'data', icon: '📊', ...t.teaching.subjects.data },
        { id: 'security', icon: '🔐', ...t.teaching.subjects.security },
        { id: 'french', icon: '🇫🇷', ...t.teaching.subjects.french },
        { id: 'english', icon: '🌏', ...t.teaching.subjects.english }
    ];

    return (
        <div className="container" style={{ padding: '40px 16px' }}>
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h1 className="animate-fade-in">{t.teaching.title}</h1>
                <p style={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: '600px', margin: '0 auto' }} className="animate-fade-in">
                    {t.teaching.subtitle}
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {subjects.map((subject, idx) => (
                    <div key={subject.id} className="card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{subject.icon}</div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{subject.title}</h2>
                        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '16px', flexGrow: 1 }}>
                            {subject.desc}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                            {subject.tags.map(tag => (
                                <span key={tag} style={{
                                    background: 'var(--md-sys-color-secondary-container)',
                                    color: 'var(--md-sys-color-on-secondary-container)',
                                    padding: '4px 12px',
                                    borderRadius: '16px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href={`/courses?subject=${subject.id}`} className="btn btn-outlined" style={{ width: '100%' }}>
                            {t.teaching.viewCourses}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
