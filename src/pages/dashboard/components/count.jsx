import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, Grid} from "@mui/material";
import CustomCard from '@/components/customCard'

export const platforms = {
  node: [
    {label: '已完成', value: 59.12,},
    {label: '总数', value: 40.88,},
  ],
  core: [
    {label: '已完成', value: 59.12,},
    {label: '总数', value: 40.88,},
  ],
  card: [
    {label: '已完成', value: 59.12,},
    {label: '总数', value: 40.88,},
  ],
  task: [
    {label: '已完成', value: 59.12,},
    {label: '总数', value: 40.88,},
  ]
}

const palette = {
  node: ['#0088FE', 'slateblue'],
  core: ['#00C49F', 'slateblue'],
  card: ['#FFBB28', 'slateblue'],
  task: ['#FF8042', 'slateblue'],
};

const pieParams = {
  height: 200,
  margin: { right: 5 },
  hideLegend: true,
};

export default function PieColor() {
  return (
      <Grid container spacing={2} sx={{ flex: 1, minWidth: '100%'}}>
        <Grid size={ 3 }>
          <CustomCard>
            <Box sx={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
              <Typography component="h6" variant="h6">节点</Typography>
              <Box sx={{width: '5px'}} />
              <Typography component="p" variant="p">总数 5</Typography>
            </Box>
            <Box sx={{pt: 2, pb: 2}}>
              <PieChart
                  colors={palette.node}
                  series={[
                    {
                      data: platforms.node,
                      innerRadius: 50, outerRadius: 100, arcLabel: 'value'
                    },
                  ]}
                  {...pieParams}
              />
            </Box>
          </CustomCard>
        </Grid>

        <Grid size={ 3 }>
          <CustomCard>
            <Box sx={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
              <Typography component="h6" variant="h6">CPU</Typography>
              <Box sx={{width: '5px'}} />
              <Typography component="p" variant="p">总核心数 5</Typography>
            </Box>
            <Box sx={{pt: 2, pb: 2}}>
              <PieChart
                  colors={palette.core}
                  series={[
                    {
                      data: platforms.core,
                      innerRadius: 50,
                      outerRadius: 100,
                      arcLabel: 'value'
                    },
                  ]}
                  {...pieParams}
              />
            </Box>
          </CustomCard>
        </Grid>
        <Grid size={ 3 }>
          <CustomCard>
            <Box sx={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
              <Typography component="h6" variant="h6">GPU</Typography>
              <Box sx={{width: '5px'}} />
              <Typography component="p" variant="p">总卡数 5</Typography>
            </Box>
            <Box sx={{pt: 2, pb: 2}}>
              <PieChart
                  colors={palette.task}
                  series={[
                    {
                      data: platforms.task,
                      innerRadius: 50, outerRadius: 100, arcLabel: 'value'
                    },
                  ]}
                  {...pieParams}
              />
            </Box>
          </CustomCard>
        </Grid>
        <Grid size={ 3 }>
          <CustomCard>
            <Box sx={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
              <Typography component="h6" variant="h6">任务</Typography>
              <Box sx={{width: '5px'}} />
              <Typography component="p" variant="p">总数 5</Typography>
            </Box>
            <Box sx={{pt: 2, pb: 2}}>
              <PieChart
                  colors={palette.core}
                  series={[
                    {
                      data: platforms.core,
                      innerRadius: 50, outerRadius: 100, arcLabel: 'value'
                    },
                  ]}
                  {...pieParams}
              />
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
  );
}
