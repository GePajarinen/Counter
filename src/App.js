import React, {Component} from 'react';
/* import React from 'react'; = eu troquei pelo de cima porque estava dando problemas que nao localizava o 'Component' UM SACO ISSO.
Se eu deixar os dois, reclama da duplicidade.  
ah! e com isso parece que resolveu tb um erro que estava dando de "Parsing error: Unexpected token, expected ";" 
*/
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
  state = {
    counters:[
      { id:1, value: 0},
      { id:2, value: 0},
      { id:3, value: 0},
      { id:4, value: 0},
    ]
  };

  

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters =  this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c=> c.id !== counterId);
    this.setState({counters});
  };

  render(){
    return (
      <React.Fragment>
        <NavBar 
          totalCounters= {this.state.counters.filter(c => c.value > 0).length}
        /> 
        <main className="container">
          <Counters
            counters= {this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} 
          />
        </main>
      </React.Fragment>  
    )
  }

}

export default App;

/*  linha 7: function App() { */ 
