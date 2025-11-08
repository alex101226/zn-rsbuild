import {useEffect, useState} from 'react';
import {Box, Grid} from '@mui/material';
import CustomCard from "@/components/customCard/index.jsx";
import Count1 from './components/count1.jsx'
import Chat from './components/count3.jsx'
import Count from './components/count2.jsx'
import Count4 from './components/count4.jsx'
import Count5 from './components/count5.jsx'
import { systemCount } from '@/services'

const Dashboard = () => {

  const [count1, setCount1] = useState({})
  const fetchSystemCount = () => {
	systemCount().then(res => {
	  if (res.code === 0) {
		setCount1(res.data)
	  }
	})
  }

  //	初始化接口
  const initFetch = () => {
	fetchSystemCount()
  }
  useEffect(() => {
	initFetch()
  }, [])
  //	执行任务的总消耗时间，里程数，总的任务次数，
  return (
    <Box className="dashboard-box" sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
	  {/*<Count1 data={count1} />*/}
	  {/*<Box sx={{height: 20}} />*/}
	  <Grid container spacing={2}>
		<Grid size={3}>
		  {/*<Count5 />*/}
		  {/*<Box sx={{height: 20}} />*/}
		  <Count />
		</Grid>
		<Grid size={6}>
		  {/*<Count1 data={count1} />*/}
		  <Count5 />
		</Grid>
		<Grid size={3}>
		  <Chat />
		  {/*<Box sx={{height: 20}} />*/}
		  {/*<Count4 />*/}
		</Grid>
	  </Grid>
    </Box>
  );
}
export default Dashboard;