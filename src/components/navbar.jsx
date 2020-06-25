import React, { Component } from 'react';

class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        Itens{" "}
        <span className="badge badge-pill bagde-secondary">
        {this.props.totalCounters}
        </span>
      </a>
    </nav>);
  }
}
export default NavBar;