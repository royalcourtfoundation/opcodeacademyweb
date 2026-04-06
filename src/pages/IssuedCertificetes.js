import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import userImage from '../assets/img/Images/userimage.avif'

export default function IssuedCertificetes() {
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [courseFilter, setCourseFilter] = useState('All')

    const certificateData = [
        {
            id: 1,
            certificateId: '',
            studentName: 'Arsalan',
            fatherName: '',
            enrollmentNo: '102417',
            courseName: 'BCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '8471090142',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: 'InComplete2024 (Not Fill)',
            guardianContact: '6389480410',
            activeStatus: 'A',
            assignmentStatus: 'Complete',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 2,
            certificateId: '',
            studentName: 'Anshika',
            fatherName: '',
            enrollmentNo: '102414',
            courseName: 'BCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '7309129727',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: 'Complete2024 (Not fill)',
            guardianContact: '8303546895',
            activeStatus: 'A',
            assignmentStatus: 'Complete',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 3,
            certificateId: '',
            studentName: 'Afzal',
            fatherName: '',
            enrollmentNo: '102423',
            courseName: 'BCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '9129756906',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: 'Complete2024 (Fill)',
            guardianContact: '8005055224',
            activeStatus: 'A',
            assignmentStatus: 'Complete',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 4,
            certificateId: '',
            studentName: 'Yusuf',
            fatherName: '',
            enrollmentNo: '102426',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 5,
            certificateId: '',
            studentName: 'Kamran',
            fatherName: '',
            enrollmentNo: '102421',
            courseName: 'BCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '9523318634',
            email: '',
            photo: userImage,
            semester: '',
            session: 'Not complete2024',
            guardianContact: '9628019055',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 6,
            certificateId: '',
            studentName: 'Waliya',
            fatherName: '',
            enrollmentNo: '102422',
            courseName: 'MCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '9369575309',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: 'Complete2024 (fill)',
            guardianContact: '6388308151',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 7,
            certificateId: '',
            studentName: 'Nitin',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'No Form',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: 'Complete2024 (Fill)',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 8,
            certificateId: '',
            studentName: 'Fazilat',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'O Level',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '7800065812',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '9532631075',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 9,
            certificateId: '',
            studentName: 'Zain',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'Data Analysis',
            batchName: 'Batch-4 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '8828408228',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '9696530020',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '07-09 PM',
            address: 'Lucknow',
        },
        {
            id: 10,
            certificateId: '',
            studentName: 'Sahil Zaidi',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'MCA',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '8932899637',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: 'Complete2024 (Fill)',
            guardianContact: '9389575258',
            activeStatus: 'A',
            assignmentStatus: 'Complete',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 11,
            certificateId: '',
            studentName: 'Alisha',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'No form',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 12,
            certificateId: '',
            studentName: 'Shivam',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'MBA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'No Form',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 13,
            certificateId: '',
            studentName: 'Zama',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: 'Sem 2',
            session: '',
            guardianContact: '',
            activeStatus: 'I',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 14,
            certificateId: '',
            studentName: 'Tatheer',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'CCC',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'No form',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 15,
            certificateId: '',
            studentName: 'Mukhtar Khan',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'DAC',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '95559652116',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '9506190576',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 16,
            certificateId: '',
            studentName: 'Rahbar Ayyub Khan',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 17,
            certificateId: '',
            studentName: 'Farhat Jaha',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MBA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 18,
            certificateId: '',
            studentName: 'Mahvish',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'AI/ML',
            batchName: 'Batch-3 M',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '9219207134',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: 'no',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '08-10 AM',
            address: 'Lucknow',
        },
        {
            id: 19,
            certificateId: '',
            studentName: 'Vaiza Meraj',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MBA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 20,
            certificateId: '',
            studentName: 'Amit Kumar',
            fatherName: '',
            enrollmentNo: '10245',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '6393419483',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '6394457330',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 21,
            certificateId: '',
            studentName: 'Ruchi Yadav',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 22,
            certificateId: '',
            studentName: 'Md Kaif',
            fatherName: '',
            enrollmentNo: '102428',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 23,
            certificateId: '',
            studentName: 'Aditya Yadav',
            fatherName: '',
            enrollmentNo: '102429',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 24,
            certificateId: '',
            studentName: 'Sahiba',
            fatherName: '',
            enrollmentNo: '102430',
            courseName: 'MS Office',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 25,
            certificateId: '',
            studentName: 'Abdur Rehman',
            fatherName: '',
            enrollmentNo: '102431',
            courseName: 'CCC',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 26,
            certificateId: '',
            studentName: 'Ayaan Ali',
            fatherName: '',
            enrollmentNo: '102432',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 27,
            certificateId: '',
            studentName: 'Abdul Wahab',
            fatherName: '',
            enrollmentNo: '102433',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 28,
            certificateId: '',
            studentName: 'Mehvish',
            fatherName: '',
            enrollmentNo: '102427',
            courseName: 'CCC',
            batchName: 'Batch-4 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '9369934848',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '9918140596',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '07-09 PM',
            address: 'Lucknow',
        },
        {
            id: 29,
            certificateId: '',
            studentName: 'Zehra Fatima',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'Python',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 30,
            certificateId: '',
            studentName: 'Shuja Ali',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 31,
            certificateId: '',
            studentName: 'Yasir',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 32,
            certificateId: '',
            studentName: 'Saumya',
            fatherName: '',
            enrollmentNo: '10241',
            courseName: 'MCA',
            batchName: 'Batch-2 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 33,
            certificateId: '',
            studentName: 'Sahil Abbas',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'AI/ML',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '8303777214',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '8795979915',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 34,
            certificateId: '',
            studentName: 'KMC',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'AI/ML',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 35,
            certificateId: '',
            studentName: 'Azam Raza',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'AI/ML',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: 'no form',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 36,
            certificateId: '',
            studentName: 'Sarojnee',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'AI/ML',
            batchName: 'Batch-3 M',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '8127575147',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '9559482802',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '08-10 AM',
            address: 'Lucknow',
        },
        {
            id: 37,
            certificateId: '',
            studentName: 'Shoaib',
            fatherName: '',
            enrollmentNo: '',
            courseName: 'Ms Office',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 38,
            certificateId: '',
            studentName: 'Animesh Singh',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 39,
            certificateId: '',
            studentName: 'Saumya Sonker',
            fatherName: '',
            enrollmentNo: '10249',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 40,
            certificateId: '',
            studentName: 'Quasain Haider',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 41,
            certificateId: '',
            studentName: 'Quosain hasan',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 42,
            certificateId: '',
            studentName: 'Ayan Ali',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 43,
            certificateId: '',
            studentName: 'Amir',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 44,
            certificateId: '',
            studentName: 'Jalal',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'MBA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 45,
            certificateId: '',
            studentName: 'Taufeeq Ansari',
            fatherName: '',
            enrollmentNo: '102442',
            courseName: 'PGDCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 46,
            certificateId: '',
            studentName: 'Ibadur Rehman',
            fatherName: '',
            enrollmentNo: '10242',
            courseName: 'AI/ML(Python)',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 47,
            certificateId: '',
            studentName: 'Shaikh Rehan',
            fatherName: '',
            enrollmentNo: '10243',
            courseName: 'AI/ML(Python)',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 48,
            certificateId: '',
            studentName: 'Shahzad Mirza',
            fatherName: '',
            enrollmentNo: '10244',
            courseName: '',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Pending',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 49,
            certificateId: '',
            studentName: 'Amit Kumar',
            fatherName: '',
            enrollmentNo: '10245',
            courseName: '',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 50,
            certificateId: '',
            studentName: 'Sarojnee',
            fatherName: '',
            enrollmentNo: '10246',
            courseName: 'AI/ML(Python)',
            batchName: 'Batch-3 M',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '08-10 AM',
            address: 'Lucknow',
        },
        {
            id: 51,
            certificateId: '',
            studentName: 'Mohtashim',
            fatherName: '',
            enrollmentNo: '10247',
            courseName: '',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 52,
            certificateId: '',
            studentName: 'Mukhtar',
            fatherName: '',
            enrollmentNo: '10248',
            courseName: '',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 53,
            certificateId: '',
            studentName: 'Fazilat',
            fatherName: '',
            enrollmentNo: '102410',
            courseName: '',
            batchName: 'Batch-1 E',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '06-08 PM',
            address: 'Lucknow',
        },
        {
            id: 54,
            certificateId: '',
            studentName: 'Bilal Haider',
            fatherName: '',
            enrollmentNo: '102411',
            courseName: '',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 55,
            certificateId: '',
            studentName: 'Abdul Wahab',
            fatherName: '',
            enrollmentNo: '102433',
            courseName: '',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2026',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 56,
            certificateId: '',
            studentName: 'Abu Ammar',
            fatherName: '',
            enrollmentNo: '102434',
            courseName: '(Full Stack)',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2026',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 57,
            certificateId: '',
            studentName: 'Mehvish',
            fatherName: '',
            enrollmentNo: '102427',
            courseName: 'CCC',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2024',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 58,
            certificateId: '',
            studentName: 'Saltanat Imran',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: '(Full Stack)',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 59,
            certificateId: '',
            studentName: 'Muaaz Ahmad Siddiqui',
            fatherName: '',
            enrollmentNo: 'No Form',
            courseName: 'BCA',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2025',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 60,
            certificateId: '',
            studentName: 'Fahad Waseem',
            fatherName: '',
            enrollmentNo: '102433',
            courseName: 'Frontend',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '2026',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 61,
            certificateId: '',
            studentName: 'Intekhab Husain',
            fatherName: '',
            enrollmentNo: '102455',
            courseName: 'AI/ML(Python)',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '-',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 62,
            certificateId: '',
            studentName: 'Hassan Ahmad',
            fatherName: '',
            enrollmentNo: '102456',
            courseName: '-',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
        {
            id: 63,
            certificateId: '',
            studentName: 'Hasan Baquir',
            fatherName: '',
            enrollmentNo: '102457',
            courseName: '-',
            batchName: '',
            issueDate: '',
            completionDate: '',
            grade: '',
            status: 'Verified',
            mobile: '',
            email: '',
            photo: userImage,
            semester: '',
            session: '-',
            guardianContact: '',
            activeStatus: 'A',
            assignmentStatus: '',
            batchTiming: '',
            address: 'Lucknow',
        },
    ]

    const courses = ['All', ...new Set(certificateData.map(item => item.courseName || '').filter(Boolean))]

    const filteredData = useMemo(() => {
        return certificateData.filter(item => {
            const search = searchTerm.toLowerCase()

            const matchesSearch =
                (item.studentName || '').toLowerCase().includes(search) ||
                (item.certificateId || '').toLowerCase().includes(search) ||
                (item.enrollmentNo || '').toLowerCase().includes(search) ||
                (item.mobile || '').toString().includes(searchTerm) ||
                (item.courseName || '').toLowerCase().includes(search) ||
                (item.address || '').toLowerCase().includes(search)

            const matchesStatus =
                statusFilter === 'All' || item.status === statusFilter

            const matchesCourse =
                courseFilter === 'All' || item.courseName === courseFilter

            return matchesSearch && matchesStatus && matchesCourse
        })
    }, [searchTerm, statusFilter, courseFilter])

    // const totalIssued = certificateData.length
    // const totalVerified = certificateData.filter(x => x.status === 'Verified').length
    // const totalPending = certificateData.filter(x => x.status === 'Pending').length
    // const totalRevoked = certificateData.filter(x => x.status === 'Revoked').length

    const totalStudents = certificateData.length
    const totalVerified = certificateData.filter(x => x.status === 'Verified').length
    const totalPending = certificateData.filter(x => x.status === 'Pending').length
    const totalInactive = certificateData.filter(x => x.activeStatus === 'I').length

    const getStatusBadge = (status) => {
        if (status === 'Verified') return 'badge bg-success'
        if (status === 'Pending') return 'badge bg-warning text-dark'
        if (status === 'Inactive') return 'badge bg-danger'
        return 'badge bg-secondary'
    }

    const getActiveBadge = (activeStatus) => {
        if (activeStatus === 'A') return 'badge bg-primary'
        if (activeStatus === 'I') return 'badge bg-danger'
        return 'badge bg-secondary'
    }

    const [selectedStudent, setSelectedStudent] = useState(null)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h4>Student Records</h4>
                                <nav className="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to='/'>Home</Link>
                                    </span>
                                    <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to="/Archieve">Archieve</Link>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb__shape-wrap">
                    <img src="assets/img/others/breadcrumb_shape01.svg" alt="img" className="alltuchtopdown" />
                    <img src="assets/img/others/breadcrumb_shape02.svg" alt="img" data-aos="fade-right" data-aos-delay="300" />
                    <img src="assets/img/others/breadcrumb_shape03.svg" alt="img" data-aos="fade-up" data-aos-delay="400" />
                    <img src="assets/img/others/breadcrumb_shape04.svg" alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                    <img src="assets/img/others/breadcrumb_shape05.svg" alt="img" data-aos="fade-left" data-aos-delay="400" />
                </div>
            </div>

            <div className='container'>
                <section className="courses__details-area section-py-120" style={{ background: '#f8fbff' }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold" style={{ color: '#3783F3' }}>
                                Student Records
                            </h2>
                            <p className="text-muted mb-0">
                                View, search and verify archived student records
                            </p>
                        </div>

                        <div className="row g-4 mb-4">
                            <div className="col-md-3">
                                <div className="card shadow-sm border-0 rounded-4 p-4 text-center" style={{ background: 'linear-gradient(135deg, #e3f2fd, #f8fbff)' }}>
                                    <h6 className="text-secondary mb-2">Total Students</h6>
                                    {/* <h3 className="fw-bold mb-0" style={{ color: '#3783F3' }}>{totalIssued}</h3> */}
                                    <h3 className="fw-bold mb-0" style={{ color: '#3783F3' }}>{totalStudents}</h3>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card shadow-sm border-0 rounded-4 p-4 text-center" style={{ background: 'linear-gradient(135deg, #e8f5e9, #f1fff5)' }}>
                                    <h6 className="text-secondary mb-2">Verified Records</h6>
                                    {/* <h3 className="fw-bold mb-0" style={{ color: '#28a745' }}>{totalVerified}</h3> */}
                                    <h3 className="fw-bold mb-0" style={{ color: '#28a745' }}>{totalVerified}</h3>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card shadow-sm border-0 rounded-4 p-4 text-center" style={{ background: 'linear-gradient(135deg, #fff8e1, #fffdf5)' }}>
                                    <h6 className="text-secondary mb-2">Pending Records</h6>
                                    {/* <h3 className="fw-bold mb-0" style={{ color: '#f39c12' }}>{totalPending}</h3> */}
                                    <h3 className="fw-bold mb-0" style={{ color: '#f39c12' }}>{totalPending}</h3>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card shadow-sm border-0 rounded-4 p-4 text-center" style={{ background: 'linear-gradient(135deg, #fdecea, #fff5f5)' }}>
                                    <h6 className="text-secondary mb-2">Inactive Records</h6>
                                    {/* <h3 className="fw-bold mb-0" style={{ color: '#e74c3c' }}>{totalRevoked}</h3> */}
                                    <h3 className="fw-bold mb-0" style={{ color: '#e74c3c' }}>{totalInactive}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-sm border-0 rounded-4 p-4 mb-4">
                            <div className="row g-3">
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by student name, certificate ID, enrollment no, course or address..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-3">
                                    <select
                                        className="form-select"
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                    >
                                        <option value="All">All Status</option>
                                        <option value="Verified">Verified</option>
                                        <option value="Pending">Pending</option>
                                        {/* <option value="Inactive">In Active</option> */}
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <select
                                        className="form-select"
                                        value={courseFilter}
                                        onChange={(e) => setCourseFilter(e.target.value)}
                                    >
                                        <option value="All">All Courses</option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-1">
                                    <button
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() => {
                                            setSearchTerm('')
                                            setStatusFilter('All')
                                            setCourseFilter('All')
                                        }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-sm border-0 rounded-4 p-3">
                            <div className="table-responsive certificateTbl">
                                <table className="table table-hover align-middle mb-0">
                                    <thead style={{ backgroundColor: '#eef5ff' }}>
                                        <tr>
                                            <th>#</th>
                                            <th>Student Name</th>
                                            <th>Course</th>
                                            <th>Address</th>
                                            <th>Date of Enrolment</th>
                                            <th>Date of Completion</th>
                                            <th>Certificate No</th>
                                            <th>Status</th>
                                            <th>Active Status</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.length > 0 ? (
                                            filteredData.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.studentName || ''}</td>
                                                    <td>{item.courseName || ''}</td>
                                                    <td>{item.address || ''}</td>
                                                    <td>{item.issueDate || ''}</td>
                                                    <td>{item.completionDate || ''}</td>
                                                    <td className="fw-semibold text-primary">{item.certificateId || ''}</td>
                                                    <td>
                                                        <span className={getStatusBadge(item.status)}>
                                                            {item.status || ''}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className={getActiveBadge(item.activeStatus)}>
                                                            {item.activeStatus === 'I' ? 'Inactive' : 'Active'}
                                                        </span>
                                                    </td>
                                                    {/* <td>
                                                        <button
                                                            className="btn btn-sm btn-outline-primary"
                                                            onClick={() => {
                                                                setSelectedStudent(item)
                                                                setShowModal(true)
                                                            }}
                                                        >
                                                            View
                                                        </button>
                                                    </td> */}
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="9" className="text-center py-4 text-muted">
                                                    No student records found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {showModal && selectedStudent && (
                            <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }}>
                                <div className="modal-dialog modal-lg modal-dialog-centered">
                                    <div className="modal-content rounded-4">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-bold text-primary">
                                                Student Certificate Details
                                            </h5>
                                            <button className="btn-close" onClick={() => setShowModal(false)}></button>
                                        </div>

                                        <div className="modal-body p-4">
                                            <div className="row">
                                                <div className="col-md-4 text-center">
                                                    <img
                                                        src={selectedStudent.photo ? selectedStudent.photo : userImage}
                                                        alt="student"
                                                        className="img-fluid mb-3 studentmg"
                                                    />
                                                    <h5 className="fw-bold">{selectedStudent.studentName}</h5>
                                                    <span className={getStatusBadge(selectedStudent.status)}>
                                                        {selectedStudent.status}
                                                    </span>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="fw-bold text-primary mb-3">Student Info</h6>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Student Name:</strong></div>
                                                        <div className="col-6">{selectedStudent.studentName || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Father Name:</strong></div>
                                                        <div className="col-6">{selectedStudent.fatherName || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Enrollment No:</strong></div>
                                                        <div className="col-6">{selectedStudent.enrollmentNo || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Mobile:</strong></div>
                                                        <div className="col-6">{selectedStudent.mobile || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Guardian Contact:</strong></div>
                                                        <div className="col-6">{selectedStudent.guardianContact || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Email:</strong></div>
                                                        <div className="col-6">{selectedStudent.email || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Address:</strong></div>
                                                        <div className="col-6">{selectedStudent.address || ''}</div>
                                                    </div>
                                                    <hr />

                                                    <h6 className="fw-bold text-primary mb-3">Course Info</h6>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Course:</strong></div>
                                                        <div className="col-6">{selectedStudent.courseName || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Batch:</strong></div>
                                                        <div className="col-6">{selectedStudent.batchName || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Semester:</strong></div>
                                                        <div className="col-6">{selectedStudent.semester || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Session:</strong></div>
                                                        <div className="col-6">{selectedStudent.session || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Assignment Status:</strong></div>
                                                        <div className="col-6">{selectedStudent.assignmentStatus || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Batch Timing:</strong></div>
                                                        <div className="col-6">{selectedStudent.batchTiming || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Completion Date:</strong></div>
                                                        <div className="col-6">{selectedStudent.completionDate || ''}</div>
                                                    </div>

                                                    <hr />

                                                    <h6 className="fw-bold text-primary mb-3">Certificate Info</h6>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Certificate ID:</strong></div>
                                                        <div className="col-6">{selectedStudent.certificateId || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Issue Date:</strong></div>
                                                        <div className="col-6">{selectedStudent.issueDate || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Grade:</strong></div>
                                                        <div className="col-6">{selectedStudent.grade || ''}</div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Status:</strong></div>
                                                        <div className="col-6">{selectedStudent.status || ''}</div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-6"><strong>Active Status:</strong></div>
                                                        <div className="col-6">{selectedStudent.activeStatus || ''}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}