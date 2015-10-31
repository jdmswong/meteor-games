Navbar = React.createClass({

	render(){
		return (

			<nav className="navbar navbar-default">
				<div className="navbar-header">

				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						<li><a href="#">First</a></li>
						<li><a href="#">Second</a></li>

					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a><IncludeTemplate template={Template._loginButtons} /></a></li>
					</ul>
				</div>
			</nav>

		);
	}

});