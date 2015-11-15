GamesList = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            games: Games.find({name: {$exists: true}}).fetch()
        };
    },

    render(){

        const renderedGames = this.data.games.map( (game) => {
            return <a href="#" className="list-group-item">{game.name} - Max Players: {game.maxPlayers}</a>
        });

        return (

            <div className="list-group">
                { renderedGames }
            </div>

        );
    }

});