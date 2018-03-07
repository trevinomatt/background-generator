var database = [
	{
		username: "Matthew",
		password: "password"
	},
	{
		username: "Engeline",
		password: "password"
	},
	{
		username: "Ava",
		password: "password"
	}
];

var newsFeed = [
	{
		username: "Engeline",
		timeline: "This is some fun stuff!"
	},
	{
		username: "Ava",
		timeline: "I'm so bored!"
	},
	{
		username: "Korben",
		timeline: "I'm going to beat up Leopold"
	}
];


function isUserValid (username, password) {

	for (var i=0; i < database.length; i ++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username,password) {

	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert ('Sorry, wrong username and password.');
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");


signIn(userNamePrompt, passwordPrompt);
