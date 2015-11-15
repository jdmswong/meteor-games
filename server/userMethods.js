Meteor.methods({

	// Throws error if user is not logged in
	requireUser(){
		if(!Meteor.user())
			throw new Meteor.Error("must be logged in");
	},

	newLobby(newLobbyName, gameId, playerCapacity) {

		Meteor.call('requireUser');

		check(newLobbyName, String);
		check(gameId, String);
		check(playerCapacity, Match.Integer);

		if( playerCapacity < 1 )
			throw new Meteor.Error("lobbies must support at least 1 player");

		if( Lobbies.insert({
			name: newLobbyName,
			playerCapacity: playerCapacity,
			players: {
				1: {
					id: Meteor.userId(),
					readyStatus: false
				}
			},
			playerCount: 1
		}) )
			return true;
	}
});