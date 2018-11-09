import Vue from 'vue';
import Home from './Home.vue';
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
	el: '#app',
	render: h => h(Home)
});
