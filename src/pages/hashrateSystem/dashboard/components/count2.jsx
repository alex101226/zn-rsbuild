import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import {Button, Card, Grid, Stack, Tooltip} from "@mui/material";
import CustomCard from '@/components/customCard/index.jsx'
import { deviceCount } from '@/services'
import {getUsageRate} from "@/utils/index.js";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const pieParams = {
  height: 160,
  margin: { right: 5 },
  hideLegend: true,
};

function PieCenterLabel({ children, dy }) {
  return (
	<text
	  x="50%"
	  y="50%"
	  textAnchor="middle"
	  dominantBaseline="middle"
	  style={{ fontSize: 14, fill: '#555' }}
	>
	  <tspan x="50%" dy={dy}>{children}</tspan>
	</text>
  );
}

export default function PieColor() {

  const [routes, setRoutes] = useState([])
  const [vehicles, setVehicles] = useState([])

  const initFetch = () => {
	deviceCount().then(res => {
	  if (res.code === 0) {
		setRoutes(res.data.routes)
		setVehicles(res.data.vehicles)
	  }
	})
  }

  useEffect(() => {
	initFetch()
  }, [])

  const renderHeader = (title) => {
	return (
	  <Stack direction="row" spacing={1} alignItems="center">
		<Box sx={{width: 4, height: 16, background: 'var(--custom-input-border-color)'}}/>
		<Stack direction="row" alignItems="baseline">
		  <Typography component="p" variant="body2">
			{title}
		  </Typography>
		</Stack>
	  </Stack>
	)
  }

  //	车辆使用率，路线使用率，
  const renderPieCount = (item) => {
	return (
	  <PieChart
		colors={item.colors}
		series={[
		  {
			data: item.list,
			innerRadius: 55,
			outerRadius: 80,
			faded: { additionalRadius: -5 },
		  },
		]}
		{...pieParams}
		slotProps={{ tooltip: { trigger: 'none' }}}
	  >
		<PieCenterLabel dy="-0.4em">
		  {item.list?.[0]?.label}：{item.list?.[0]?.value}
		</PieCenterLabel>
		<PieCenterLabel dy="1.4em">
		  {item.list?.[1]?.label}：{item.list?.[1]?.value}
		</PieCenterLabel>
	  </PieChart>
	)
  }

  return (
	<Box>
	  <CustomCard
		actionChildren={renderHeader('车辆状态')}>
		{renderPieCount({colors: ['#3949AB', '#E8EAF6'], list: vehicles})}
	  </CustomCard>
	  <Box sx={{height: 20}} />
	  <CustomCard
		actionChildren={renderHeader('路线状态')}>
		{renderPieCount({colors: ['#651FFF', '#E3F2FD'], list: routes})}
	  </CustomCard>
	</Box>
  );
}
