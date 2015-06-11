var CollectionList = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    path: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <ul>
          <li><a href='/{this.props.name}'>{this.props.name}</a></li>
        </ul>
      </div>
    );
  }
});
