const {
	Router,
	Route
} = ReactRouter;

const routes = (
	<Route name="root" handler={App} path="/">

	</Route>
);

const router = (
	<Router >
		{routes}
	</Router>
);

Meteor.startup(function () {
	ReactDOM.render(router, document.getElementById("app-container"));
});
