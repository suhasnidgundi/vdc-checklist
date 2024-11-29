import React, { useState } from 'react'
import useAuthStore from '../../store/authStore';
import { getRoutesByRole } from '../../../constants';
import { Link } from 'react-router-dom';
import { getUsername } from '../../libs/user';

function MainSidebar() {
    const { role } = useAuthStore();
    const [openMenus, setOpenMenus] = useState({});

    // Get routes for the current user's role
    const routes = getRoutesByRole(role);

    const toggleMenu = (index) => {
        setOpenMenus(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo and User Panel remain the same */}
            {/* <!-- Brand Logo --> */}
            <Link to="/dashboard" className="brand-link">
                {/* <img src="/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} /> */}
                <center><strong className="brand-text font-weight-bold">VDC Checklist</strong></center>
            </Link>


            <div className="sidebar">

                {/* <!-- Sidebar user panel (optional) --> */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={`https://avatar.vercel.sh/${getUsername}?size=30`} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <Link to="#" className="d-block">{getUsername()}</Link>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {routes.map((link, index) => {
                            const isMenuOpen = openMenus[index];

                            return (
                                <li
                                    key={index}
                                    className={`nav-item ${link?.subLinks ? 'menu' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
                                >
                                    <Link
                                        to={link?.link}
                                        className={`nav-link ${link?.subLinks ? 'menu-toggle' : ''}`}
                                        onClick={(e) => {
                                            if (link?.subLinks) {
                                                e.preventDefault();
                                                toggleMenu(index);
                                            }
                                        }}
                                    >
                                        <i className={link?.icon} style={{ marginRight: "1vh" }}></i>
                                        <p>
                                            {link?.title}
                                            {link?.subLinks && <i className="right fas fa-angle-left"></i>}
                                        </p>
                                    </Link>
                                    {link?.subLinks && (
                                        <ul className={`nav nav-treeview ${isMenuOpen ? 'menu-open' : ''}`}>
                                            {link?.subLinks?.map((subLink, subIndex) => (
                                                <li key={subIndex} className="nav-item">
                                                    <Link to={subLink?.link} className="nav-link">
                                                        <i className={subLink?.icon} style={{ marginRight: "1vh" }}></i>
                                                        <p>{subLink?.title}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default MainSidebar