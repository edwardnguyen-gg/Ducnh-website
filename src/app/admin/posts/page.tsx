
export default function PostsAdmin() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2>Quản lý Bài Viết</h2>
                <button className="btn btn-primary">Viết Bài Mới</button>
            </div>
            <div className="card">
                <p>Chưa có bài viết nào.</p>
            </div>
        </div>
    )
}
