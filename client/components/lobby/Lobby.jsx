const {
	Router
} = ReactRouter;

Lobby = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		let lobby = Lobbies.findOne(this.props.params.lobbyId);

		return {
			lobby: lobby

		};
	},

	leaveClicked(e){

		window.location.replace("#/lobbies");
	},

	render(){

		if(this.data.lobby) {
			return (
				<div className="jumbotron">
					<h2>{this.data.lobby.name}</h2>
					Slots:
					<PlayerSlots lobby={this.data.lobby}/>
					<button type="button" className="btn btn-default">Start game</button>
					<button type="button" className="btn btn-default" onClick={this.leaveClicked}>Leave room</button>
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