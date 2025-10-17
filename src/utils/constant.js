globalThis.CONSTANTS = {
  THEME: [
    {label: '浅色', mode: 'light', color: '#fff'},
    {label: '蓝色', mode: 'blue', color: '#376fd0'},
    // {label: '暗色', mode: 'dark', color: '#233044'},
  ],
  CURRENT_SYSTEM: ['hashrate', 'car', 'project', 'people', 'origin'],
  MAP_AK: '777W5OPtOvfQCtNaRwvcJZ2tXoFJ1h4Y',
  MAP_STYLE_ID: 'b28706738ee88f2cf1bd8d31c4d1be74',
  BASE_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://8.136.51.86:9091',
  STATIC_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://8.136.51.86:9091',
  LOGO_TITLE: '越泰科技',
  SYSTEM_NAME: '越泰高精度定位及算力管理系统',
  SYSTEM_LOGO: require('../assets/images/logo-1.svg'),

  // LOGO_TITLE: '',
  // SYSTEM_NAME: '',
  // SYSTEM_LOGO: '',
  //  https://1072558463339856.appflow.aliyunnest.com/webhook/home/b271bff129da247a59cfcb099ddc6ee574a135b05884a311439ec738477491ef919008c041108265f3/index
  SERVICE_URL: 'http://yzluck.cn/webhook/home/b271bff129da247a59cfcb099ddc6ee574a135b05884a311439ec738477491ef919008c041108265f3/index',
};
