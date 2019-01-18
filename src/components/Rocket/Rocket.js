import React, { Component } from 'react';

class Rocket extends Component {
  render() {
    const{name, description, img} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <p>{description}</p>
      </div>
    );
  }
}

export default Rocket;