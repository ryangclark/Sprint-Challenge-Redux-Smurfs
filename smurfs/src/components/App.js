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
    console.log('fetchingSmurfs', this.props.fetchingSmurfs);
    return (
      <div className="App">
        <header>
          { this.props.error ? <p className="error">{this.props.error}</p> : null }
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
  return {
    addingSmurf: state.addingSmurf,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsList: state.smurfsList
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
