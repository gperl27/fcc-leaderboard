var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../Components/Main');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main} />
	</Router>
);

module.exports = routes;