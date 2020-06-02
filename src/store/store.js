import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
	state: { weather:{},	},
	 actions:{
		async currentCity ({commit}, position)
		{ 	let url_base= 'https://api.openweathermap.org/data/2.5/';
			let api_key= 'c9f562aaffcdefaf40f2ed808d202c9b';
			console.log('store-pos',position,url_base,api_key)
			let res=await axios.get(`${url_base}weather?&lat=${position.coords.latitude}&lon=${
				position.coords.longitude}&units=metric&APPID=${api_key}`)
				commit('CUR_CITY',res.data)
			return res;
		},
	 },
	 mutations:{
		 CUR_CITY (state, weather)
		 {	 console.log('store-muta-state=',state)
			 state.weather = weather
			 
		 }
	 },
	 getters:{}
})