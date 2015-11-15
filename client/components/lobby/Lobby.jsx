Lobby = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
			lobby: Lobbies.findOne(this.props.params.lobbyId)
		};
	},

	render(){

		return (

			<div className="jumbotron">
				Lobby view for {this.data.lobby.name}
			</div>

			);
	}

});