(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	var weatherVue = new Vue({
		el: '#weather',
		data:{
			weatherData: {},
			description: '',
			main: '',
			tempF: '',
			tempC: '',
			name: '',
			fahrenheit: true
		},
		mounted: function(){
			weatherService.getWeather(this.setWeather)
		},
		methods: {
			setWeather: function(weather){
				this.weatherData = JSON.parse(weather);
				this.buildWeather();
			},
			buildWeather: function(){
				this.description = this.weatherData.weather[0].description;
				this.main = this.weatherData.weather[0].main;
				this.tempF = (this.weatherData.main.temp * (9/5) - 459.67).toFixed(1) + '°F';
				this.tempC = (this.weatherData.main.temp - 273.15).toFixed(1) + '°C';
				this.name = this.weatherData.name;
			},
			toggleFahrenheit: function(){
				this.fahrenheit = !this.fahrenheit;
			}
		}
	})		
	
}())

