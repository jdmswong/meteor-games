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
			subsReady: subsReady
		}
	},


	render(){

		return (

			<div className="container">

				<Navbar />
				{ this.data.subsReady ? this.props.children : <h2>Loading...</h2>}

			</div>

		);
	}

});