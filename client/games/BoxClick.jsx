BoxClick = React.createClass({

	getInitialState(){
		return {
			timesClicked: 0,
			victory: false
		};
	},

	handleClick(){
		this.setState({
			timesClicked: this.state.timesClicked+1,
			victory: this.state.timesClicked+1 >= 10
		});
	},

	render(){

		if( this.state.victory ){
			return (
				<div>
					<h1>YOU WIN!!!</h1>
				</div>
			);
		}else{
			return (

				<div>
					<h3>Click the button 10 times!</h3>
					<p>Button has been clicked {this.state.timesClicked} times</p>
					<button className="btn btn-default" type="button" onClick={this.handleClick}>Button</button>
				</div>

			);
		}
	}

});