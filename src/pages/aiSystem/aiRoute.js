import AiSafety from './aiSafety';
import AiProductProcess from './aiProductProcess';
import AiBusinessProcess from './aiBusinessProcess';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export const aiRoute = [
  {
    path: 'ai-safety',
    Component: AiSafety,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'ai',
      title: '生产安全指导',
      icon: <DirectionsCarIcon />,
      role: 'root'
    }
  },
  {
    path: 'ai-product-process',
    Component: AiProductProcess,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'ai',
      title: '生产流程培训',
      icon: <DirectionsCarIcon />,
      role: 'root'
    }
  },
  {
    path: 'ai-business-process',
    Component: AiBusinessProcess,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'ai',
      title: '业务流程培训',
      icon: <DirectionsCarIcon />,
      role: 'root'
    }
  },
]