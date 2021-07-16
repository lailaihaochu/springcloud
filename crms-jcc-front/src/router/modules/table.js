/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: 'Dynamic Table' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: 'Drag Table' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: 'Complex Table' }
    },
    {
      path: 'shiphub-location-table',
      component: () => import('@/views/table/shiphub-location-edit-table'),
      name: 'shiphubLocationTable',
      meta: { title: 'Shiphub Location Table' }
    },
    {
      path: 'shiphub-order-table',
      component: () => import('@/views/table/shiphub-order-edit-table'),
      name: 'shiphubOrderTable',
      meta: { title: 'Shiphub order Table' }
    }
  ]
}
export default tableRouter
