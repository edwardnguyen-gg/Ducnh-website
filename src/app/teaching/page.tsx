
import TeachingContent from '@/components/pages/TeachingContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chuyên Mục Giảng Dạy | Tiến sĩ Nguyễn Hoài Đức',
    description: 'Các môn học và lĩnh vực giảng dạy: Toán chuyên, Tiếng Pháp, Luyện thi IELTS/SAT, Phân tích dữ liệu, An toàn thông tin.',
};

export default function TeachingPage() {
    return <TeachingContent />;
}
