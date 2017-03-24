// react component: common naming convention starts with an uppercase letter
// most common method is "React.createClass" => takes an OPTIONS OBJECT as an argument; has a bunch of built-in methods that can be overridden;
// the only thing that is required of a rect component is a "render" method.
// EVERY react component needs a "render" method.

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);


// props ("properties") is the way to pass data in to the component
// "get default props" method is used to render a default property value if nothing is specified
    // does not take any arguments
    // returns object of properties
