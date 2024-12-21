// Description: This file contains all the constants used in the application.

// Roles
export const ROLES = {
  BRANCH_MANAGER: 'BRANCH_MANAGER',
  CLUSTER_MANAGER: 'CLUSTER_MANAGER',
  AVP: 'AVP',
  ZONAL_MANAGER: 'ZONAL_MANAGER',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

// In constants.js or a new file like roleRoutes.js
export const ROLE_ROUTES = {
  [ROLES.BRANCH_MANAGER]: [
    { link: '/dashboard', title: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { link: '/BM_Dashboard', title: 'Branch Manager Dashboard', icon: 'fas fa-tachometer-alt' },
    // Add other BM-specific routes
  ],
  [ROLES.CLUSTER_MANAGER]: [
    { path: '/dashboard', label: 'Dashboard', icon: 'home' },
    { path: '/CM_Dashboard', label: 'CM Dashboard', icon: 'chart-line' },
    { path: '/cmMorningTask', label: 'Morning Tasks', icon: 'sun' },
    { path: '/cmNightTask', label: 'Night Tasks', icon: 'moon' },
    { path: '/cmGrid', label: 'Task Grid', icon: 'grid' },
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
      link: "/avpBranch"
    },
    {
      title: "CM Tasks",
      icon: "fas fa-th",
      link: "/avpCm"
    },
    {
      title: "AVP Tasks",
      icon: "fas fa-th",
      link: "/"
    }
  ],
  [ROLES.ZONAL_MANAGER]: [
    { path: '/dashboard', label: 'Dashboard', icon: 'home' },
    { path: '/ZONAL_Dashboard', label: 'Zonal Dashboard', icon: 'chart-line' },
    { path: '/zonallist', label: 'Zonal List', icon: 'list' },
    { path: '/zcm_list', label: 'CM List', icon: 'users' },
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

// Predefined test users
export const MOCK_USERS = {
  'bm@test.com': {
    email: 'bm@test.com',
    name: 'Branch Manager',
    user: 'Branch Manager',
    role: ROLES.BRANCH_MANAGER
  },
  'cm@test.com': {
    email: 'cm@test.com',
    name: 'Cluster Manager',
    user: 'Cluster Manager',
    role: ROLES.CLUSTER_MANAGER
  },
  'avp@test.com': {
    email: 'avp@test.com',
    name: 'Assistant Vice President',
    role: ROLES.AVP
  },
  'zonal@test.com': {
    email: 'zonal@test.com',
    name: 'Zonal Manager',
    role: ROLES.ZONAL_MANAGER
  },
  'admin@test.com': {
    email: 'admin@test.com',
    name: 'System Admin',
    role: ROLES.ADMIN
  }
}

export const generateDemoData = () => {
  return [
    {
      mid: 1,
      branch_name: 'Mumbai Central',
      createdDTM: '2024-02-15T08:30:00',
      fname: 'Rahul',
      lname: 'Sharma',
      cluster_name: 'West',
      zone_name: 'Maharashtra'
    },
    {
      mid: 2,
      branch_name: 'Delhi North',
      createdDTM: '2024-02-16T09:15:00',
      fname: 'Priya',
      lname: 'Patel',
      cluster_name: 'North',
      zone_name: 'Delhi NCR'
    },
    {
      mid: 3,
      branch_name: 'Bangalore Tech',
      createdDTM: '2024-02-17T07:45:00',
      fname: 'Anil',
      lname: 'Kumar',
      cluster_name: 'South',
      zone_name: 'Karnataka'
    },
    {
      mid: 4,
      branch_name: 'Chennai Industrial',
      createdDTM: '2024-02-18T08:00:00',
      fname: 'Deepa',
      lname: 'Reddy',
      cluster_name: 'South',
      zone_name: 'Tamil Nadu'
    },
    {
      mid: 5,
      branch_name: 'Kolkata East',
      createdDTM: '2024-02-19T09:30:00',
      fname: 'Sanjay',
      lname: 'Gupta',
      cluster_name: 'East',
      zone_name: 'West Bengal'
    },
    {
      mid: 6,
      branch_name: 'Pune Corporate',
      createdDTM: '2024-02-20T07:15:00',
      fname: 'Meera',
      lname: 'Desai',
      cluster_name: 'West',
      zone_name: 'Maharashtra'
    },
    {
      mid: 7,
      branch_name: 'Hyderabad Tech Park',
      createdDTM: '2024-02-21T08:45:00',
      fname: 'Vikram',
      lname: 'Singh',
      cluster_name: 'South',
      zone_name: 'Telangana'
    },
    {
      mid: 8,
      branch_name: 'Ahmedabad Business',
      createdDTM: '2024-02-22T09:00:00',
      fname: 'Neha',
      lname: 'Patel',
      cluster_name: 'West',
      zone_name: 'Gujarat'
    },
    {
      mid: 9,
      branch_name: 'Jaipur Heritage',
      createdDTM: '2024-02-23T07:30:00',
      fname: 'Rajesh',
      lname: 'Mehta',
      cluster_name: 'North',
      zone_name: 'Rajasthan'
    },
    {
      mid: 10,
      branch_name: 'Lucknow Government',
      createdDTM: '2024-02-24T08:15:00',
      fname: 'Asha',
      lname: 'Kumari',
      cluster_name: 'North',
      zone_name: 'Uttar Pradesh'
    }
  ];
};