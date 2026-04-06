import React from 'react'
import Header from '../../component/Header'
import ProjectManagement from '../ProjectManagement'
import Footer from '../../component/Footer'

export default function LayoutProjectManagement() {
    return (
        <div>
            <Header />
            <ProjectManagement />
            <Footer />
        </div>
    )
}
