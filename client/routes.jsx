const {
	Router,
	Route
} = ReactRouter;

const routes = (
	<Route name="root" path="/" component={App}>

		<Route path="welcome" component={Welcome} />
		<Route component={AuthContainer} >
			<Route path="lobbies" component={LobbiesView}></Route>
			<Route path="newLobby" component={NewLobby}></Route>
			<Route path="game" component={BoxClick}></Route>
			<Route path="lobby/:lobbyId" component={Lobby}></Route>
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
