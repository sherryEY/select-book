import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import HelloWorld2 from '@/components/HelloWorld2'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: HelloWorld,
      children: [
        {
          path: '/',
          name: '/Hello',
          component: HelloWorld
        },
        {
          path: 'hello1',
          name: '/Hello/Hello1',
          component: HelloWorld1
        },
        {
          path: 'hello2',
          name: '/Hello/Hello2',
          component: HelloWorld2
        }
      ]
    },
    {
      path: '/book',
      name: '/Book',
      components: {
        default: Book,
        left: HelloWorld1,
        right: HelloWorld2
      }
    }
  ]
})
