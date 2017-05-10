var React = require('react');

var Todo = React.createClass({

  render: function () {
    var {id, text, completed, onToggle} = this.props;
    return (
      <div onClick={function() {
          onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
});

module.exports = Todo;
