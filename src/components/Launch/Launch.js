import React, { Component } from 'react';

class Launch extends Component {
  render() {
    const {name, details,img, id} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
        <img src={img} alt={name}/>
        <button onClick={()=>this.props.addToWatchList({id,name, details,img})}>Add to WatchList</button>
      </div>
    );
  }
}

export default Launch;