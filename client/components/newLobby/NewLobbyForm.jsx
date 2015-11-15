NewLobbyForm = React.createClass({

	mixins: [ReactMeteorData],

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
			<select className="form-control" id="selectGame" onChange={this.handleNewSelection}>
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
				<select className="form-control" id="openSlots">
					{allOptions}
				</select>
			</div>
		);
	},

	// Triggers when user selects a game
	handleNewSelection(event) {

		this.setState({
			selectedGame: event.target.value.length > 0 ?
				Games.findOne(event.target.value) : undefined
		});
	},

	render() {

		return (

			<form role="form">

				<div className="form-group">
					<label for="lobbyName">Lobby name:</label>
					<input type="text" className="form-control" id="lobbyName" />
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