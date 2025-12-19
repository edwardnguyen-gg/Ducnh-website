
import { auth } from "@/auth";

export default async function AdminDashboard() {
    const session = await auth();

    // Quick stats (mock)
    const stats = {
        posts: 12,
        courses: 5,
        contact: 3
    };

    return (
        <div>
            <h1 style={{ marginBottom: '24px' }}>Xin chào, {session?.user?.name || 'Admin'}!</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>Quản lý nội dung website của bạn tại đây.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div className="card" style={{ background: '#e3f2fd', color: '#0d47a1' }}>
                    <h3>Bài Viết</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.posts}</div>
                </div>
                <div className="card" style={{ background: '#e8f5e9', color: '#1b5e20' }}>
                    <h3>Khóa Học</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.courses}</div>
                </div>
                <div className="card" style={{ background: '#fff3e0', color: '#e65100' }}>
                    <h3>Liên Hệ Mới</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.contact}</div>
                </div>
            </div>
        </div>
    );
}
