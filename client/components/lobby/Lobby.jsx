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
				<h3>Welcome {Meteor.user().username}</h3>

				<h6>Player list:</h6>
				<PlayerList />
			</div>
		);

	}

});

