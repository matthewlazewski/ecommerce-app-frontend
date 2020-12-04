import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddItem from './components/add-item.component';
import Item from './components/item.component';
import ItemsList from './components/item-list.component';

class App extends Component {
  render() {  
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/items" className="navbar-brand">
            Items
          </a>
          <div className="navbar-nav mr-auto">
            <ul>
              <li className="nav-item">
                <Link to={"/items"} className="nav-link">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  New Item
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/items"]} component={ItemsList} />
            <Route exact path="/add" component={AddItem} />
            <Route path="/items/:id" component={Item} />
          </Switch>
        </div>
      </div>
    );
  }
};

export default App;
