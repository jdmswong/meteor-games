Content = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},

	render(){
		if(this.data.currentUser){
			return (
				<div className="jumbotron">
					<h3>Welcome {Meteor.user().username}</h3>
				</div>
			);
		}else{
			return (
				<div className="jumbotron">
					<h3>Play some games!</h3>
					<p>Please log-in</p>
				</div>
			);

		}

	}

});

