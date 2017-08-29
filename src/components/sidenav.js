import React from 'react';

export default class Sidenav extends React.Component {

  render() {
    return (
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Servers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    );
  }
}
