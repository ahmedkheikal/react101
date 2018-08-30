import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Whoops404 from './Whoops404';
// import { BrowserRouter, Route, Router,  Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import Contact from './Contact';
import AddContactForm from './AddContactForm';

const Loading = () =>
                    <div>Loading...</div> ;

// const Home = Loadable({
//     loader: () => import('./App'),
//     loading: Loading,
// });
// const Contact = Loadable({
//     loader: () => import('./Contact'),
//     loading: Loading,
// });


// <Link to="/contact">Contact</Link>
ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link replace={true} to="/contact">const</Link></li>
                <li><Link to="/add-contact">Add Contact</Link></li>
                <li><Link to="/fdsaadsffdas">not c</Link></li>
            </ul> 

            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/contact' component={Contact} />
                <Route path='/add-contact' component={AddContactForm} />
                <Route component={Whoops404} />
            </Switch>

        </div>
    </Router>

    ,
    document.getElementById('react-container')
);
