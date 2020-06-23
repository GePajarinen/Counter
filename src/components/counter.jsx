import React, {Component} from 'react';

class Counter extends Component{
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  
  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  };

  renderTags(){
    if (this.state.tags.length === 0) return <p>there are no tags!</p>;
    
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span> 
        
        <button onClick= {()=> this.handleIncrement(/*product*/)}className= "btn btn-secondary btn-sm"> Increment</button>
        <button className="btn btn-danger btn-sm m-2"> Delete</button>

        {this.renderTags()}

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