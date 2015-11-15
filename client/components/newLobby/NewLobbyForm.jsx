NewLobbyForm = React.createClass({

	mixins: [ReactMeteorData, React.addons.LinkedStateMixin],

	getInitialState() {
		return {
			selectedGame: undefined
		};
	},

	getMeteorData() {
		return {
			games: Games.find().fetch()
		};
	},

	getGames(){
		let allGames = this.data.games.map(function(game){
			return ( <option key={game._id} value={game._id}>{game.name}</option> );
		});

		return (
			<select className="form-control" id="selectGame" onChange={this.handleGameSelection}>
				<option value="">Select ...</option>
				{allGames}
			</select>
		);

	},

	getOpenSlots(){
		if( !this.state.selectedGame ) return ("");
		let allOptions = [];
		let game = this.state.selectedGame;

		for (let i = game.minPlayers; i <= game.maxPlayers; i++) {
			allOptions.push(<option key={i} value={i}>{i}</option>);
		}

		return (
			<div className="form-group">
				<label for="openSlots">How many players?: </label>
				<select className="form-control" id="openSlots"
								valueLink={this.linkState('playerCapacity')}>
					{allOptions}
				</select>
			</div>
		);
	},

	// Triggers when user selects a game
	handleGameSelection(event) {
		this.setState({
			selectedGame: event.target.value.length > 0 ?
				Games.findOne(event.target.value) : undefined,
			playerCapacity: event.target.value.length > 0 ?
				Games.findOne(event.target.value).minPlayers : undefined
		});
	},

	submitForm() {
		if(this.state.newLobbyName && this.state.selectedGame && this.state.playerCapacity){
			console.log("submit game ",this.state.newLobbyName,":",this.state.selectedGame.name,", ",this.state.playerCapacity," players");
			Meteor.call("newLobby",
				this.state.newLobbyName, this.state.selectedGame._id, parseInt(this.state.playerCapacity),
				function (error, result) {
					if (error) {
						console.log("error", error);
					}
					if (result) {
						console.log("lobbies creation successful");
					}
				}
			);

		}
	},

	render() {

		return (

			<form role="form" onSubmit={this.submitForm}>

				<div className="form-group">
					<label for="lobbyName">Lobby name:</label>
					<input type="text" className="form-control" id="lobbyName"
								 valueLink={this.linkState('newLobbyName')}/>
				</div>

				<div className="form-group">
					<label for="selectGame">Select game: </label>
					{this.getGames()}
				</div>

				{this.state.selectedGame ?
					this.getOpenSlots()
					:
					""
				}
				<button type="submit" className="btn btn-default">Submit</button>
			</form>

		);
	}

});