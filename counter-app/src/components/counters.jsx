import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id:1, value: 0 },
      { id:2, value: 4 },
      { id:3, value: 0 },
      { id:4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        { this.state.counters.map(counter => 
        <Counter key={counter.id} value={counter.value}/> )}
      </div>
    );
  }
}

export default Counters;
