import {Box, Grid, Typography} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router';
import CustomCard from '@/components/customCard/index.jsx';
import image1 from '@/assets/images/rstudio.png';
import image2 from '@/assets/images/jupyter.png';
import image3 from '@/assets/images/paraview.png';
import image4 from '@/assets/images/vscode.png';

const data = [
  { id: 1, url: image1, title: '算力管理系统', link: '/hashrate-cpu'},
  { id: 2, url: image2, title: '安全生产管理系统', link: '/project-monitor'},
  { id: 3, url: image3, title: '运输车辆管理', link: '/car-manage'},
  { id: 4, url: image4, title: '人员安全管理', link: '/people-position'},
  // { id: 5, url: image4, title: '人工智能AI助手', link: '/ai-safety'},
]
const Platform = () => {
  //  跳转
  const navigate = useNavigate();
  const onRouter = (link) => () => {
    console.log('link', link)
    navigate(link)
  }

  return (
      <Box>
        <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          <DashboardIcon />
          <Typography variant="div" component="span">
            平台入口
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }} />
        <Grid container spacing={ 2 }>
          {
            data.map((item) => (
                <Grid size={2.4} key={item.id}>
                  <CustomCard>
                    <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          cursor: 'pointer' }}
                        onClick={onRouter(item.link)}>
                      <Box
                          component="img"
                          src={ item.url }
                          alt=""
                          sx={{
                            height: '100px',
                            borderRadius: 2,
                            mb: 3
                          }}
                      />
                      <Typography variant="div" component="p">
                        { item.title }
                      </Typography>
                    </Box>
                  </CustomCard>
                </Grid>
            ))
          }
        </Grid>
      </Box>
  )
}
export default Platform;