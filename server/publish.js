Meteor.publish("players", function(){
	return Meteor.users.find({},{fields: {username:1}});
});

Meteor.publish("games", function(){
	return Games.find({},{fields: {filename: 0}});
});

Meteor.publish("lobbies", function(){
	return Lobbies.find({});
});

