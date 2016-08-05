var React = require('react');
var $ = require('jquery');
/*var USERS = [
	{username: "Greg", pastThirty: 400, allTime: 1000},
	{username: "Jim", pastThirty: 350, allTime: 500}
];*/


var Leaderboard = React.createClass({
	getInitialState: function() {
		return {
			results: [],
			recent: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
			alltime: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
		}
	},
	componentDidMount: function() {
		$.get(this.state.recent, function(data){
			var result = JSON.stringify(data);
			var array = JSON.parse(result);
			this.setState({ 
				results: array
		  });
		}.bind(this));
	},
	_sortRecent: function() {
		$.get(this.state.recent, function(data){
			var result = JSON.stringify(data);
			var array = JSON.parse(result);
			this.setState({ 
				results: array
		  });
		}.bind(this));
	},
	_sortAllTime: function() {
		console.log('test')
		$.get(this.state.alltime, function(data){
			var result = JSON.stringify(data);
			var array = JSON.parse(result);
			this.setState({ 
				results: array
		  });
		}.bind(this));
	},
	render: function () {
		return (
			<Table 
				users={this.state.results}
				sortByRecent={this._sortRecent}
				sortAllTime={this._sortAllTime}
			/>
		)
	}
});


var Table = React.createClass({
	render: function () {
		var rows = [];
		this.props.users.forEach(function(user){
			rows.push(<Row user={user} key={user.username} />);
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th className="clickable" onClick={this.props.sortByRecent}>Past 30 Days</th>
						<th className="clickable" onClick={this.props.sortAllTime}>All Time</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

var Row = React.createClass({

	render: function() {
		var name = this.props.user.username;
		var thirty = this.props.user.recent;
		var allTime = this.props.user.alltime;
		var img = this.props.user.img;
		
		return (
			<tr>
				
				<td>
					<img src={img} />
					{name}
				</td>
				<td>{thirty}</td>
				<td>{allTime}</td>
			</tr>
		)
	}
});


module.exports = Leaderboard;