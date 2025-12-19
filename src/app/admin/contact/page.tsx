
export default function ContactAdmin() {
    return (
        <div>
            <h2 style={{ marginBottom: '24px' }}>Liên Hệ & Tin Nhắn</h2>
            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                            <th style={{ padding: '12px' }}>Tên</th>
                            <th style={{ padding: '12px' }}>Email</th>
                            <th style={{ padding: '12px' }}>Nội Dung</th>
                            <th style={{ padding: '12px' }}>Ngày</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#888' }}>Không có tin nhắn nào.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
