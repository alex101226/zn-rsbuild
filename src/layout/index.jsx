import React, {useEffect} from 'react';
import { Outlet, useLocation, useMatches } from 'react-router';
import {Box, Stack, Toolbar} from '@mui/material'
import Header from './components/header'
import Sidebar from './components/sidebar';
import SidebarItem from './components/sidebarItem';
import CustomServiceDrawer from "@/components/customServiceDrawer";
import {useServiceDrawer, useSystem} from '@/store';
import { hashrateRoute } from '@/pages/hashrateSystem/hashrateRoute';
import { carRoute } from '@/pages/carSystem/carRoute'
import { projectRoute } from '@/pages/projectSystem/projectRoute'
import { peopleRoute } from '@/pages/peopleSystem/peopleRoute'
import serviceImage from "@/assets/images/service.png";


const menuData = {
  //  算力系统菜单
  hashrate: hashrateRoute,
  //  生产管理菜单
  project: projectRoute,
  //  车辆管理菜单
  car: carRoute,
  //  人员管理菜单
  people: peopleRoute,
  //  ai助手菜单
  // ai: aiRoute,
}

const Layout = () => {
  const matches = useMatches();
  const current = matches.at(-1);
  const { currentSystem, setSystem } = useSystem()

  useEffect(() => {
    const has = globalThis.CONSTANTS.CURRENT_SYSTEM.includes(current.handle.system)
    const isCurrent = currentSystem !== current.handle.system
    if (has && isCurrent) {
      setSystem(current.handle.system)
    }
  }, [current.handle.system])

  const getMenuList = () => menuData[currentSystem]

  //  客服
  const location = useLocation();
  const showButton = () => location.pathname !== '/login';
  const { setServiceDrawer, } = useServiceDrawer()
  const renderFixedButton = () => {
    return (
        <Box
            component="img"
            sx={{ width: '56px', height: '56px', position: 'fixed', bottom: '200px', right: '16px', cursor: 'pointer', }}
            src={serviceImage}
            alt=""
            onClick={() => setServiceDrawer(true)}
        />
    )
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--custom-body-background)'
    }}>
      <Toolbar>
        <Header />
      </Toolbar>
      <Stack direction="row" flexGrow={1}>
        {
          current.handle.hideSide
              ? null
              : <Sidebar><SidebarItem list={getMenuList()}/></Sidebar>
        }
        <Box
            component="main"
            sx={{
              width: 'calc(100% - 240px)',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              flex: 1 }}>
          <Outlet />
        </Box>
      </Stack>

      {showButton() && renderFixedButton()}
      <CustomServiceDrawer />
    </Box>
  )
}
export default Layout;