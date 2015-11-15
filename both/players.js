Meteor.publish("players", function(){
	return Meteor.users.find({},{username:1});
});