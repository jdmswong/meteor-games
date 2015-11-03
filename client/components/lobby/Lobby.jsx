Lobby = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},

	render(){
		if( this.data.currentUser ) {

			return (
				<div className="jumbotron">
					<h3>Welcome {Meteor.user().username}</h3>

					<h6>Player list:</h6>
					<PlayerList />
				</div>
			);

		}else{
			return (
				<div className="jumbotron">
					<h3>Please Log-In to view lobby</h3>

				</div>
			);
		}

	}

});


