
export default {
  name: 'temperature',
  components: {},
  props: [ 'weather' ],
  data() {
	return{
		isShown: false,
			query: '',
			icons: {
				'Rain': require('../../assets/regnerisch.png'),
				'Clear': require('../../assets/sonne.png'),
				'Clouds': require('../../assets/wolkig.png'),
				'Snow': require('../../assets/schnee.png'),
				'Drizzle':require('../../assets/regnerisch.png'),
				'Thunderstorm':require('../../assets/regnerisch.png')
			}
	}
},
}


