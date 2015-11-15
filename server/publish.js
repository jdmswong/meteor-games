Meteor.publish("players", function(){
	return Meteor.users.find({},{username:1});
});

Meteor.publish("games", function(){
	return Games.find({},{fields: {filename: 0}});
});

