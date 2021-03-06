var React = require('react');
import classNames from 'classnames/bind';
import styles from './Switch.styl';
const cx = classNames.bind(styles);
var blacklist = require('blacklist');

module.exports = React.createClass({

  getDefaultProps () {
		return {
			disabled: false,
			checked: false,
		};
	},


  getInitialState: function() {
    return {
      isChecked: this.props.checked
    };
  },

  handleChange: function(event) {
    this.setState({
      isChecked: !this.state.isChecked // flip boolean value
    }, function() {
      console.log(this.state);
    }.bind(this));
  },

	render () {
		// classes
		var componentClass = cx(
			'switch',
			'switch-' + this.props.size,
			this.props.className
		);

		// props
		var props = blacklist(this.props,'size',  'className');
		props.className = componentClass;

		return (
      <div className={componentClass}>
        <input type="checkbox" {...props} checked={this.state.isChecked} onChange={this.handleChange}></input>
        <label></label>
      </div>
		)
	},
});
