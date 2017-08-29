import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Sidenav from './components/sidenav';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Sidenav/>
      </div>
    );
  }
}
