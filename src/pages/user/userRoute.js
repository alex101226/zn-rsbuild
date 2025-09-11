import UserInfo from './userInfo'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const userRoute = [
  {
    path: '/user-info',
    Component: UserInfo,
    handle: {
      hideMenuIcon: false,
      hideSide: true,
      system: 'origin',
      title: '个人中心',
      icon: <DirectionsCarIcon />,
      alias: 'carManage',
      role: 'root'
    }
  },
]