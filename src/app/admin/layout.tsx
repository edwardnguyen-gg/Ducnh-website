
import Link from 'next/link';
import { signOut } from '@/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{
                width: '250px', background: '#333', color: '#fff', padding: '24px',
                display: 'flex', flexDirection: 'column'
            }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '40px', fontWeight: 'bold' }}>
                    Admin Panel
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                    <Link href="/admin" style={{ padding: '8px 0', borderBottom: '1px solid #444' }}>Dashboard</Link>
                    <Link href="/admin/posts" style={{ padding: '8px 0', borderBottom: '1px solid #444' }}>Bài Viết</Link>
                    <Link href="/admin/research" style={{ padding: '8px 0', borderBottom: '1px solid #444' }}>Nghiên Cứu</Link>
                    <Link href="/admin/courses" style={{ padding: '8px 0', borderBottom: '1px solid #444' }}>Khóa Học</Link>
                    <Link href="/admin/contact" style={{ padding: '8px 0', borderBottom: '1px solid #444' }}>Liên Hệ</Link>
                </nav>

                <form action={async () => {
                    'use server';
                    await signOut();
                }}>
                    <button className="btn btn-outlined" style={{ color: '#fff', borderColor: '#fff', width: '100%' }}>
                        Đăng Xuất
                    </button>
                </form>
            </aside>
            <main style={{ flexGrow: 1, padding: '40px', background: '#f5f5f5' }}>
                <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {children}
                </div>
            </main>
        </div>
    );
}
