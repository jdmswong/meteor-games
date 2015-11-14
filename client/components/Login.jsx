Login = React.createClass({

	render(){
		return (

			<div className="jumbotron">

				<div className="alert alert-danger" role="alert">
					<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
					Form does not yet work
				</div>

				<h2>Please log-in:</h2>

				<form role="form">
					<div className="form-group">
						<label for="email">Email address:</label>
						<input type="email" className="form-control" id="email" />
					</div>

					<div className="form-group">
						<label for="pwd">Password:</label>
						<input type="password" className="form-control" id="pwd" />
					</div>

					<div className="checkbox">
						<label><input type="checkbox" /> Remember me</label>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>


			</div>

		);
	}

});