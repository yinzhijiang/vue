import home from '../page/home/home.vue'
import Item from '../page/item/item.vue'
import Score from '../page/score/score.vue'
import total from '../page/total/total.vue'
import one from '../page/total/Questionnaire/one'
import two from '../page/total/Questionnaire/two'
import three from '../page/total/Questionnaire/three'
export default [
    { path: '/home', component: home },
    { path: '/item', component: Item },
    { path: '/score', component: Score },
    { path: '/total', component: total },
    { path: '/one', component: one },
    { path: '/two', component: two },
    { path: '/three', component: three }
]
