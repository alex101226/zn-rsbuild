import ProjectMonitor from './projectMonitor';
import ProjectUps from './projectUps';
import ProjectFireDevice from './projectFireDevice';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FireHydrantAltOutlinedIcon from '@mui/icons-material/FireHydrantAltOutlined';
import Battery4BarOutlinedIcon from '@mui/icons-material/Battery4BarOutlined';

export const projectRoute = [
  // {
  //   path: '/project-monitor',
  //   Component: ProjectMonitor,
  //   handle: {
  //     hideMenuIcon: false,
  //     hideSide: false,
  //     system: 'project',
  //     title: '摄像头监控',
  //     icon: <VideocamOutlinedIcon />,
  //     role: ['admin', 'root']
  //   }
  // },
  {
    path: '/project-fire-device',
    Component: ProjectFireDevice,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'project',
      title: '消防设备',
      icon: <FireHydrantAltOutlinedIcon />,
      role: ['admin', 'root']
    }
  },
  {
    path: '/project-ups',
    Component: ProjectUps,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'project',
      title: '电源管理',
      icon: <Battery4BarOutlinedIcon />,
      role: ['admin', 'root']
    }
  },
]