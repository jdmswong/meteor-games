App = React.createClass({

	render(){
		return (


			<div className="container">

				<IncludeTemplate template={Template._loginButtons} />

				<Navbar />
				<Content />

			</div>



		);
	}

});