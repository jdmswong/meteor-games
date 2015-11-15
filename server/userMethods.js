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
			let result = {
				1: {
					id: Meteor.userId(),
					name: Meteor.user().username,
					readyStatus: false
				}
			};
			for( let i=2; i<=size; i++){
				result[i] = Object.assign({}, emptySlot);
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
	},

	joinLobby(lobbyId){

		Meteor.call('requireUser');

		check(lobbyId, String);

		const lobby = Lobbies.findOne(lobbyId);

		const freeSlot = (function findSlot(){
			for( let i=1; i <= lobby.playerCapacity; i++ ){
				if( lobby.slots[i].id == null ){
					return i;
				}
			}
			return false;
		})();

		if( freeSlot === false )
			return false;

		function filledSlot(playerId, playerName){
			return {
				id: playerId,
				name: playerName,
				readyStatus: false
			};
		}

		//return
			Meteor.users.update(Meteor.userId(),{$set: {"profile.currentLobby": lobbyId}});
			//&&
			Lobbies.update(lobbyId,
				{$set: {
					["slots."+freeSlot]: filledSlot(Meteor.userId(), Meteor.user().username)
				}}
			);


	}
});