(function(){
	
	//Your ImageService is a global constructor function what can you do here if you new it up?'
	var imageService = new ImageService();

	var imageVue = new Vue({
		el: '#background',
		data:{
			imageUrl: '',
			image: {}
		},
		mounted: function(){
			imageService.getImage(this.setImage)
		},
		methods: {
			setImage: function(image){
				this.image = JSON.parse(image);
				if(this.image.large_url){
					this.imageUrl = this.image.large_url;
				} else {
					this.imageUrl = this.image.url;
				}
			},
			nextImage: function(){
				imageService.getImage(this.setImage);
			}
		}
	})	
	
}())
