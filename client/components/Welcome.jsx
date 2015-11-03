Welcome = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},

	render(){

		return (
			<div className="jumbotron">
				<h3>Welcome to games!</h3>
			</div>
		);

	}

});

