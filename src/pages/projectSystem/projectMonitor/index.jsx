import {useState} from 'react';
import {Box, ImageList, ImageListItem} from '@mui/material';
import Player from './components/player'
import { srcset } from '@/utils'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 1,
    cols: 1,
  },
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
        <ImageList cols={3} sx={{ mt: 0, mb: 0 }}>
          {itemData.map((item) => (
              <ImageListItem
                  key={item.img}
                  cols={item.cols || 1} rows={item.rows || 1}
                  sx={{ cursor: 'pointer' }}
                  onClick={openVideo(item)}
              >
                <img
                    {...srcset(item.img, 100, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
              </ImageListItem>
          ))}
        </ImageList>

        <Player open={open} data={data} onClose={onClose} />
      </Box>
  )
}
export default ProjectMonitor