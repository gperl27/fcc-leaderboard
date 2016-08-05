var React = require('react');
var Leaderboard = require('../Components/Leaderboard');
require('../styles.scss');


var Main = React.createClass({
	render : function() {
		return (
			<div className="container">
				<h1>FCC Leaderboard</h1>
				<h2>By Greg Perlman</h2>
				<Leaderboard/>
			</div>
		);
	}
});

module.exports = Main;