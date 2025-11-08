import {Box, Grid, Typography, Paper, styled, Stack} from '@mui/material'
import DroneCount1 from '@/assets/images/drone-count-1.svg'
import DroneCount2 from '@/assets/images/drone-count-2.svg'
import DroneCount3 from '@/assets/images/drone-count-3.svg'
import DroneCount4 from '@/assets/images/drone-count-4.svg'
import DroneCount5 from '@/assets/images/drone-count-5.svg'
import DroneCount6 from '@/assets/images/drone-count-6.svg'
import DroneCount7 from '@/assets/images/drone-count-7.svg'
import {useEffect, useState} from "react";
import {systemCount} from "@/services/index.js";

const IconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backColor' ,
})(({ theme, backColor }) => ({
  width: 50,
  height: 50,
  borderRadius: '50%',
  background: backColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}))

const Item = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'backColor' ,
})((props) => {
  const { theme, backColor } = props
  return {
	height: 100,
	backgroundColor: '#fff',
	padding: theme.spacing(2),
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '10px',
	overflow: 'hidden',
	['&::before']: {
	  position: 'absolute',
	  left: 0,
	  top: 0,
	  content: '""',
	  width: '2px',
	  height: '100%',
	  backgroundColor: backColor,
	}
  }
})

const Count1 = () => {
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

  return (
	<Grid container spacing={2} columns={12}>
	  <Grid size={3}>
		<Item elevation={0} backColor="#FFD54F">
		  <IconBox backColor="#FFD54F">
			<Box component="img" src={DroneCount1} sx={{width: 30, height: 30}} />
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  车辆总数
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				{count1?.vehicleCount}
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				辆
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#26C6DA">
		  <IconBox backColor="#26C6DA">
			<Box component="img" src={DroneCount2} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  在线车辆总数
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				{count1?.vehicleStatusCount}
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				辆
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#81C784">
		  <IconBox backColor="#81C784">
			<Box component="img" src={DroneCount3} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  调度任务总数
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				{count1?.dispatchesCount}
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				条
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#00B0FF">
		  <IconBox backColor="#00B0FF">
			<Box component="img" src={DroneCount6} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  路线总数量
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				{count1?.routesCount}
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				条
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#64B5F6">
		  <IconBox backColor="#64B5F6">
			<Box component="img" src={DroneCount1} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  司机总人数
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				{count1?.driveCount}
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				人
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#00B0FF">
		  <IconBox backColor="#00B0FF">
			<Box component="img" src={DroneCount4} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  消防设备总数
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				30
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				台
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#FF80AB">
		  <IconBox backColor="#FF80AB">
			<Box component="img" src={DroneCount5} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  UPS数量
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				30
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				台数
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	  <Grid size={3}>
		<Item elevation={0} backColor="#81C784">
		  <IconBox backColor="#81C784">
			<Box component="img" src={DroneCount7} sx={{width: 20, height: 20}}/>
		  </IconBox>
		  <Box>
			<Typography variant="body1" fontWeight="500" noWrap mb={1}>
			  电子围栏数量
			</Typography>
			<Stack direction="row" alignItems="baseline">
			  <Typography component="h6" variant="h4" fontWeight="700">
				{count1?.fencesCount}
			  </Typography>
			  <Typography fontWeight={500} variant="body2">
				个
			  </Typography>
			</Stack>
		  </Box>
		</Item>
	  </Grid>
	</Grid>
  )
}
export default Count1