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
			<Route
				path="lobby/:lobbyId"
				component={Lobby}
				onEnter={function(nextState, replaceState, callback){
					Meteor.call("joinLobby", nextState.params.lobbyId, function(error, result){
						if(error){
							console.log("error", error);
						}
						if(typeof(result) != "undefined"){
							if(result == false){
								// the user has entered a full room, may want to redirect here
								console.log(replaceState);
								replaceState({error: "room-full"}, "/lobbies");
							}
						}
						callback();
					});
				}}
			></Route>
			<Route path="games" component={AllGames}></Route>
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
