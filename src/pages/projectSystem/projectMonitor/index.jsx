import {useState} from 'react';
import {Box, Grid, ImageList, ImageListItem} from '@mui/material';
import Player from './components/player'
import { srcset } from '@/utils'
import CustomVideo from '@/components/customVideo'
import video1 from '@/assets/videos/1.mp4'
import video2 from '@/assets/videos/2.mp4'
import video3 from '@/assets/videos/3.mp4'
import video4 from '@/assets/videos/4.mp4'

const itemData = [
  {
    img: video1,
    rows: 1,
    cols: 1,
  },
  {
    img: video2,
    rows: 1,
    cols: 1,
  },
  {
    img: video3,
    rows: 1,
    cols: 1,
  },
  {
    img: video4,
    rows: 1,
    cols: 1,
  }
]

const ProjectMonitor = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({})
  const openVideo = (item) => () => {
    setData(item)
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
      <Box>
        <Grid sx={{ mt: 0, mb: 0 }} container spacing={2}>
          {itemData.map((item, index) => (
              <Grid size={6} key={index} onClick={openVideo(item)}>
                <CustomVideo src={item.img} />
              </Grid>
          ))}
        </Grid>

        <Player open={open} data={data} onClose={onClose} />
      </Box>
  )
}
export default ProjectMonitor