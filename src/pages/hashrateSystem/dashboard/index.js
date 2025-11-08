import React from 'react'
import { Box, Grid, Typography, Paper, Divider } from '@mui/material'
import Count1 from './components/count1.jsx'
import Count4 from './components/count4.jsx'
import Count3 from './components/count3.jsx'
import Count2 from './components/count2.jsx'
import Count5 from './components/count5.jsx'

export default function FleetLogisticsDashboard() {
  return (
	<Box sx={{ p: 4 }}>
	  <Count1 />
	  <Grid container spacing={2} mt={2}>
		<Grid item size={3}>
		  <Count2 />
		</Grid>
		<Grid item size={6}>
		  <Count3 />
		</Grid>
		<Grid item size={3}>
		  <Count4 />
		  <Paper sx={{ p: 2, mt: 2 }}>
			<Typography variant="subtitle2" gutterBottom>近期运输任务</Typography>
			<Divider />
			<Box mt={1}>
			  <Count5 />
			</Box>
		  </Paper>
		</Grid>
	  </Grid>
	</Box>
  )
}
