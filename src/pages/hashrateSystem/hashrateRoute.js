import HashrateCpu from './hashrateCpu'
import HashrateUserManage from './hashrateUserManage'
import HashrateTaskStatus from './hashrateTaskStatus'
import HashrateTaskResource from './hashrateTaskResource'
import Dashboard from './dashboard/index.js'

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const hashrateRoute = [
  {
	path: '/',
	Component: Dashboard,
	handle: {
	  hideMenuIcon: false,
	  hideSide: false,
	  system: 'hashrate',
	  title: '首页',
	  icon: <HomeOutlinedIcon />,
	  alias: 'dashboard',
	  role: ['admin', 'root']
	}
  },
  {
    path: '/hashrate-cpu',
    Component: HashrateCpu,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'hashrate',
      title: '仪表盘',
      icon: <AccessTimeOutlinedIcon />,
      alias: 'hashrateCpu',
      role: ['admin', 'root']
    }
  },
  {
    path: '/hashrate-user',
    Component: HashrateUserManage,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'hashrate',
      title: '用户管理',
      icon: <PersonOutlineOutlinedIcon />,
      alias: 'hashrateUserManage',
      role: ['root']
    }
  },
  {
    path: '/hashrate-task-status',
    Component: HashrateTaskStatus,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'hashrate',
      title: '任务状态',
      icon: <TaskAltOutlinedIcon />,
      alias: 'hashrateTaskStatus',
      role: ['admin', 'root']
    },
  },
  {
    path: '/hashrate-task-resource',
    Component: HashrateTaskResource,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'hashrate',
      title: '资源开销',
      icon: <ExploreOutlinedIcon />,
      alias: 'hashrateTaskResource',
      role: ['admin', 'root']
    },
  }
]