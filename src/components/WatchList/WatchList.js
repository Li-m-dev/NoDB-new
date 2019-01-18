import React, { Component } from 'react';

class WatchList extends Component {

  render() {
    // console.log(this.props);
    const {name, details,img, id, notes} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
        <img src={img} alt={name}/>
        <input type="text" onChange={(e)=>this.props.handleInput(e)}/>
        <p>Notes: {notes}</p>
        <button onClick={()=>this.props.updateWatchList(id)}>Add Notes</button>
        <button onClick={()=>this.props.deleteFromWatchList(id)}>Delete from WatchList</button>
      </div>
    );
  }
}

export default WatchList;