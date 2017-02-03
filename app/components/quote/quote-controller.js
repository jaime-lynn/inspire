(function(){
	
	//Get your QuoteService
	var quoteService = new QuoteService();

	var quoteVue = new Vue({
		el: '#quote',
		data:{
			quote: {},
			quoteText: '',
			quoteAuthor: '',
			active: false
		},
		mounted: function(){
			quoteService.getQuote(this.setQuote);
		},
		methods: {
			setQuote: function(quote){
				this.quote = JSON.parse(quote);
				this.buildQuote();
			},
			buildQuote: function(){
				this.quoteText = this.quote.quote;
				console.log(this.quoteText);
				this.quoteAuthor = this.quote.author;
				console.log(this.quoteAuthor);
			},
			nextQuote: function(){
				quoteService.getQuote(this.setQuote);
			}
		}
	})	

}())
