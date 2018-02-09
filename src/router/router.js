import GeneralContainer from '@/views/layout/container'
import HomePage from '@/views/home'

const appRouter = [
  {
    path: '/',
    name: 'general-container',
    component: GeneralContainer,
    redirect: {
      name: 'home-page'
    },
    children: [
      {
        path: '',
        name: 'home-page',
        component: HomePage
      }
    ]
  },
  {
    path: '*', redirect: '/'
  }
]

export default appRouter
