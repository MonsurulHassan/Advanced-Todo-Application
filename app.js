var vm = new Vue({
  el: '#app',
  
  data: {
	displayNewTask: true,
	displayTask: true,
	displayTaskStat: true,
	displayProgressBar: true,
	deletedTask: 0,
	tasks: [
		{name:'Will go for buying', done:false},
		{name:'Shopping', done:false},
		{name:'Car wash', done:false},
	]
  },
  
  methods: {
	addTask: function(){
		this.tasks.push({
			name: this.tasks.name,
			done: false
		});
	},
	deleteTask: function(task){
		this.tasks.splice(this.tasks.indexOf(task), 1);
		this.deletedTask++;
	}
  },
  
  computed: {
	checkMarkedTasks: function(){
		var count = 0;
		for(var i=0; i < this.tasks.length; i++){
			if(this.tasks[i].done == true){
				count++;
			}
		}
		return count;
	},
	tasksLeft: function(){
		var count = 0;
		for(var i=0; i < this.tasks.length; i++){
			if(this.tasks[i].done == false){
				count++;
			}
		}
		return count;
	},
	percentageOfTasksCompleted: function(){
		if(this.tasks.length == 0){
			return 0;
		}
		else{
			return (this.checkMarkedTasks / this.tasks.length) * 100;
		}
	}
  }
  
});