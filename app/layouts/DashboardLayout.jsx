import React from 'react'
import useBodyClass from '../hooks/useBodyClass';
import Navbar from '../components/dashboard/Navbar';
import MainSidebar from '../components/dashboard/MainSidebar';
import Footer from '../components/dashboard/Footer';
import ControlSidebar from '../components/dashboard/ControlSidebar';
import ContentWrapper from '../components/dashboard/ContentWrapper';

function DashboardLayout({ children, title }) {
    useBodyClass("layout-fixed");
    return (
        <div className="wrapper">
            <Navbar />
            <MainSidebar />
            <ContentWrapper title={title} >
                {children}
            </ContentWrapper>
            <ControlSidebar />
            <Footer />
        </div>
    )
}

export default DashboardLayout