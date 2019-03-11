import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchSmurfs } from '../actions';
import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <header>
          { this.props.error ? <p className="error"><strong>Error:</strong> {this.props.error.toString()}</p> : null }
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </header>
        <SmurfForm />
        {this.props.fetchingSmurfs || this.props.addingSmurf
          ? <h2>Fetching Smurfs!</h2> 
          : this.props.smurfsList
            ? <SmurfsList smurfsList={this.props.smurfsList} />
            : <h2>No Smurfs!</h2>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state.error', state.error);
  return {
    addingSmurf: state.addingSmurf,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsList: state.smurfsList
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);