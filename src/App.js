import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {  
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/items" className="navbar-brand">
            Items
          </a>
          <div className="navbar-nav mr-auto">
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
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/items"]} component={ItemsList} />
            <Route exact paht="/add" component={AddItem} />
            <Route path="/items/:id" component={Item} />
          </Switch>
        </div>
      </div>
    )
  }
};

export default App;
