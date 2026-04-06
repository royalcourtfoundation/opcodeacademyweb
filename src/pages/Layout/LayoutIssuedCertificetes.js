import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import IssuedCertificetes from '../IssuedCertificetes'

export default function LayoutIssuedCertificetes() {
    return (
        <>
            <Header />
            <IssuedCertificetes />
            <Footer />
        </>
    )
}
