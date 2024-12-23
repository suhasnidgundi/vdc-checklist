import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Dashboard from "../pages/dashboards/Dashboard";
import Welcome from "../pages/dashboards/Welcome";
import BMDashboard from "../pages/dashboards/BM/BMDashboard";
import BmGrid from "../pages/dashboards/BM/BmGrid";
import BmNightGrid from "../pages/dashboards/BM/BmNightGrid";
import BmNightTask from "../pages/dashboards/BM/BmNightTask";
import EditBmMorningTask from "../pages/dashboards/BM/EditBmMorningTask";
import EditBmNightTask from "../pages/dashboards/BM/EditBmNightTask";
import BmNightGridtGrid from "../pages/dashboards/BM/BmNightGridtGrid";
import AddBmMorningTask from "../pages/dashboards/BM/AddBmMorningTask";
import AddBmNightTask from "../pages/dashboards/BM/AddBmNightTask";
import CMDashboard from "../pages/dashboards/CM/CMDashboard";
import CmMorningTask from "../pages/dashboards/CM/CmMorningTask";
import CmNightTask from "../pages/dashboards/CM/CmNightTask";
import CmGrid from "../pages/dashboards/CM/CmGrid";
import BmcMorningGrid from "../pages/dashboards/CM/BmcMorningGrid";
import Bmc_NightGrid from "../pages/dashboards/CM/Bmc_NightGrid";
import CmTask from "../pages/dashboards/CM/CmTask";
import EditCmMorningTask from "../pages/dashboards/CM/EditCmMorningTask";
import EditCmNightTask from "../pages/dashboards/CM/EditCmNightTask";
import CmNightGrid from "../pages/dashboards/CM/CmNightGrid";
import ZonalList from "../pages/dashboards/ZONAL/ZonalList";
import Zcm_list from "../pages/dashboards/ZONAL/Zcm_list";
import Morningtask from "../pages/tasks/Morningtask";
import Nighttask from "../pages/tasks/Nighttask";
import CmMorningTasksk from "../pages/dashboards/CM/CmMorningTasksk";
import AVP_Dashboard from "../pages/dashboards/AVP/AVP_Dashboard";
import AvpBranch from "../pages/dashboards/AVP/AvpBranch";
import AvpCm from "../pages/dashboards/AVP/AvpCm";
import ZONAL_Dashboard from "../pages/dashboards/ZONAL/ZONAL_Dashboard";
import ManageBranch from "../pages/manage/ManageBranch";
import ManageCluster from "../pages/manage/ManageCluster";
import ManageUser from "../pages/manage/ManageUser";
import ManageArea from "../pages/manage/ManageArea";
import ManageClusterMap from "../pages/manage/ManageClusterMap";
import ManageZoneMap from "../pages/manage/ManageZoneMap";
import ManageZone from "../pages/manage/ManageZone";
import Unauthorized from "../pages/401";
import { ROLES } from "../../constants";
import Login from "../pages/auth/login";
import Logout from "../pages/auth/Logout";
import Middleware from "./middleware";
import BmCombinedGrid from "../pages/dashboards/BM/BmCombinedGrid";
import Bm_z_CombinedGrid from "../pages/dashboards/AVP/Bm_z_CombinedGrid";

export const router = createBrowserRouter([
  // Public routes (no authentication required)
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/",
    element: <Welcome />,
  },

  // Base level routes (accessible by all authenticated users)
  {
    element: <Middleware allowedRoles={[ROLES.AVP, ROLES.BM, ROLES.CM, ROLES.EMPLOYEE, ROLES.SUPER_ADMIN, ROLES.ZONAL_MANAGER]} />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ]
  },

  // Branch Manager routes
  {
    element: <Middleware allowedRoles={[ROLES.BM]} />,
    children: [
      {
        path: '/BM_Dashboard',
        element: <BMDashboard />,
      },
      {
        path: '/bmgrid',
        element: <BmGrid />,
      },
      {
        path: '/bmcombogrid',
        element: <BmCombinedGrid />,
      },
      {
        path: '/bmnightgrid',
        element: <BmNightGrid />,
      },
      {
        path: '/bmnighttask',
        element: <BmNightTask />,
      },
      {
        path: '/AddBmMorningTask',
        element: <AddBmMorningTask />,
      },
      {
        path: '/AddBmNightTask',
        element: <AddBmNightTask />,
      }
    ]
  },

  // Cluster Manager and higher routes
  {
    element: <Middleware allowedRoles={[ROLES.CM, ROLES.ZONAL_MANAGER, ROLES.AVP, ROLES.SUPER_ADMIN]} />,
    children: [
      {
        path: '/CM_Dashboard',
        element: <CMDashboard />,
      },
      {
        path: '/cmMorningTask',
        element: <CmMorningTasksk />,
      },
      {
        path: '/cmNightTask',
        element: <CmNightTask />,
      },
      {
        path: '/EditBmMorningTask',
        element: <EditBmMorningTask />,
      },
      {
        path: '/EditBmNightTask',
        element: <EditBmNightTask />,
      },
      {
        path: '/cmGrid',
        element: <CmGrid />,
      },
      {
        path: '/Bmc_morningGrid',
        element: <BmcMorningGrid />,
      },
      {
        path: '/Bmc_NightGrid',
        element: <Bmc_NightGrid />,
      },
      {
        path: '/EditCmMorningTask/:mid',
        element: <EditCmMorningTask />,
      },
      {
        path: '/EditCmNightTask/:cm_nid',
        element: <EditCmNightTask />,
      },
      {
        path: '/cmnightgrid',
        element: <CmNightGrid />,
      }
    ]
  },

  // Zonal Manager and higher routes
  {
    element: <Middleware allowedRoles={[ROLES.ZONAL_MANAGER, ROLES.AVP, ROLES.SUPER_ADMIN]} />,
    children: [
      {
        path: '/ZONAL_Dashboard',
        element: <ZONAL_Dashboard />,
      },
      {
        path: '/zonallist',
        element: <ZonalList />,
      },
      {
        path: '/zcm_list',
        element: <Zcm_list />,
      }
    ]
  },

  // AVP and higher routes
  {
    element: <Middleware allowedRoles={[ROLES.AVP, ROLES.SUPER_ADMIN, ROLES.ZONAL_MANAGER]} />,
    children: [
      {
        path: '/AVP_Dashboard',
        element: <AVP_Dashboard />,
      },
      {
        path: '/avpBranch',
        element: <AvpBranch />,
      },
      {
        path: '/avpCm',
        element: <AvpCm />,
      },
      {
        path: '/Bm_z_CombinedGrid',
        element: <Bm_z_CombinedGrid />,
      }
    ]
  },

  // Super Admin only routes
  {
    element: <Middleware allowedRoles={[ROLES.SUPER_ADMIN]} />,
    children: [
      {
        path: '/manage_branch',
        element: <ManageBranch />,
      },
      {
        path: '/manage_cluster',
        element: <ManageCluster />,
      },
      {
        path: '/manage_users',
        element: <ManageUser />,
      },
      {
        path: '/manage_area',
        element: <ManageArea />,
      },
      {
        path: '/cluster_map',
        element: <ManageClusterMap />,
      },
      {
        path: '/zone_map',
        element: <ManageZoneMap />,
      },
      {
        path: '/manage_zone',
        element: <ManageZone />,
      }
    ]
  }
]);