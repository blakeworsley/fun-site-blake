import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Days from './Days/index';
import '../styles/root.scss';

class Root extends Component {
  renderLink = (to, title) => {
    return (
      <li>
        <Link to={to}>{title}</Link>
      </li>
    );
  };
  render() {
    return (
      <Router>
        <section className="body-container">
          <header className="menu">
            <ul>
              {this.renderLink('/', 'Home')}
              {this.renderLink('/days', 'Days')}
              {this.renderLink('/days/1', '1')}
              {this.renderLink('/days/2', '2')}
            </ul>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/days" component={Days} />
          <Route path="/days/:id" component={Days} />
        </section>
      </Router>
    );
  }
}

export default Root;
