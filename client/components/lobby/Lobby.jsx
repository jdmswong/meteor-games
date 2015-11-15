Lobby = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		let lobby = Lobbies.findOne(this.props.params.lobbyId);

		return {
			lobby: lobby

		};
	},

	render(){

		if(this.data.lobby) {
			return (
				<div className="jumbotron">
					<h2>{this.data.lobby.name}</h2>
					<PlayerSlots lobby={this.data.lobby}/>
				</div>
			);
		}else{
			return (
				<div className="jumbotron">
					<h2>Lobby cannot be found</h2>
				</div>
			);
		}
	}

});