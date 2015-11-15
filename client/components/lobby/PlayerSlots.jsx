PlayerSlots = React.createClass({

	mixins: [ReactMeteorData],

	getInitialState() {


		return {
			playerSlots: this.props.lobby.slots
		};
	},

	getMeteorData() {
		return {};
	},

	getSlots() {
		return _.map(this.state.playerSlots, function(slot,index){
			return <li key={index} className="list-group-item">{slot.id ? slot.name : "open"}</li>
		});

	},

	render(){

		return (

			<ul className="list-group">
				{ this.getSlots() }
			</ul>

		);
	}

});