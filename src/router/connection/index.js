// const R_FERTILIZER = r => require.ensure([], () => r(require('./pages/index')), '/fertilizer/')
// const R_FERTILIZER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/fertilizer')
// const R_FERTILIZER_INFO = r => require.ensure([], () => r(require('./pages/info')), '/fertilizer/info')
// const R_FERTILIZER_WAIT = r => require.ensure([], () => r(require('./pages/wait')), '/fertilizer/wait')


// export default {
//   path: '/fertilizer', 
//   component:R_FERTILIZER_LAYOUT,
//   redirect:'/fertilizer/',
//   children: [
//     {
//       path: '/',
//       component: R_FERTILIZER
//     },
//     {
//       path: 'info/',
//       component: R_FERTILIZER_INFO
//     },
//     {
//       path: 'wait/:type/',
//       component: R_FERTILIZER_WAIT
//     }
//   ]
// }
