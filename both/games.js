Games = new Mongo.Collection("games");

Meteor.publish("games", function(){
	return Games.find({},{fields: {filename: 0}});
});