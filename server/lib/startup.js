Meteor.startup(function(){
	if(Games.find().count() === 0){
		Games.insert({
			name: "Click the box",
			filename: "BoxClick.jsx",
			minPlayers: 1,
			maxPlayers: 2
		});
	}
});