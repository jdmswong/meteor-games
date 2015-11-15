NewLobbyForm = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			games: Games.find().fetch()
		};
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
					<select className="form-control" id="selectGame">
						<option>Select ...</option>
					</select>
				</div>

				<div className="form-group">
					<label for="openSlots">How many players?: </label>
					<select className="form-control" id="openSlots">
						<option>1</option>
					</select>
				</div>

				<button type="submit" className="btn btn-default">Submit</button>
			</form>

		);
	}

});