App = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		const subHandles = [
			Meteor.subscribe("games"),
			Meteor.subscribe("players"),
			Meteor.subscribe("lobbies")
		];

		const subsReady = _.every(subHandles, function (handle) {
			return handle.ready();
		});

		return {
			subsReady: subsReady,
			currentLobby: Meteor.user() ?
				Meteor.user().profile.currentLobby : undefined
		}
	},


	render(){

		return (

			<div className="container">

				<Navbar currentLobby={this.data.currentLobby}/>
				{ this.data.subsReady ? this.props.children : <h2>Loading...</h2>}

			</div>

		);
	}

});