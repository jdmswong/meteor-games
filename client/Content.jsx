Content = React.createClass({

	renderContent(){
		if(Meteor.user()){
			return (
				<div className="jumbotron">
					<h3>Welcome {Meteor.user().emails[0].address}</h3>
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
	},

	render(){
		return this.renderContent();
	}

});