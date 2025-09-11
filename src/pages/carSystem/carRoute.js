import CarRegister from './carManage'
import CarLogisticsRoute from './carLogisticsRoute'
import CarTraffic from './carTraffic'
import CarControl from './carControl'
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';

export const carRoute = [
  {
    path: '/car-manage',
    Component: CarRegister,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'car',
      title: '车辆管理',
      icon: <DriveEtaOutlinedIcon />,
      alias: 'carManage',
      role: ['admin', 'root']
    }
  },
  {
    path: '/car-logistics-route',
    Component: CarLogisticsRoute,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'car',
      title: '路线管理',
      icon: <AddRoadOutlinedIcon />,
      alias: 'carLogisticsRoute',
      role: ['admin', 'root']
    }
  },
  {
    path: '/car-control',
    Component: CarControl,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'car',
      title: '智能调度',
      icon: <EditCalendarOutlinedIcon />,
      alias: 'carControl',
      role: ['admin', 'root']
    }
  },
  {
    path: '/car-traffic',
    Component: CarTraffic,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'car',
      title: '运输跟踪',
      icon: <LocalShippingOutlinedIcon />,
      alias: 'carTraffic',
      role: ['admin', 'root']
    }
  },
]