import React from 'react'
import Header from '../../component/Header'
import AboutUs from '../AboutUs'
import Footer from '../../component/Footer'
import CourseMCOM from '../CourseMCOM'

export default function LayoutCourseMCOM() {
    return (
        <div>
            <Header />
            <CourseMCOM />
            <Footer />
        </div>
    )
}
