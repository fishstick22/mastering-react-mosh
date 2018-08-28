import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  }

  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  }

  // constructor() {
  //   super();
  //   console.log('Constructor', this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
    console.log('Increment Clicked', this.state.count);
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button 
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'>
            Increment
        </button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
