//nxn
var tile_states = [0, 0, 0, 0];

Tile = React.createClass({
  render(){
    return (<button class="tile">
	{(() => {
	  switch(this.props.play_state)
	  {
            case 0:
             return ' ';
            case 1:
             return 'x';
            default:
             return 'o';
	  }
         }
 	)()
	}
	</button>);
  }
});

Grid = React.createClass({
  render(){
    return (
      <div class="ToeGrid">
      
      </div>      
    );
  }
});

//3 different states (classes possible)
//0, 1, 2. player 1 and 2
Box = React.createClass({
 render(){"I am a box"} 
});
