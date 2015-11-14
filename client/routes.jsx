const {
	Router,
	Route
} = ReactRouter;

const routes = (
	<Route name="root" path="/" component={App}>

		<Route path="welcome" component={Welcome} />
		<Route component={AuthContainer} >
			<Route path="lobby" component={Lobby}></Route>
			<Route path="newLobby" component={NewLobby}></Route>
		</Route>
		<Route path="*" component={Welcome}/>
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
