import API from '../../API.js';
import Chart from 'chart.js';
import axios from 'axios';
import Diagramm from '../diagramm/Diagramm.vue';
import moment from 'moment';
import 'chartjs-plugin-datalabels';
import Temperature from '../temperature/Temperature.vue';


export default {
    props:[
		'weather'
	],
	components: {
		Diagramm,
		Temperature
	},
	data() {
		return {
			isShown: false,
			api_key: 'c9f562aaffcdefaf40f2ed808d202c9b',
			url_base: 'https://api.openweathermap.org/data/2.5/',
			query: '',
			weather: {},
			icons: {
				'Rain': require('../../assets/regnerisch.png'),
				'Clear': require('../../assets/sonne.png'),
				'Clouds': require('../../assets/wolkig.png'),
				'Snow': require('../../assets/schnee.png'),
				'Drizzle':require('../../assets/regnerisch.png'),
				'Thunderstorm':require('../../assets/regnerisch.png')
			},
			/*weather in next days */
			weathers: [],
			PREFERRED_TIME: '12:00:00',
			DAYS: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
			/*Chart*/
			dates: [],
			temps: [],
			scaleFontColor:'white'


		}
	},
	methods: {
		
	},
	mounted() {
	//	this.fetchWeather(); /* today temperature */
	//	this.currentCity();
		//this.ForeCastOfCurrentCity();
		/*this.createIcon();*/
	}


};

