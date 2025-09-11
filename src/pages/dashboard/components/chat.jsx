import CustomCard from "@/components/customCard/index.jsx";
import {Box, Card, Grid} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Chat = () => {
  return (
      <Card className="dashboard-card" elevation={0} sx={{
        backgroundColor: 'transparent',
      }}>
        <CustomCard
            title="数据概况"
            showDivider
            compIcon={<AnalyticsIcon sx={{ color: 'var(--custom-palette-typography)' }} />}
        >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Card
                  variant="outlined"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    borderRadius: 2,
                  }}>
                <BarChart
                    xAxis={[
                      { id: 'barCategories', data: ['bar A', 'bar B', 'bar C', 'bar D', 'bar E'] },
                    ]}
                    series={[
                      { data: [2, 5, 3, 10, 8] },
                    ]}
                    height={300}
                />
              </Card>
            </Grid>

            <Grid size={6}>
              <Card
                  variant="outlined"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    borderRadius: 2,
                  }}>
                <LineChart
                    xAxis={[{ id: 'x', data: [1, 2, 3, 5, 8] }]}
                    series={[{ data: [2, 5.5, 2, 8.5, 1.5] }]}
                    height={300}
                    width={500}
                />
              </Card>
            </Grid>
          </Grid>
        </CustomCard>
      </Card>
  )
}
export default Chat;