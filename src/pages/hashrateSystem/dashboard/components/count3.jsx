import { useEffect, useState } from "react";
import {Box, Stack, styled, Typography} from '@mui/material'
import CustomCard from "@/components/customCard/index.jsx";
import { vehicleTaskCount } from '@/services'

const Item = styled(Box)(({theme, borderColor, width}) => ({
  border: `2px solid ${borderColor}`,
  padding: theme.spacing(2.55),
  borderRadius: 4,
  backgroundColor: borderColor,
  color: 'white',
  height: 92,
  width: `${width}%`,
}))
const Count3 = () => {
  const [data, setData] = useState({})
  const initFetch = () => {
	vehicleTaskCount().then(res => {
	  if (res.code === 0) {
		setData(res.data)
	  }
	})
  }

  useEffect(() => {
	initFetch()
  }, [])
  const renderHeader = () => {
	return (
	  <Stack direction="row" spacing={1} alignItems="center">
		<Box sx={{width: 4, height: 16, background: 'var(--custom-input-border-color)'}}/>
		<Stack direction="row" alignItems="baseline">
		  <Typography component="p" variant="body2">
			运输统计
		  </Typography>
		</Stack>
	  </Stack>
	)
  }

  return (
	<CustomCard
	  cardType="outlined"
	  actionChildren={renderHeader()}>
	  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
		<Item borderColor="#303F9F" width={100}>
		  <Stack flexGrow={1} direction="row" justifyContent="space-between" alignItems="center">
			<Typography variant="body2">运输时间</Typography>
			<Typography fontSize={18} color="#fff">
			  {data?.totalHours}小时
			</Typography>
		  </Stack>
		</Item>
		<Box sx={{mb: 2}} />
		<Item borderColor="#4527A0" width={100}>
		  <Stack direction="row" justifyContent="space-between" alignItems="center">
			<Typography variant="body2">里程数</Typography>
			<Typography fontSize={18} color="#fff">
			  {data?.totalDistanceKm}千米
			</Typography>
		  </Stack>
		</Item>
		<Box sx={{mb: 2}} />
		<Item borderColor="#6A1B9A" width={100}>
		  <Stack direction="row" justifyContent="space-between" alignItems="center">
			<Typography variant="body2">已完成任务</Typography>
			<Typography fontSize={18} color="#fff">
			  {data?.completedTaskCount}条
			</Typography>
		  </Stack>
		</Item>
		<Box sx={{mb: 2}} />
		<Item borderColor="#AB47BC" width={100}>
		  <Stack direction="row" justifyContent="space-between" alignItems="center">
			<Typography variant="body2">任务总数</Typography>
			<Typography fontSize={18} color="#fff">
			  {data?.totalTaskCount}条
			</Typography>
		  </Stack>
		</Item>
	  </Box>
	</CustomCard>
  )
}
export default Count3