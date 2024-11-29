import React from 'react'
import useAuthStore from '../../store/authStore';
import { getRoutesByRole } from '../../../constants';

const SidebarActionLinks = [
    {
        title: "Dashboard",
        icon: "fas fa-tachometer-alt",
        link: "BM_Dashboard"
    },
    {
        title: "Settings",
        icon: "fas fa-cogs",
        subLinks: [
            {
                title: "Manage Zone",
                icon: "fas fa-map-marked-alt",
                link: "/manage_zone"
            },
            {
                title: "Branch List",
                icon: "fas fa-list",
                link: "/manage_branch"
            },
            {
                title: "Cluster List",
                icon: "fas fa-list",
                link: "/manage_cluster"
            },
            {
                title: "Zone Map",
                icon: "fas fa-map",
                link: "/zone_map"
            },
            {
                title: "User Details",
                icon: "fas fa-user",
                link: "/manage_users"
            }
        ]
    },
    // {
    //     title: "BM Morning Task",
    //     icon: "fas fa-tasks",
    //     link: "/bmgrid"
    // },
    // {
    //     title: "BM Night Closing Task",
    //     icon: "fas fa-tasks",
    //     link: "/bmnightgrid"
    // },
    {
        title: "Log Out",
        icon: "fas fa-sign-out-alt",
        link: "/logout"
    }
]

function MainSidebar() {

    const { role } = useAuthStore();

    // Get routes for the current user's role
    const routes = getRoutesByRole(role);

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
            <a href="index3.html" className="brand-link">
                <img src="/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                {/* <!-- Sidebar user panel (optional) --> */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>


                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* <!-- Add icons to the links using the .nav-icon class\n with font-awesome or any other icon font library --> */}
                        {routes.map((route) => {
                            return (
                                <>
                                <h1>hello</h1>
                                </>
                                // <li key={index} className={`nav-item ${link?.subLinks ? 'menu' : ''}`}>
                                //     <a href={link?.link} className={`nav-link ${link?.subLinks ? 'menu-toggle' : ''}`}
                                //         onClick={(e) => {
                                //             if (link?.subLinks) {
                                //                 e?.preventDefault();
                                //                 e?.currentTarget.parentElement.classList.toggle('menu-open');
                                //             }
                                //         }}>
                                //         <i className={link?.icon} style={{ marginRight: "1vh" }}></i>
                                //         <p>
                                //             {link?.title}
                                //             {link?.subLinks && <i className="right fas fa-angle-left"></i>}
                                //         </p>
                                //     </a>
                                //     {link?.subLinks && <ul className="nav nav-treeview">
                                //         {link?.subLinks?.map((subLink, index) => {
                                //             return (
                                //                 <li key={index} className="nav-item">
                                //                     <a href={subLink?.link} className="nav-link">
                                //                         <i className={subLink?.icon} style={{ marginRight: "1vh" }}></i>
                                //                         <p>{subLink?.title}</p>
                                //                     </a>
                                //                 </li>
                                //             )
                                //         }
                                //         )
                                //         }
                                //     </ul>}
                                // </li>
                            )
                        })}
                    </ul>
                </nav>
                {/* <!-- /.sidebar-menu --> */}
            </div>
            {/* <!-- /.sidebar --> */}
        </aside >
    )
}

export default MainSidebar