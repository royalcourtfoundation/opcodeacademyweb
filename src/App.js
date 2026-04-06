import logo from './logo.svg';
import './App.css';
import '../src/assets/css/main.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import LayoutIndex from './pages/Layout/LayoutIndex';
import LayoutCourses from './pages/Layout/LayoutCourses';
import LayoutCertificateInDA from './pages/Layout/LayoutCertificateInDA';
import LayoutCertificateinHealthcareInformatics from './pages/Layout/LayoutCertificateinHealthcareInformatics';
import LayoutFullStackDevelopment from './pages/Layout/LayoutFullStackDevelopment';
import LayoutCertificateinSoftwareArchitect from './pages/Layout/LayoutCertificateinSoftwareArchitect';
import LayoutUIUXGraphicsDesigning from './pages/Layout/LayoutUIUXGraphicsDesigning';
import LayoutCertificateinMobileAppDevelopment from './pages/Layout/LayoutCertificateinMobileAppDevelopment';
import LayoutDigitalMarketing from './pages/Layout/LayoutDigitalMarketing';
import LayoutProjectManagement from './pages/Layout/LayoutProjectManagement';
import LayoutOLevel from './pages/Layout/LayoutOLevel';
import LayoutALevel from './pages/Layout/LayoutALevel';
import LayoutCCC from './pages/Layout/LayoutCCC';
import LayoutADCA from './pages/Layout/LayoutADCA';
import LayoutPersonalityDevelopment from './pages/Layout/LayoutPersonalityDevelopment';
import LayoutAboutUs from './pages/Layout/LayoutAboutUs';
import LayoutContactUs from './pages/Layout/LayoutContactUs';
import LayoutBusinessPartnerShip from './pages/Layout/LayoutBusinessPartnerShip';
import LayoutCareer from './pages/Layout/LayoutCareer';
import LayoutCertificateinAIML from './pages/Layout/LayoutCertificateinAIML';
import LayoutDac from './pages/Layout/LayoutDac';
import LayoutGallery from './pages/Layout/LayoutGallery';
import LayoutDiploma from './pages/Layout/LayoutDiploma';
import LayoutUndergraduate from './pages/Layout/LayoutUndergraduate';
import LayoutPostGraduate from './pages/Layout/LayoutPostGraduate';
import LayoutHealthcareInformatice from './pages/Layout/LayoutHealthcareInformatice';
import Certification from './pages/Certification';
import LayoutNielit from './pages/Layout/LayoutNielit';
import LayoutCertification from './pages/Layout/LayoutCertification';
import LayoutCourseBA from './pages/Layout/LayoutCourseBA';
import LayoutCourseBCA from './pages/Layout/LayoutCourseBCA';
import LayoutCourseBBA from './pages/Layout/LayoutCourseBBA';
import LayoutCourseBCOM from './pages/Layout/LayoutCourseBCOM';
import LayoutCourseBSC from './pages/Layout/LayoutCourseBSC';
import LayoutCourseMA from './pages/Layout/LayoutCourseMA';
import LayoutCourseMSC from './pages/Layout/LayoutCourseMSC';
import LayoutCourseMCOM from './pages/Layout/LayoutCourseMCOM';
import LayoutCourseMCA from './pages/Layout/LayoutCourseMCA';
import LayoutCourseMBA from './pages/Layout/LayoutCourseMBA';
import LayoutIssuedCertificetes from './pages/Layout/LayoutIssuedCertificetes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutIndex />} />
        <Route path="/pagenotfound/" element={<NotFound />} />
        <Route path="/aboutus/" element={<LayoutAboutUs />} />
        <Route path="/contactus/" element={<LayoutContactUs />} />
        <Route path="/courses/" element={<LayoutCourses />} />
        <Route path="/CertificateInDataAnalytics/" element={<LayoutCertificateInDA />} />
        <Route path="/CertificateinAIML/" element={<LayoutCertificateinAIML />} />
        <Route path="/CertificateinHealthcareInformatics/" element={<LayoutCertificateinHealthcareInformatics />} />
        <Route path="/FullStackDevelopment/" element={<LayoutFullStackDevelopment />} />
        <Route path="/CertificateinSoftwareArchitect/" element={<LayoutCertificateinSoftwareArchitect />} />
        <Route path="/UIUXGraphicsDesigning/" element={<LayoutUIUXGraphicsDesigning />} />
        <Route path="/CertificateinMobileAppDevelopment/" element={<LayoutCertificateinMobileAppDevelopment />} />
        <Route path="/DigitalMarketing/" element={<LayoutDigitalMarketing />} />
        <Route path="/ProjectManagement/" element={<LayoutProjectManagement />} />
        <Route path="/PersonalityDevelopment/" element={<LayoutPersonalityDevelopment />} />
        <Route path="/OLevel/" element={<LayoutOLevel />} />
        <Route path="/ALevel/" element={<LayoutALevel />} />
        <Route path="/CCC/" element={<LayoutCCC />} />
        <Route path="/ADCA/" element={<LayoutADCA />} />
        <Route path="/businesspartnership/" element={<LayoutBusinessPartnerShip />} />
        <Route path="/photogallery/" element={<LayoutGallery />} />
        <Route path="/Dac/" element={<LayoutDac />} />
        <Route path="/undergraduate/" element={<LayoutUndergraduate />} />
        <Route path="/diploma/" element={<LayoutDiploma />} />
        <Route path="/postgraduate/" element={<LayoutPostGraduate />} />
        <Route path="/healthcareinformatics/" element={<LayoutHealthcareInformatice />} />
        <Route path="/nielit/" element={<LayoutNielit />} />
        <Route path="/certification/" element={<LayoutCertification />} />
        <Route path="/CourseBA/" element={<LayoutCourseBA />} />
        <Route path="/CourseBCA/" element={<LayoutCourseBCA />} />
        <Route path="/CourseBBA/" element={<LayoutCourseBBA />} />
        <Route path="/CourseBCOM/" element={<LayoutCourseBCOM />} />
        <Route path="/CourseBSC/" element={<LayoutCourseBSC />} />
        <Route path="/CourseMA/" element={<LayoutCourseMA />} />
        <Route path="/CourseMSC/" element={<LayoutCourseMSC />} />
        <Route path="/CourseMCOM/" element={<LayoutCourseMCOM />} />
        <Route path="/CourseMCA/" element={<LayoutCourseMCA />} />
        <Route path="/CourseMBA/" element={<LayoutCourseMBA />} />
        <Route path="/Archieve/" element={<LayoutIssuedCertificetes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
