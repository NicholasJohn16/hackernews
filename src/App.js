import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Posts from './components/Posts'
import PostItem from './components/PostItem'
import User from './components/User'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

function App() {
  return (

    <div className="light">
      <div className="container">

        <Router>
          <nav className="row space-between">
            <ul className="row nav">
              <li>
                <NavLink className="nav-link" activeStyle={activeStyle} exact to="/">Top</NavLink>
              </li>
              <li>
                 <NavLink className="nav-link" activeStyle={activeStyle} to="/new">New</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/new" render={() => <Posts type="new" />} />

            <Route path="/post" component={PostItem} />

            <Route path="/user" component={User} />
              
            <Route path="/" render={() => <Posts /> } />

          </Switch>

        </Router>

      </div>
    </div>
  );
}

export default App;
