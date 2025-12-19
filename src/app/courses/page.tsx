
import CoursesContent from '@/components/pages/CoursesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Khóa Học | Tiến sĩ Nguyễn Hoài Đức',
    description: 'Lịch khai giảng các lớp Toán, Tiếng Pháp, IELTS, SAT và các khóa học Online.',
};

export default function CoursesPage() {
    return <CoursesContent />;
}
