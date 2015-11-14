AuthContainer = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},



	render(){

		if( this.data.currentUser ) {
			return this.props.children;
		}else{
			return (<Login />);
		}

	}

});