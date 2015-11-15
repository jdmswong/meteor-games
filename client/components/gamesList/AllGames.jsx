AllGames = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },

    render(){
        return (

            <div className="jumbotron">
                <h3>All Games</h3>

                <GamesList />

            </div>



        );

    }
});