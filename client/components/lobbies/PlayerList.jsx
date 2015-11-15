PlayerList = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			onlinePlayers: Meteor.users.find({username: {$exists: true}}).fetch()
		};
	},


	render(){

		const renderedOnlinePlayers = this.data.onlinePlayers.map( (player) => {
			return <a href="#" key={player._id} className="list-group-item">{player._id}:{player.username}</a>
		});

		return (

			<div className="list-group">
				{ renderedOnlinePlayers }
			</div>

		);
	}

});

