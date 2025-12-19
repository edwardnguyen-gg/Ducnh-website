
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, language, switchLanguage } = useLanguage();

    const navItems = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.teaching, path: '/teaching' },
        { name: t.nav.research, path: '/research' },
        { name: t.nav.collaboration, path: '/collaboration' },
        { name: t.nav.courses, path: '/courses' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)}>
                    <span style={{ fontSize: '1.5rem', marginRight: '4px' }}>🎓</span>
                    TS. Nguyễn Hoài Đức
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navActive : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.navLink} ${pathname === item.path ? styles.navLinkActive : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '16px', gap: '12px' }}>
                        <button
                            onClick={() => switchLanguage('vi')}
                            style={{
                                opacity: language === 'vi' ? 1 : 0.5,
                                filter: language === 'vi' ? 'none' : 'grayscale(100%)',
                                background: 'none', border: 'none', cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                padding: 0, display: 'flex'
                            }}
                            title="Tiếng Việt"
                        >
                            <Image src="/images/flags/vn.svg" alt="Vietnam Flag" width={24} height={16} style={{ borderRadius: '2px', objectFit: 'cover' }} />
                        </button>
                        <button
                            onClick={() => switchLanguage('en')}
                            style={{
                                opacity: language === 'en' ? 1 : 0.5,
                                filter: language === 'en' ? 'none' : 'grayscale(100%)',
                                background: 'none', border: 'none', cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                padding: 0, display: 'flex'
                            }}
                            title="English"
                        >
                            <Image src="/images/flags/uk.svg" alt="UK Flag" width={24} height={16} style={{ borderRadius: '2px', objectFit: 'cover' }} />
                        </button>
                    </div>
                </nav>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
