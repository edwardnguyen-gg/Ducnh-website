
import AboutContent from '@/components/pages/AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giới Thiệu | TS. Nguyễn Hoài Đức',
};

export default function About() {
    // Note: SEO title is static for now, dynamic metadata would require valid dict
    return <AboutContent />;
}
