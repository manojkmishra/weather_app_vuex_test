
import 'chartjs-plugin-datalabels';
import Temperature from '../temperature/Temperature.vue';
import { mapState} from 'vuex';
import '../../custom.scss';

export default {
	computed: 
	{  ...mapState({ weather: state => state.weather, 
					}),
	},
	components: {Temperature},
	mounted() {
		navigator.geolocation.getCurrentPosition((position) => 
		{
			this.$store.dispatch('currentCity', position)
		});
	},
};
