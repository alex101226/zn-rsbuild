import { BarChart } from '@mui/x-charts/BarChart';
import {Box, Stack, Typography} from "@mui/material";
import CustomCard from "@/components/customCard/index.jsx";
import {genFireDeviceList, genUPSList} from "@/pages/projectSystem/mock.js";

const chartSetting = {
  yAxis: [
	{
	  width: 30,
	},
  ],
}
const labelMap = ['异常', '正常'];

const Count4 = () => {

  //	消防
  const fireData = () => {
	const fireList = genFireDeviceList(30)

	const fire = fireList.filter((item) => ['1', '4'].includes(item.status))
	return {
	  data1: 30 - fire.length,
	  data2: fire.length,
	}
  }

  //	ups电源
  const upsData = () => {
	const upsList = genUPSList(30)
	const ups = upsList.filter((item) => ['1', '4'].includes(item.status))
	return {
	  data1: 30 - ups.length,
	  data2: ups.length,
	}
  }
  const renderHeader = () => {
	return (
	  <Stack direction="row" spacing={1} alignItems="center">
		<Box sx={{width: 4, height: 16, background: 'var(--custom-input-border-color)'}}/>
		<Stack direction="row" alignItems="baseline">
		  <Typography component="p" variant="body2">
			设备统计
		  </Typography>
		</Stack>
	  </Stack>
	)
  }

  return (
	<CustomCard actionChildren={renderHeader()} variant="outlined">
	  <BarChart
		xAxis={[{ data: ['消防设备', 'UPS电源'] }]}
		series={[
		  {
			data: [fireData().data1, upsData().data1],
			label: labelMap[0],
			color: '#C62828',
		  },
		  {
			data: [fireData().data2, upsData().data2],
			label: labelMap[1],
			color: '#0D47A1',
		  },
		]}
		height={142}
		{...chartSetting}
	  />
	</CustomCard>
  )
}
export default Count4