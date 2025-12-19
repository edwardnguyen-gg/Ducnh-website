
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function CoursesContent() {
    const { t } = useLanguage();

    const offlineCourses = [
        {
            id: 'c1',
            status: t.courses.status.upcoming,
            seats: t.courses.seats.available.replace('{n}', '5'),
            hasSeats: true,
            ...t.courses.offlineCourses[0]
        },
        {
            id: 'c2',
            status: t.courses.status.enrolling,
            seats: t.courses.seats.available.replace('{n}', '2'),
            hasSeats: true,
            ...t.courses.offlineCourses[1]
        },
        {
            id: 'c3',
            status: t.courses.status.full,
            seats: t.courses.seats.full,
            hasSeats: false,
            ...t.courses.offlineCourses[2]
        }
    ];

    const onlineCourses = [
        { image: "🐍", platform: "Udemy", rating: 4.8, students: 1200, ...t.courses.onlineCourses[0] },
        { image: "🛡️", platform: "Coursera", rating: 4.9, students: 850, ...t.courses.onlineCourses[1] }
    ];

    return (
        <div className="container" style={{ padding: '40px 16px' }}>
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h1 className="animate-fade-in">{t.courses.title}</h1>
                <p style={{ color: 'var(--md-sys-color-on-surface-variant)' }} className="animate-fade-in">
                    {t.courses.subtitle}
                </p>
            </header>

            <section className="animate-fade-in" style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>🏫</span> {t.courses.offlineTitle}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {offlineCourses.map(course => (
                        <div key={course.id} className="card" style={{ borderLeft: `4px solid ${course.hasSeats ? 'var(--md-sys-color-secondary)' : 'gray'}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{
                                    background: course.hasSeats ? '#e8f5e9' : '#eceff1',
                                    color: course.hasSeats ? '#1b5e20' : '#37474f',
                                    padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600
                                }}>
                                    {course.status}
                                </span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-error)' }}>
                                    {course.seats}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{course.title}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.95rem' }}>
                                <div>📅 {course.schedule}</div>
                                <div>📍 {course.location}</div>
                            </div>
                            {course.hasSeats && (
                                <button className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }}>
                                    {t.courses.register}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>💻</span> {t.courses.onlineTitle}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {onlineCourses.map((course, idx) => (
                        <div key={idx} className="card" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <div style={{ fontSize: '3rem' }}>{course.image}</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{course.title}</h3>
                                <div style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '8px' }}>
                                    {t.courses.onPlatform} <b>{course.platform}</b>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem' }}>
                                    <span>⭐ {course.rating}</span>
                                    <span>👥 {course.students} {t.courses.students}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
