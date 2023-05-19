import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home',
    },
    redirect: {
      name: 'findMusic',
    },
    children: [
      {
        path: 'findMusic',
        name: 'findMusic',
        component: () => import('@/views/FindMusic/index.vue'),
        meta: {
          title: 'findMusic',
        },
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/VideoAndMV/index.vue'),
        meta: {
          title: 'Video',
        },
      },
      {
        path: 'rank',
        name: 'rank',
        component: () => import('@/views/Rank/index.vue'),
        meta: {
          title: 'Rank',
        },
      },
    ],
  },
  /**
   * 子路由示例
   */
  // {
  //   path: '/foo',
  //   name: 'foo',
  //   component: () => import('@/components/TransferStation.vue'),
  //   meta: {
  //     title: 'Foo',
  //   },
  //   redirect: {
  //     name: 'bar',
  //   },
  //   children: [
  //     {
  //       path: 'bar',
  //       name: 'bar',
  //       component: () => import('@/views/foo/bar.vue'),
  //       meta: {
  //         title: 'Bar',
  //       },
  //     },
  //   ],
  // },
]

export default routes
