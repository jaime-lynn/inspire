(function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService();

	var todoVue = new Vue({
		el: '#todo',
		data() {
			return {
				todos: [],
				todo: ''
			}
		},
		mounted: function(){
			this.todos = todoService.getTodos();	
		},
		methods: {
			submitTodo(todo) {
				this.todos.push({ task: todo, isCompleted: false });
				this.todo = '';
				todoService.saveTodos(this.todos);
			},
			remove(todo) {
				var i = this.todos.indexOf(todo);
				this.todos.splice(i, 1);
				todoService.saveTodos(this.todos);
			},
			filterDone(todo) {
				todo.isCompleted = !todo.isCompleted
				todoService.saveTodos(this.todos);
			}
		}
	})



}())
