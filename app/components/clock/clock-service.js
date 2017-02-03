function ClockService(){
	//This service is all setup for you no edits necessary here
	this.getName =  function(){
		var n = localStorage.getItem('person');
		if(n){
			console.log('Name is:', JSON.parse(n))
			return JSON.parse(n)
		}
		console.log('Name is :', { exists: false })
		return { exists: false };
	}
	
	this.saveName =  function(name){
				//^^^ Less typical but todos should always be the entire array
		localStorage.setItem('person', JSON.stringify(name));
		console.log('Name saved: ', name);
	}
}