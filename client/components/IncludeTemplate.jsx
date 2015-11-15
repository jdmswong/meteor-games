IncludeTemplate = React.createClass({
	componentDidMount() {
		var componentRoot = ReactDOM.findDOMNode(this);
		var parentNode = componentRoot.parentNode;
		parentNode.removeChild(componentRoot);
		// Render the Blaze template on this node
		this.view = Blaze.render(this.props.template, parentNode);
	},
	componentWillUnmount() {
		// Clean up Blaze view
		Blaze.remove(this.view);
	},
	render(template) {
		return (<div />)
	}
});