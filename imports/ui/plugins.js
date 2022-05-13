import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import Vuetify from 'vuetify'; 
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
Vue.use(VueMeteorTracker)
const opts = {icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },}
export default new Vuetify(opts)
