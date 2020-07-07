export default [
  {
    path: '/equipmentManage',
    name: 'EquipmentManage',
    meta: { icon: 'dashboard', title: '设备器材出入库管理' },
    redirect: '/equipmentManage/borrowManagement',
    children: [
      {
        path: '/equipmentManage/borrowManagement',
        name: 'BorrowManagement',
        meta: { title: '借出管理' },
        component: () =>
          import(
            /* webpackChunkName: 'equipmentManage' */ '@/views/BasicManagement/PeopleManagement.vue'
          )
      },
      {
        path: '/equipmentManage/inventoryManagement',
        name: 'InventoryManagement',
        meta: { title: '库存管理' },
        component: () =>
          import(
            /* webpackChunkName: 'equipmentManage' */ '@/views/BasicManagement/AuthorityManagement.vue'
          )
      },
      {
        path: '/equipmentManage/approveManagement',
        name: 'ApproveManagement',
        meta: { title: '审批管理' },
        component: () =>
          import(
            /* webpackChunkName: 'equipmentManage' */ '@/views/BasicManagement/AuthorityManagement.vue'
          )
      }
    ]
  }
];
