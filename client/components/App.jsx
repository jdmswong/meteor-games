App = React.createClass({

	render(){
		return (


			<div className="container">

				<Navbar />
				{this.props.children}

			</div>



		);
	}

});