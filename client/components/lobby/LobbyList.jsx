LobbyList = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            onlineLobbies: Lobbies.find({name: {$exists: true}}).fetch()
        };
    },

    render(){

        const renderedOnlineLobbies = this.data.onlineLobbies.map( (lobby) => {
            return <a href="#" className="list-group-item">{lobby.name}</a>
        });

        return (

            <div className="list-group">
                { renderedOnlineLobbies }
            </div>

        );
    }

});

