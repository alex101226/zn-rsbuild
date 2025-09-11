import {Box, Toolbar, Drawer, AppBar, Typography, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { srcset } from '@/utils'

export default function AnchorTemporaryDrawer(props) {
  const { open, data, onClose } = props

  const handleClose = () => {
    onClose()
  }

  const saveImg = () => {
    if (!data.img) {
      return ''
    }
    return srcset(data.img, 500, 1, 1)
  }

  return (
      <Drawer
          elevation={0}
          open={open}
          variant="temporary"
          onClose={handleClose}
          anchor="top"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2,
            '& .MuiDrawer-paper': {
              width: '100%'
            },
          }}
      >
        <AppBar elevation={0} component="nav" sx={{ position: 'sticky', width: '100%'}}>
          <Toolbar>
            <Typography
                variant="p"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              查看监控
            </Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
            component="main"
            sx={{
              height: 'calc(100vh - 64px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
        }}>
          {
            data.img ? <img src={saveImg().srcSet} alt="" loading="lazy" /> : null
          }
        </Box>
      </Drawer>
  );
}
