
export default function CoursesAdmin() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2>Quản lý Khóa Học</h2>
                <button className="btn btn-primary">Tạo Khóa Học</button>
            </div>
            <div className="card">
                <p>Chưa có khóa học nào được tạo.</p>
            </div>
        </div>
    )
}
