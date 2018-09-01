import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  }

  styles = {
    fontSize: 15,
    fontWeight: 'bold'
  }

  product = {
    someProperty: 'that is not defined yet'
  }

  // constructor() {
  //   super();
  //   console.log('Constructor', this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 })
    console.log('Increment Clicked', this.state.value);
  }

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1});
  // }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button 
          onClick={() => this.handleIncrement(this.product)}
          className='btn btn-secondary btn-sm'>
            Increment
        </button>
        <button onClick={this.props.onDelete} className="bnt btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.value === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
