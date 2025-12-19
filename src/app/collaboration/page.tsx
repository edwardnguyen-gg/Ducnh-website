
import CollaborationContent from '@/components/pages/CollaborationContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hợp Tác | Tiến sĩ Nguyễn Hoài Đức',
    description: 'Các đối tác chiến lược và cơ hội hợp tác trong giáo dục và nghiên cứu.',
};

export default function CollaborationPage() {
    return <CollaborationContent />;
}
