import { useState, useEffect } from 'react';
import {Box, Typography, Autocomplete, Stack, TextField} from '@mui/material'
import CustomTable from '@/components/customTable'
import { renderCellExpand } from '@/components/CustomCellExpand'
import CustomPagination from '@/components/customPagination'
import {renderEmptyFilter, dispatchStatusFilter} from '@/filters';
import {getVehicleControlHistory} from '@/services'

const PAGE_SIZE = 10

const statusOptions = [
  { value: '1', label: '执行中' },
  { value: '2', label: '空闲' },
  { value: '3', label: '已完成' },
]
const CarControl = () => {
  const {DISPATCH_STATUS_OPTIONS, renderDispatchStatus} = dispatchStatusFilter()
  const getColumn = () => {
    return [
      { headerName: '车辆名称', field: 'vehicle_alias', flex: 1, minWidth: 150 },
      // {
      //   headerName: '车辆调度状态',
      //   field: 'control_status',
      //   flex: 1,
      //   minWidth: 150,
      //   renderCell: (params) => renderCarDispatchStatus(params.value),
      //   valueOptions: CAR_DISPATCH_STATUS_OPTIONS,
      // },
      {
        headerName: '调度状态',
        field: 'dispatch_status',
        flex: 1,
        minWidth: 150,
        renderCell: (params) => renderDispatchStatus(params.value),
        valueOptions: DISPATCH_STATUS_OPTIONS,
      },
      {
        headerName: '路线名称',
        field: 'route_name',
        flex: 1, minWidth: 150,
        renderCell: renderCellExpand
      },
      // { headerName: '车牌号', field: 'plate_number', flex: 1, minWidth: 150 },
      // { headerName: '里程数/KG', field: 'mileage', flex: 1, minWidth: 150 },
      { headerName: '总里程（KM）', field: 'distance_km', flex: 1, minWidth: 150, renderCell: renderEmptyFilter },
      { headerName: '预计时长（H）', field: 'estimated_time', flex: 1, minWidth: 150, renderCell: renderEmptyFilter },
      // {
      //   headerName: '起点', field: 'route_start', flex: 1, minWidth: 150,
      //   renderCell: renderEmptyFilter
      // },
      // {
      //   headerName: '终点', field: 'route_end', flex: 1, minWidth: 150,
      //   renderCell: renderEmptyFilter
      // },
      {
        headerName: '司机信息',
        field: 'drivers',
        flex: 2,
        minWidth: 150,
        renderCell: (params) => {
          return (
              <Box component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  height: '100%' }}>
                {
                  (params.value || []).map((item, index) => (
                      <Typography
                          key={index}
                          component="p"
                          variant="body2"
                          sx={{ lineHeight: 1.4 }}>
                        {item.name}: {item.phone}
                      </Typography>
                  ))
                }
              </Box>
          )
        },
      },
    ]
  }

  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [statusData, setStatusData] = useState({
    value: '',
    label: ''
  })

  const fetchHistory = (p = 1, status = '') => {
    const params = {
      page: p,
      status,
      pageSize: PAGE_SIZE,
    }
    getVehicleControlHistory(params).then(({ data, code }) => {
      if (code === 0) {
        setTotalPage(data.totalPages)
        setTotal(data.total)
        setTableData(data.data)
      }
    })
  }

  useEffect(() => {
    fetchHistory()
  }, [])

  //  状态搜索
  const handleSearch = (event, newValue) => {
    const obj = !!newValue ? newValue : { value: '', label: '' }
    setStatusData(obj)
    fetchHistory(page, obj.value)
  }

  //  分页
  const savePage = (page) => {
    setPage(page)
    fetchHistory(page, statusData.value)
  }

  return (
      <Box sx={{ width: '100%' }}>
        <Stack spacing={3} sx={{ width: 300 }} direction="row" alignItems="center">
          <Autocomplete
              fullWidth
              options={statusOptions}
              getOptionKey={(option) => option.value}
              getOptionLabel={(option) => option.label || ''}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              value={statusData}
              onChange={handleSearch}
              renderInput={(params) =>
                  <TextField
                      {...params}
                      label="调度状态"
                      placeholder="请输入"
                  />
              }
          />
        </Stack>
        <Box sx={{ height: 'calc(100vh - 250px)', mt: 2 }}>
          {/*  isRowSelectable={(params) => params.row.control_status === '2'} */}
          <CustomTable
              column={getColumn()}
              tableData={tableData}
              rowKeyProp="batch_id"
              rowHeight={90}
              hideFooter
          />
        </Box>
        <CustomPagination
            total={total}
            pageSize={PAGE_SIZE}
            page={page}
            totalPage={totalPage}
            savePage={savePage}
        />

        {/*<ControlErrorDialog*/}
        {/*    open={open}*/}
        {/*    data={errorText}*/}
        {/*    onClose={() => onClose('info')}*/}
        {/*/>*/}

        {/*<ControlHistoryDialog*/}
        {/*    open={openHistory}*/}
        {/*    data={record}*/}
        {/*    onClose={() => onClose('history')}*/}
        {/*/>*/}
      </Box>
  )
}
export default CarControl