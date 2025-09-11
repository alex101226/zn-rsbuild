import { useState, useEffect, Fragment } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router';
import { useSidebar, useUserStore } from '@/store';

const SidebarItem = ({list = []}) => {
  // 记录哪些菜单展开
  const [openMenu, setOpenMenu] = useState({});

  //  打开下级
  const onToggle = (menu) => {
    console.log('toggle一直在出发吗')
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const { openSidebar } = useSidebar();

  const { userInfo } = useUserStore();

  useEffect(() => {
    if (!openSidebar) {
      setOpenMenu({})
    }
  }, [openSidebar])


  //  跳转
  const navigate = useNavigate();
  const onRouter = (alias) => {
    navigate(alias)
  }

  const location = useLocation();

  const isAdmin = (roles) => userInfo.role_name === 'admin' && !roles.includes('admin');

  // 递归渲染函数
  const renderMenuItems = (items, openMenu, onToggle, onRouter, level = 0) => {
    return items.map((item, index) => {
      const hasChild = item.children?.length > 0;
      return (
        <Fragment key={index}>
          {
            isAdmin(item.handle.role)
              ? null
                : <ListItemButton
                    selected={item.path === location.pathname}
                    onClick={() => hasChild ? onToggle(item.handle.alias) : onRouter(item.path)}
                    sx={{
                      pl: 2 + level * 2,
                      '&.Mui-selected': {
                        backgroundColor: 'var(--custom-sidebar-background)',
                        '&:hover': {
                          backgroundColor: 'var(--custom-sidebar-background)',
                        },
                      },
                    }}
                >
                  <ListItemIcon sx={{ color: 'var(--custom-menu-icon-color)', minWidth: '40px' }}>
                    {item.handle.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.handle.title} />
                  {hasChild ? openMenu[item?.handle.alias] ? <ExpandLess /> : <ExpandMore /> : null}
                </ListItemButton>
          }
          {hasChild && (
            <Collapse in={openMenu[item?.handle.alias]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(item.children, openMenu, onToggle, level + 1)}
              </List>
            </Collapse>
          )}
        </Fragment>
      );
    });
  };

  return renderMenuItems(list, openMenu, onToggle, onRouter);
}
export default SidebarItem;