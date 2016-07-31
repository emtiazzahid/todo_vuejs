new Vue({
	el: '#app',
	data: {
		message: 'hello',
		Text: '',
		todos: [
		{title: 'todo1'},
		{title: 'todo2'},
		{title: 'todo3'},
		{title: 'todo4'},
		{title: 'todo5'}
		],
		checked: true,
		count: 1
	},
	methods: {
		createTodo: function(){
			var todotext = this.Text.trim();
			if (todotext) {
				this.todos.push({title: todotext});
				this.Text = '';
			}

			
		},
		clearText: function(){
			this.Text = '';
		},
		addingX: function(){
			this.Text = this.Text + ' XXX ';
		},
		increaseCount: function(){
			this.count = this.count + 1;
		},
		removeTodo: function(index){
			this.todos.splice(index,1);
		}
	}
})