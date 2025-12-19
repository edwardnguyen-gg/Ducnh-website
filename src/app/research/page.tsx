
import ResearchContent from '@/components/pages/ResearchContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nghiên Cứu Khoa Học | Tiến sĩ Nguyễn Hoài Đức',
    description: 'Các công trình nghiên cứu, bài báo khoa học và dự án về Khoa học dữ liệu, Bảo mật và Công nghệ giáo dục.',
};

export default function ResearchPage() {
    return <ResearchContent />;
}
