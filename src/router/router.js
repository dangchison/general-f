import GeneralContainer from '@/components/layout/container'
import HomePage from '@/components/home'

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
