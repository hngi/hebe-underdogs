function addButtonColor( button, color) {
	var color = [];
	var button = document.getElementById("button");
	if(button).onClick() {
		if(button == 'goal') {
			document.createElement("form");
			console.log("Add Your Goals Here");
            color.push("azure");
			}
			if (button == 'report') {
				color.push("orange");
               console.log("Please Wait While We Fetch Your Goal Data"); 
			}
			else {
				console.log("Thank you for using Goal App Tracker");
			}
		}
	}
}


function checkGoalStatus(goal,color,status) {
    var status1 = document.getElementById("goals-completed");
    var status2 = document.getElementById("goals-pending");
    var status3 = document.getElementById("goals-failed");
    var color = [];
    if(status1) {
    	color.push("green");
    	console.log("You have completed Your Goals");
    }
    if (status2) {
    	color.push("orange");
    	console.log("Your goals are still pending");
    }
    if (status3) {
    	color.push("red");
    	console.log("Your goals were not completed");
    }
   
}

function addGoal(goal) {
	var self = this;
	var showPercentage = new showPercentage;
    this.timeAdded = new Date().getTime();
    this._running = showPercentage();
    this._paused = showPercentage();
    if(this._stopped) {
    	console.log("Your goals have been stopped"); 
    }  

}

function showGoalProgress(goal) {
	var self = this;
	var showPercentage = new showPercentage;
	if (name === 'percentage-container') {
		this.showPercentage;
	}
}
