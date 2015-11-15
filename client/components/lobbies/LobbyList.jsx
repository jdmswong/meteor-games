LobbyList = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            currentUser: Meteor.user(),
            onlineLobbies: Lobbies.find({name: {$exists: true}}).fetch()
        };
    },

    render(){

        const renderedOnlineLobbies = this.data.onlineLobbies.map( function(lobby){
            return <a href={"lobby/"+lobby._id} key={lobby._id} className="list-group-item">{lobby.name}</a>
        });

        return (

            <div className="list-group">
                { renderedOnlineLobbies }
            </div>

        );
    }

});

