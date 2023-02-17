import React from 'react';
import Header from '../components/Header/Header';
import SidebarLeft from '../components/SidebarLeft/SidebarLeft';
import SidebarRight from '../components/SidebarRight/SidebarRight';

const Layout = ({ children }) => {
    return (
        <main className='container'>
            <SidebarLeft />
            <Header />
            <div className='content'>{children}</div>
            <SidebarRight />
        </main>
    );
};

export default Layout;
