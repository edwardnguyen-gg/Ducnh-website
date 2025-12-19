
import ContactContent from '@/components/pages/ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Liên Hệ | TS. Nguyễn Hoài Đức',
    description: 'Kết nối và hợp tác. Thông tin liên hệ, mạng xã hội và gửi tin nhắn trực tiếp.',
};

export default function ContactPage() {
    return <ContactContent />;
}
