PlayerList = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			onlinePlayers: Meteor.users.find({username: {$exists: true}})
		};
	},


	render(){

		const renderedOnlinePlayers = this.data.onlinePlayers.fetch().map( (player) => {
			return <li className="list-group-item">{player._id}:{player.username}</li>
		});

		return (

			<ul className="list-group">
				{ renderedOnlinePlayers }
			</ul>

		);
	}

});

PlayerListEntry = React.createClass({


});