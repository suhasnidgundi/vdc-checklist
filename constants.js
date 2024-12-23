export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  AVP: 'AVP',
  ZONAL_MANAGER: 'ZONAL_MANAGER',
  CM: 'CM',
  BM: 'BM',
  EMPLOYEE: 'EMPLOYEE'
};

// Role hierarchy defining access levels (higher roles can access lower role features)
export const ROLE_HIERARCHY = {
  [ROLES.SUPER_ADMIN]: [
    ROLES.SUPER_ADMIN,
    ROLES.AVP,
    ROLES.ZONAL_MANAGER,
    ROLES.CM,
    ROLES.BM,
    ROLES.EMPLOYEE
  ],
  [ROLES.AVP]: [
    ROLES.AVP,
    ROLES.ZONAL_MANAGER,
    ROLES.CM,
    ROLES.BM,
    ROLES.EMPLOYEE
  ],
  [ROLES.ZONAL_MANAGER]: [
    ROLES.ZONAL_MANAGER,
    ROLES.CM,
    ROLES.BM,
    ROLES.EMPLOYEE
  ],
  [ROLES.CM]: [
    ROLES.CM,
    ROLES.BM,
    ROLES.EMPLOYEE
  ],
  [ROLES.BM]: [
    ROLES.BM,
    ROLES.EMPLOYEE
  ],
  [ROLES.EMPLOYEE]: [
    ROLES.EMPLOYEE
  ]
};

// 
export const ROLE_ROUTES = {
  [ROLES.BM]: [
    { link: '/BM_Dashboard', title: 'BM Dashboard', icon: 'fas fa-tachometer-alt' },
    { link: '/bmcombogrid', title: 'BM Tasks', icon: 'fas fa-th' },
    { link: '/forgot-password', title: 'Change Password', icon: 'fas fa-unlock-alt' },
    {
      title: "Log Out",
      icon: "fas fa-sign-out-alt",
      link: "/logout"
    }
  ],
  [ROLES.CM]: [
    { link: '/CM_Dashboard', title: 'CM Dashboard', icon: 'fas fa-chart-line' },
    { link: '/bmcombogrid', title: 'BM Tasks', icon: 'fas fa-th' },
    { link: '/forgot-password', title: 'Change Password', icon: 'fas fa-unlock-alt' },
    {
      title: "Log Out",
      icon: "fas fa-sign-out-alt",
      link: "/logout"
    }
  ],
  [ROLES.AVP]: [
    {
      title: "Dashboard",
      icon: "fas fa-tachometer-alt",
      link: "/AVP_Dashboard"
    },
    {
      title: "BM Tasks",
      icon: "fas fa-th",
      link: "/Bm_z_CombinedGrid"
    },
    { link: '/forgot-password', title: 'Change Password', icon: 'fas fa-unlock-alt' },
    {
      title: "Log Out",
      icon: "fas fa-sign-out-alt",
      link: "/logout"
    }
  ],
  [ROLES.ZONAL_MANAGER]: [
    {
      title: "Dashboard",
      icon: "fas fa-tachometer-alt",
      link: "/ZONAL_Dashboard"
    },
    {
      title: "BM Tasks",
      icon: "fas fa-th",
      link: "/Bm_z_CombinedGrid"
    },
    { link: '/forgot-password', title: 'Change Password', icon: 'fas fa-unlock-alt' },
    {
      title: "Log Out",
      icon: "fas fa-sign-out-alt",
      link: "/logout"
    }
  ],
  [ROLES.SUPER_ADMIN]: [
    {
      title: "Dashboard",
      icon: "fas fa-tachometer-alt",
      link: "/dashboard"
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
    { link: '/forgot-password', title: 'Change Password', icon: 'fas fa-unlock-alt' },
    {
      title: "Log Out",
      icon: "fas fa-sign-out-alt",
      link: "/logout"
    }
  ]
};

// Utility function to get routes for a specific role
export const getRoutesByRole = (role) => {
  return ROLE_ROUTES[role] || [];
};