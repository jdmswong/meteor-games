Lobby = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},

	render(){
		return (

			<div className="jumbotron">
				<h3>Welcome {this.data.currentUser.username}</h3>

				<h6>Player list:</h6>
				<PlayerList currentUser={this.data.currentUser} />

				<h6>Lobby list:</h6>
				<LobbyList />

			</div>



		);

	}
});


