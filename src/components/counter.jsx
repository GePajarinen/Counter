import React, {Component} from 'react';

class Counter extends Component{
  state = {
    value: this.props.value
  };
  
  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  };

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span> 
        <button 
        onClick= {this.handleIncrement} 
        className= "btn btn-secondary btn-sm"> Increment</button>
        <button className="btn btn-danger btn-sm m-2"> Delete</button>
      </div>
    ); 
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    /* 
    return this.state.count === 0 ? 'Zero' : this.state.count; 
    Para nao ter de repetir o 'this.state.count' cria-se uma constante que recebe o valor e serve para substituir:*/
    const{value} = this.state;
    return value === 0 ? 'Zero' : value;

  }

}

export default Counter;