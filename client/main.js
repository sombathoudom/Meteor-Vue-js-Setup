import Vue from 'vue'
import Vuetify from 'vuetify'; 
import 'vuetify/dist/vuetify.min.css';
import '../imports/ui/plugins'
import router from '../router/routes'
import AppComponent from '/imports/ui/App.vue';

const vuetify = new Vuetify({});
Meteor.startup(() => {
  new Vue({
    router,
    vuetify,
    render: (h) => h(AppComponent),
  }).$mount('#app');
})
