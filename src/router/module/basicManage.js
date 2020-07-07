export default [
  {
    path: '/basicMangae',
    name: 'BasicMangae',
    meta: { icon: 'dashboard', title: '基础信息管理' },
    redirect: '/basicMangae/peopleManagement',
    children: [
      {
        path: '/basicMangae/peopleManagement',
        name: 'PeopleManagement',
        meta: { title: '人员管理信息' },
        component: () =>
          import(
            /* webpackChunkName: 'basicMangae' */ '@/views/BasicManagement/PeopleManagement.vue'
          )
      },
      {
        path: '/basicMangae/authorityManagement',
        name: 'AuthorityManagement',
        meta: { title: '权限管理' },
        component: () =>
          import(
            /* webpackChunkName: 'basicMangae' */ '@/views/BasicManagement/AuthorityManagement.vue'
          )
      }
    ]
  }
];
