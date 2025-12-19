
export type Language = 'vi' | 'en';

export const translations = {
    vi: {
        nav: {
            home: 'Trang Chủ',
            about: 'Giới Thiệu',
            teaching: 'Giảng Dạy',
            research: 'Nghiên Cứu',
            collaboration: 'Hợp Tác',
            courses: 'Khóa Học',
            contact: 'Liên Hệ',
        },
        home: {
            heroTitle: 'Chia Sẻ Tri Thức',
            heroHighlight: 'Khơi Nguồn Sáng Tạo',
            heroSubtitle: 'Chào mừng bạn đến với website của Tiến sĩ Nguyễn Hoài Đức. Nơi kết nối đam mê giảng dạy, nghiên cứu khoa học và cùng nhau phát triển trên con đường học thuật.',
            coursesBtn: 'Khám Phá Khóa Học',
            aboutBtn: 'Về Tôi',
            fieldTitle: 'Lĩnh Vực Chuyên Môn',
            fieldSubtitle: 'Các lĩnh vực giảng dạy và nghiên cứu trọng tâm',
            fields: {
                math: { title: 'Toán Chuyên', desc: 'Bồi dưỡng học sinh giỏi, luyện thi chuyên Toán với phương pháp tư duy hiện đại.' },
                data: { title: 'Phân Tích Dữ Liệu', desc: 'Khoa học dữ liệu, Big Data và ứng dụng AI trong phân tích kinh doanh.' },
                security: { title: 'An Toàn Thông Tin', desc: 'Nghiên cứu về bảo mật mạng, mật mã học và an toàn hệ thống.' },
                language: { title: 'Ngoại Ngữ', desc: 'Giảng dạy Tiếng Pháp và luyện thi chứng chỉ quốc tế IELTS/SAT.' },
            },
            viewDetail: 'Xem chi tiết →',
            aboutTitle: 'Về Tiến sĩ Nguyễn Hoài Đức',
            aboutDesc: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực giáo dục và nghiên cứu, tôi cam kết mang đến những giá trị tri thức thực tiễn và sâu sắc nhất cho người học.',
            aboutItems: ['Tiến sĩ Toán ứng dụng tại Pháp', 'Giảng viên Khoa khoa học dữ liệu - ĐH Ngân hàng HCM', 'Chuyên gia Trí tuệ nhân tạo'],
            learnMore: 'Tìm Hiểu Thêm',
        },
        footer: {
            aboutTitle: 'Về TS. Nguyễn Hoài Đức',
            aboutDesc: 'Website cá nhân chuyên nghiệp phục vụ công tác giảng dạy, lưu trữ và chia sẻ tri thức, đồng thời quảng bá các công trình nghiên cứu khoa học.',
            linksTitle: 'Liên Kết Nhanh',
            connectTitle: 'KẾT NỐI',
            copyright: 'TS. Nguyễn Hoài Đức. All rights reserved.',
        },
        about: {
            title: 'Giới Thiệu: TS. Nguyễn Hoài Đức',
            subtitle: 'Hành trình đam mê với giáo dục và nghiên cứu khoa học.',
            bioTitle: 'Tiểu Sử',
            bioP1: 'Thời nhỏ đam mê Tennis, từng gặt hái được khá nhiều thành tích đáng kể. Trình diễn đàn 800. Nay cũng đã tiếp cận với Pickleball và cũng đã có được các thành tích đáng khích lệ: Vô địch đôi nam, Hạng nhì đơn nam Giải Hội thao Trường Đại học ngân hàng HCM năm 2025.',
            bioP2: 'Từng là học sinh chuyên Toán hệ tiếng Pháp. Đạt học bổng Tiến sĩ Toán ứng dụng tại Pháp. Hiện là Giảng viên Khoa khoa học dữ liệu - Bộ môn Trí tuệ nhân tạo tại Trường Đại học Ngân hàng HCM.',
            philosophyTitle: 'Triết Lý Giảng Dạy',
            philosophyQuote: '"Giáo dục không phải là việc đổ đầy một chiếc bình, mà là thắp lên một ngọn lửa."',
            skillsTitle: 'Chuyên Môn & Kỹ Năng',
            skills: ['Toán học', 'Khoa học máy tính', 'Phân tích dữ liệu', 'Tiếng Anh', 'Tiếng Pháp', 'Lãnh đạo']
        },
        teaching: {
            title: 'Chuyên Mục Giảng Dạy',
            subtitle: 'Phương pháp giảng dạy hiện đại, tập trung vào tư duy cốt lõi và khả năng áp dụng thực tiễn.',
            subjects: {
                math: {
                    title: 'Toán Chuyên & Toán Cao Cấp',
                    desc: 'Bồi dưỡng học sinh giỏi, luyện thi chuyên Toán. Giảng dạy Toán cao cấp cho sinh viên đại học (Giải tích, Đại số tuyến tính).',
                    tags: ['Toán Cấp 3', 'Đại Học', 'Luyện Thi']
                },
                data: {
                    title: 'Khoa Học Dữ Liệu (Data Science)',
                    desc: 'Phân tích dữ liệu với Python/R, Machine Learning cơ bản và nâng cao, Trực quan hóa dữ liệu (Tableau/PowerBI).',
                    tags: ['Python', 'SQL', 'AI', 'Big Data']
                },
                security: {
                    title: 'An Toàn Thông Tin (Cyber Security)',
                    desc: 'Các nguyên lý bảo mật, Mật mã học, An toàn mạng và Kiểm thử xâm nhập (Penetration Testing).',
                    tags: ['Network', 'Cryptography', 'Ethical Hacking']
                },
                french: {
                    title: 'Tiếng Pháp & Du Học',
                    desc: 'Tiếng Pháp giao tiếp, luyện thi chứng chỉ DELF/DALF. Tư vấn hồ sơ du học Pháp.',
                    tags: ['DELF B1/B2', 'Giao Tiếp', 'Du Học']
                },
                english: {
                    title: 'Luyện Thi IELTS / SAT',
                    desc: 'Chiến thuật làm bài hiệu quả, cải thiện 4 kỹ năng Nghe-Nói-Đọc-Viết. Luyện thi SAT Math & Verbal.',
                    tags: ['IELTS 7.0+', 'SAT 1400+']
                }
            },
            viewCourses: 'Xem Khóa Học'
        },
        research: {
            title: 'Nghiên Cứu Khoa Học',
            subtitle: 'Chia sẻ các kết quả nghiên cứu và đóng góp học thuật.',
            publicationsTitle: 'Công Bố Khoa Học (Publications)',
            projectsTitle: 'Đề Tài & Dự Án (Projects)',
            projects: [
                {
                    title: "Hệ thống phát hiện xâm nhập sử dụng Deep Learning",
                    role: "Chủ nhiệm đề tài",
                    duration: "2023 - 2025",
                    status: "Đang thực hiện",
                    desc: "Xây dựng mô hình AI phát hiện các cuộc tấn công mạng bất thường với độ chính xác cao."
                },
                {
                    title: "Nền tảng E-learning thích ứng (Adaptive Learning)",
                    role: "Tham gia",
                    duration: "2022 - 2023",
                    status: "Đã nghiệm thu",
                    desc: "Phát triển hệ thống gợi ý lộ trình học tập cá nhân hóa cho sinh viên dựa trên kết quả kiểm tra."
                }
            ],
            publications: [
                {
                    year: 2024,
                    title: "Advanced Machine Learning Algorithms for Educational Data Mining",
                    journal: "Journal of Computer Science used in Education",
                    type: "Journal Article",
                },
                {
                    year: 2023,
                    title: "Secure Communication Protocols found inside IoT Networks",
                    journal: "IEEE International Conference on Cyber Security",
                    type: "Conference Paper",
                },
                {
                    year: 2023,
                    title: "Optimizing Database Queries for Big Data Applications",
                    journal: "International Symposium on Information Technology",
                    type: "Conference Paper",
                }
            ]
        },
        courses: {
            title: 'Khóa Học',
            subtitle: 'Cập nhật lịch khai giảng và các chương trình đào tạo mới nhất.',
            offlineTitle: 'Lớp Học Trực Tiếp (Offline)',
            onlineTitle: 'Khóa Học Online (E-Learning)',
            status: {
                upcoming: 'Sắp khai giảng',
                enrolling: 'Đang tuyển sinh',
                full: 'Đã đủ lớp'
            },
            seats: {
                available: 'Còn {n} chỗ',
                full: 'Hết chỗ'
            },
            register: 'Đăng Ký Ngay',
            onPlatform: 'Trên nền tảng',
            students: 'học viên',
            offlineCourses: [
                {
                    title: 'Luyện Thi Chuyên Toán 10',
                    schedule: 'Thứ 3, 5 (18:00 - 20:00) & CN (14:00 - 16:30)',
                    location: 'Cơ sở A - Q. Cầu Giấy',
                },
                {
                    title: 'IELTS Intensive 6.5+',
                    schedule: 'Thứ 2, 4, 6 (19:00 - 21:00)',
                    location: 'Cơ sở B - Q. Đống Đa',
                },
                {
                    title: 'Tiếng Pháp Giao Tiếp Sơ Cấp (A1)',
                    schedule: 'Thứ 7, CN (09:00 - 11:00)',
                    location: 'Cơ sở Online (Zoom)',
                }
            ],
            onlineCourses: [
                {
                    title: "Python for Data Analysis: From Zero to Hero",
                },
                {
                    title: "Cyber Security Fundamentals",
                }
            ]
        },
        collaboration: {
            title: 'Mạng Lưới Hợp Tác',
            subtitle: 'Cùng nhau kiến tạo giá trị và phát triển bền vững.',
            partners: [
                { name: 'University A', type: 'Academic', des: 'Hợp tác trao đổi sinh viên' },
                { name: 'Tech Corp B', type: 'Industry', des: 'Nghiên cứu ứng dụng AI' },
                { name: 'Institute C', type: 'Research', des: 'Dự án nghiên cứu cấp quốc gia' },
                { name: 'EdTech D', type: 'Education', des: 'Phát triển nền tảng học tập số' },
            ],
            ctaTitle: 'Bạn muốn hợp tác?',
            ctaDesc: 'Chúng tôi luôn tìm kiếm những đối tác tiềm năng để cùng phát triển các dự án giáo dục và công nghệ mới.',
            ctaBtn: 'Liên Hệ Ngay'
        },
        contact: {
            title: 'Kết Nối & Hợp Tác',
            subtitle: 'Tôi luôn sẵn sàng đón nhận các cơ hội hợp tác trong giảng dạy, nghiên cứu và phát triển dự án. Hãy để lại lời nhắn hoặc kết nối qua mạng xã hội.',
            office: 'Văn Phòng',
            officeAddr: 'Tầng 5, Tòa nhà Phúc Đạt, Phường Dĩ An, HCM',
            formTitle: 'Gửi Lời Nhắn',
            name: 'Họ và Tên',
            email: 'Email',
            message: 'Nội Dung',
            send: 'Gửi Tin Nhắn',
            placeholders: {
                name: 'Nguyễn Văn A',
                email: 'example@email.com',
                message: 'Nội dung cần trao đổi...'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            teaching: 'Teaching',
            research: 'Research',
            collaboration: 'Collaboration',
            courses: 'Courses',
            contact: 'Contact',
        },
        home: {
            heroTitle: 'Sharing Knowledge',
            heroHighlight: 'Igniting Creativity',
            heroSubtitle: 'Welcome to the website of Dr. Nguyen Hoai Duc. A place to connect passion for teaching, scientific research and develop together on the academic path.',
            coursesBtn: 'Discover Courses',
            aboutBtn: 'About Me',
            fieldTitle: 'Areas of Expertise',
            fieldSubtitle: 'Key teaching and research areas',
            fields: {
                math: { title: 'Advanced Math', desc: 'Fostering gifted students, exam preparation with modern thinking methods.' },
                data: { title: 'Data Analytics', desc: 'Data Science, Big Data and AI applications in business analysis.' },
                security: { title: 'Cyber Security', desc: 'Research on network security, cryptography and system safety.' },
                language: { title: 'Foreign Languages', desc: 'Teaching French and international certificate preparation IELTS/SAT.' },
            },
            viewDetail: 'View Details →',
            aboutTitle: 'About Dr. Nguyen Hoai Duc',
            aboutDesc: 'With over 10 years of experience in education and research, I am committed to bringing the most practical and profound knowledge values ​​to learners.',
            aboutItems: ['PhD in Applied Mathematics in France', 'Lecturer at Faculty of Data Science - HUB', 'Artificial Intelligence Expert'],
            learnMore: 'Learn More',
        },
        footer: {
            aboutTitle: 'About Dr. Nguyen Hoai Duc',
            aboutDesc: 'Professional personal website serving teaching, storing and sharing knowledge, and promoting scientific research works.',
            linksTitle: 'Quick Links',
            connectTitle: 'CONNECT',
            copyright: 'Dr. Nguyen Hoai Duc. All rights reserved.',
        },
        about: {
            title: 'About: Dr. Nguyen Hoai Duc',
            subtitle: 'A passionate journey with education and scientific research.',
            bioTitle: 'Biography',
            bioP1: 'Passionate about Tennis since childhood, achieved significant achievements. Forum performance 800. Now also approached Pickleball and achieved encouraging results: Men\'s Doubles Champion, Men\'s Singles Runner-up at HUB Sports Festival 2025.',
            bioP2: 'Former student of specialized Mathematics in French system. Scholarship recipient for PhD in Applied Mathematics in France. Currently a Lecturer at the Faculty of Data Science - Department of Artificial Intelligence at Banking University of Ho Chi Minh City (HUB).',
            philosophyTitle: 'Teaching Philosophy',
            philosophyQuote: '"Education is not the filling of a pail, but the lighting of a fire."',
            skillsTitle: 'Expertise & Skills',
            skills: ['Mathematics', 'Computer Science', 'Data Analytics', 'English', 'French', 'Leadership']
        },
        teaching: {
            title: 'Teaching Categories',
            subtitle: 'Modern teaching methods, focusing on core thinking and practical applicability.',
            subjects: {
                math: {
                    title: 'Advanced Math & Higher Math',
                    desc: 'Fostering gifted students, advanced math prep. Teaching Calculus, Linear Algebra for university students.',
                    tags: ['High School Math', 'University', 'Exam Prep']
                },
                data: {
                    title: 'Data Science',
                    desc: 'Data analysis with Python/R, Basic and Advanced Machine Learning, Data Visualization (Tableau/PowerBI).',
                    tags: ['Python', 'SQL', 'AI', 'Big Data']
                },
                security: {
                    title: 'Cyber Security',
                    desc: 'Security principles, Cryptography, Network Safety and Penetration Testing.',
                    tags: ['Network', 'Cryptography', 'Ethical Hacking']
                },
                french: {
                    title: 'French & Study Abroad',
                    desc: 'Communicative French, DELF/DALF preparation. Study abroad counseling for France.',
                    tags: ['DELF B1/B2', 'Communication', 'Study Abroad']
                },
                english: {
                    title: 'IELTS / SAT Prep',
                    desc: 'Effective test strategies, improving 4 skills (L-S-R-W). SAT Math & Verbal preparation.',
                    tags: ['IELTS 7.0+', 'SAT 1400+']
                }
            },
            viewCourses: 'View Courses'
        },
        research: {
            title: 'Scientific Research',
            subtitle: 'Sharing research results and academic contributions.',
            publicationsTitle: 'Publications',
            projectsTitle: 'Projects',
            projects: [
                {
                    title: "Intrusion Detection System using Deep Learning",
                    role: "Project Manager",
                    duration: "2023 - 2025",
                    status: "Ongoing",
                    desc: "Building an AI model to detect abnormal cyber attacks with high accuracy."
                },
                {
                    title: "Adaptive Learning E-learning Platform",
                    role: "Participant",
                    duration: "2022 - 2023",
                    status: "Completed",
                    desc: "Developing a personalized learning path recommendation system for students based on test results."
                }
            ],
            publications: [
                {
                    year: 2024,
                    title: "Advanced Machine Learning Algorithms for Educational Data Mining",
                    journal: "Journal of Computer Science used in Education",
                    type: "Journal Article",
                },
                {
                    year: 2023,
                    title: "Secure Communication Protocols found inside IoT Networks",
                    journal: "IEEE International Conference on Cyber Security",
                    type: "Conference Paper",
                },
                {
                    year: 2023,
                    title: "Optimizing Database Queries for Big Data Applications",
                    journal: "International Symposium on Information Technology",
                    type: "Conference Paper",
                }
            ]
        },
        courses: {
            title: 'Courses',
            subtitle: 'Update on opening schedules and latest training programs.',
            offlineTitle: 'Offline Classes',
            onlineTitle: 'Online Courses (E-Learning)',
            status: {
                upcoming: 'Opening Soon',
                enrolling: 'Enrolling',
                full: 'Class Full'
            },
            seats: {
                available: '{n} seats left',
                full: 'Full'
            },
            register: 'Register Now',
            onPlatform: 'On',
            students: 'students',
            offlineCourses: [
                {
                    title: 'Grade 10 Math Specialist Prep',
                    schedule: 'Tue, Thu (18:00 - 20:00) & Sun (14:00 - 16:30)',
                    location: 'Campus A - Cau Giay Dist.',
                },
                {
                    title: 'IELTS Intensive 6.5+',
                    schedule: 'Mon, Wed, Fri (19:00 - 21:00)',
                    location: 'Campus B - Dong Da Dist.',
                },
                {
                    title: 'Elementary Communicative French (A1)',
                    schedule: 'Sat, Sun (09:00 - 11:00)',
                    location: 'Online (Zoom)',
                }
            ],
            onlineCourses: [
                {
                    title: "Python for Data Analysis: From Zero to Hero",
                },
                {
                    title: "Cyber Security Fundamentals",
                }
            ]
        },
        collaboration: {
            title: 'Collaboration Network',
            subtitle: 'Creating value and sustainable development together.',
            partners: [
                { name: 'University A', type: 'Academic', des: 'Student exchange partnership' },
                { name: 'Tech Corp B', type: 'Industry', des: 'Applied AI research' },
                { name: 'Institute C', type: 'Research', des: 'National research project' },
                { name: 'EdTech D', type: 'Education', des: 'Digital learning platform development' },
            ],
            ctaTitle: 'Want to collaborate?',
            ctaDesc: 'We are always looking for potential partners to develop new education and technology projects together.',
            ctaBtn: 'Contact Now'
        },
        contact: {
            title: 'Connect & Collaborate',
            subtitle: 'I am open to collaboration opportunities in teaching, research and project development. Leave a message or connect via social media.',
            office: 'Office',
            officeAddr: '5th Floor, Phuc Dat Building, Di An Ward, HCM',
            formTitle: 'Send a Message',
            name: 'Full Name',
            email: 'Email',
            message: 'Content',
            send: 'Send Message',
            placeholders: {
                name: 'John Doe',
                email: 'example@email.com',
                message: 'Your message here...'
            }
        }
    }
};
