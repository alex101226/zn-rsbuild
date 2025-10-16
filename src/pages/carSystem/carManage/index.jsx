import {useState, useEffect, useMemo} from 'react';
import {Box, Button, Stack} from '@mui/material'
import {carStatusFilter} from '@/filters';
import CustomTable from "@/components/customTable";
import CustomPagination from '@/components/customPagination';
import CustomImage from '@/components/customImage'
import { renderCellExpand } from '@/components/CustomCellExpand'
import SaveCarDrawer from './components/saveCarDrawer'
import DetailsDrawer from './components/detailDrawer.jsx'
import ControlErrorDialog from "@/pages/carSystem/carControl/components/controlErrorDialog";
import {getVehicle, postDispatchAllVehicles, postDispatchVehicle} from '@/services'
import { useUserStore } from '@/store'
import {message} from "@/utils/index.js";

const initialStateSelectionModel = {
  type: 'include',
  ids: new Set(),
}
const CarRegister = () => {
  const { userInfo } = useUserStore()

  const isRoot = () => {
    return userInfo?.role_name === 'root'
  }

  const {CAR_STATUS_OPTIONS, renderCarStatus} = carStatusFilter()
  const getColumn = () => {
    const columns = [
      {
        headerName: '车辆照片',
        field: 'vehicle_photo',
        flex: 1,
        minWidth: 80,
        renderCell: (params) => {
          return params.value ? <CustomImage
              w={60}
              h={60}
              fit="cover"
              mt="calc((80px - 60px) / 2)"
              radius={1}
              img={globalThis.CONSTANTS.STATIC_URL + params.value}
          /> : <Box sx={{
            width: 60,
            height: 60,
            borderRadius: 1,
            backgroundColor: '#ccc',
            mt: 'calc((80px - 60px) / 2)' }}
          />
        }
      },
      { headerName: '车辆名称', field: 'vehicle_alias', renderCell: renderCellExpand, flex: 1, minWidth: 150,},
      { headerName: '里程数/KM', field: 'mileage', renderCell: renderCellExpand, flex: 1, minWidth: 150,},
      { headerName: '燃油类型', field: 'fuel_type', renderCell: renderCellExpand, flex: 1, minWidth: 150,},
      { headerName: '所属部门', field: 'department', renderCell: renderCellExpand, flex: 1, minWidth: 150, },
      { headerName: '负责人', field: 'operator_nickname', renderCell: renderCellExpand, flex: 1, minWidth: 150, },
      {
        headerName: '车辆状态',
        field: 'status',
        flex: 1, minWidth: 150,
        renderCell: (params) => renderCarStatus(params.value),
        valueOptions: CAR_STATUS_OPTIONS,
      },
      { headerName: '备注信息', field: 'remark', flex: 1, minWidth: 150, renderCell: renderCellExpand, },
    ]
    if (!isRoot()) {
      return columns
    }
    return [
      ...columns,
      {
        headerName: '操作',
        field: 'action',
        flex: 1,
        minWidth: 250,
        renderCell: (params) => {
          return <Box>
            <Button onClick={onEdit('edit', params.row)}>
              修改
            </Button>
            <Button
                disabled={['2', '3'].includes(params.row.status)}
                onClick={onEdit('dispatch', params.row)}
                loading={loading2}>
              调度
            </Button>
            <Button onClick={() => handleOpenDetails(params.row)}>
              查看详情
            </Button>
          </Box>
        }
      },
    ]
  }

  //  获取车辆信息
  const [tableData, setTableData] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const fetchVehicle =  (p = 1) => {
    const params = {
      page: p,
      pageSize: 10,
    }
    getVehicle(params).then((res) => {
      if (res.code === 0) {
        setTotal(res.data.total)
        setTotalPages(res.data.totalPages)
        setTableData(res.data.data)
      }
    })
  }

  useEffect(() => {
    fetchVehicle()
  }, [])

  //  分页查看
  const savePage = (page) => {
    fetchVehicle(page)
    setPage(page)
  }

  //  添加修改open
  const [saveOpen, setSaveOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState('add');
  //  显示调度信息dialog显示
  const [errorOpen, setErrorOpen] = useState(false)
  const [errorText, setErrorText] = useState('')

  const onEdit = (type, row) => () => {
    if (type === 'dispatch') {
      onDispatch(row.id)
    } else {
      setRecord(row ? row : null)
      setType(type)
      setSaveOpen(true)
    }
  };

  //  关闭活动窗口
  const onClose = (type, flag) => {
    setRecord(null)
    switch (type) {
      case 'save':
        setSaveOpen(false)
          if (flag) {
            fetchVehicle(page)
          }
        break;
      case 'info':
        setErrorText('')
        setErrorOpen(false)
        setSelectionModel(initialStateSelectionModel)
        break;
    }
  }

  //  查看详情
  const [openDetails, setOpenDetails] = useState(false)
  const handleOpenDetails = (row) => {
    setRecord(row)
    setOpenDetails(true)
  }
  //  关闭
  const onDetailsClose = () => {
    setRecord(null)
    setOpenDetails(false)
  }

  //  调度
  const [selectionModel, setSelectionModel] = useState(initialStateSelectionModel);
  const changeSelectionModal = (rows) => {
    setSelectionModel(rows)
  }
  const selectedVehicleIds = useMemo(() => {
    const { type, ids } = selectionModel;
    if (type === 'include') {
      return tableData.filter((item) => ids.has(item.id)).map((item) => item.id)
    } else if (type === 'exclude') {
      return tableData.filter((item) => !ids.has(item.id)).map((item) => item.id);
    }
    return [];
  }, [selectionModel])

  //  一键调度
  const [loading1, setLoading1] = useState(false)
  const handleAllDispatch = () => {
    const params = {
      vehicle_ids: selectedVehicleIds
    }
    if (loading1) return false;
    setLoading1(true)
    postDispatchAllVehicles(params).then((res) => {
      if (res.code === 0) {
        fetchVehicle(page)
      }
      setErrorText(res.message)
      setErrorOpen(true)
      setLoading1(false)
    }).catch((err) => {
      message.error('操作失败')
      setLoading1(false)
    })
  }

  //  单个车辆调度
  const [loading2, setLoading2] = useState(false)
  const onDispatch = (id) => {
    if (loading2) return false;
    setLoading2(true)
    postDispatchVehicle({ vehicle_id: id }).then((res) => {
      if (res.code === 0) {
        message.success('操作成功')
        setSelectionModel(initialStateSelectionModel)
        // fetchVehicleControl(page)
        fetchVehicle(page)
      } else {
        message.error(res.message)
      }
      setLoading2(false)
    }).catch((err) => {
      message.error('操作失败')
      setLoading2(false)
    })
  }

  return (
    <Box sx={{ width: '100%' }}>
      { isRoot() ?
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={onEdit('add', null)}>
              车辆注册
            </Button>
            <Button
                variant="contained"
                onClick={handleAllDispatch}
                loading={loading1}
                disabled={selectedVehicleIds.length === 0}>
              一键调度
            </Button>
          </Stack>
      : null}

      <Box sx={{ height: 'calc(100vh) - 250px', mt: 2 }}>
        <CustomTable
            tableData={tableData}
            column={getColumn()}
            rowKeyProp="id"
            hideFooter
            rowHeight={80}
            checkboxSelection
            isRowSelectable={(params) => ['1', '4'].includes(params.row.status)}
            rowSelectionModel={selectionModel}
            onRowSelectionModelChange={(rowSelectionModel) => changeSelectionModal(rowSelectionModel)}
        />
      </Box>
      <CustomPagination
          total={total}
          pageSize={5}
          page={page}
          totalPage={totalPages}
          savePage={savePage}
      />
      <SaveCarDrawer
          open={saveOpen}
          data={ record }
          type={type}
          onClose={ (flag) => onClose('save', flag) }
      />
      <DetailsDrawer open={openDetails} onDetailsClose={onDetailsClose} data={record} />

      <ControlErrorDialog
          open={errorOpen}
          data={errorText}
          onClose={() => onClose('info', false)}
      />
    </Box>
  )
}
export default CarRegister