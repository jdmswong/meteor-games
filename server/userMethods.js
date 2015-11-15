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

		function constructSlots(size){
			const emptySlot = { id: undefined };
			let result = [{
				id: Meteor.userId(),
				name: Meteor.user().username,
				readyStatus: false
			}];
			for( let i=1; i<size; i++){
				result.push(Object.assign({}, emptySlot));
			}
			return result;
		};

		if( Lobbies.insert({
			name: newLobbyName,
			playerCapacity: playerCapacity,
			slots: constructSlots(playerCapacity),
			playerCount: 1
		}) )
			return true;
	}
});