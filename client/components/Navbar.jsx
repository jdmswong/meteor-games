const Link = ReactRouter.Link;

Navbar = React.createClass({

	render(){
		return (

			<nav className="navbar navbar-default">
				<div className="navbar-header">

				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						<li><Link to={'/welcome'} >Welcome</Link></li>
						<li><Link to={'/lobby'} >Lobby</Link></li>
						<li><Link to={'/newLobby'} >Play now!</Link></li>

					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a><IncludeTemplate template={Template._loginButtons} /></a></li>
					</ul>
				</div>
			</nav>

		);
	}

});