import {Box} from '@mui/material';
import CustomDrawer from "@/components/customDrawer";
import CustomVideo from "@/components/customVideo";
import { srcset } from '@/utils'

export default function AnchorTemporaryDrawer(props) {
  const { open, data, onClose } = props

  const handleClose = () => {
    onClose()
  }

  const renderContent = () => {
    return (
        <Box sx={{ height: 'calc(100vh - 120px)',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CustomVideo src={data.img} />
        </Box>
    )
  }

  return (
      <CustomDrawer
          title="查看监控"
          w={100}
          open={open}
          onClose={handleClose}
          children={renderContent()}
      />
  );
}
