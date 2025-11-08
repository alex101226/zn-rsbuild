import React, {useEffect, useState} from "react";
import {getTransport} from "@/services/index.js";
import {genAllLogistics} from "@/pages/carSystem/mock.js";
import {Box, Grid, Tooltip, Typography} from "@mui/material";

const Count5 = () => {
  const [tableData, setTableData] = useState([])

  const fetchVehicleControl = () => {
	getTransport().then(({ data, code }) => {
	  if (code === 0) {
		const vehicleList = data.data ? data.data : []
		const newData = genAllLogistics(vehicleList)
		setTableData(newData.slice(0, 5))
	  }
	})
  }

  useEffect(() => {
	fetchVehicleControl()
  }, [])

  const statusText = (status) => {
	switch (status) {
	  case '1':
		return '运输中';
	  case '2':
		return '延时';
	  case '3':
		return '待发车';
	  case '4':
		return '已完成';
	  default:
		return '已完成'
	}
  }
  return (
	<Box>
	  <Grid container spacing={2}>
		<Grid size={4}>
		  <Typography noWrap variant="caption">
			运输号
		  </Typography>
		</Grid>
		<Grid size={4}>
		  <Typography noWrap variant="caption">
			运输状态
		  </Typography>
		</Grid>
		<Grid size={4}>
		  <Typography noWrap variant="caption">
			预计到达时间
		  </Typography>
		</Grid>
	  </Grid>
	  {tableData.map(t => (
		<Grid container spacing={2} key={t.id}>
		  <Grid size={4} mb={0.9}>
			<Tooltip title={t.task_id}>
			  <Typography noWrap variant="caption" component="p">
				{t.task_id}
			  </Typography>
			</Tooltip>
		  </Grid>
		  <Grid size={4}>
			<Tooltip title={statusText(t.status)}>
			  <Typography noWrap variant="caption" component="p">
				{statusText(t.status)}
			  </Typography>
			</Tooltip>
		  </Grid>
		  <Grid size={4}>
			<Tooltip title={t.expected_end_time}>
			  <Typography noWrap variant="caption" component="p">
				{t.expected_end_time}
			  </Typography>
			</Tooltip>
		  </Grid>
		</Grid>
	  ))}
	</Box>
  )
}
export default Count5