import React from 'react'
import Header from '../../component/Header'
import AboutUs from '../AboutUs'
import Footer from '../../component/Footer'
import CourseMCA from '../CourseMCA'

export default function LayoutCourseMCA() {
    return (
        <div>
            <Header />
            <CourseMCA />
            <Footer />
        </div>
    )
}
