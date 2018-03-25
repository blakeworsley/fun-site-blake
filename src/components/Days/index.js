import React, { Component } from 'react';
import One from './One';
import Two from './Two';

class Days extends Component {
  renderDay = () => {
    const { match } = this.props;
    switch (match.params.id) {
      case '1':
        return React.createElement(One);
      case '2':
        return React.createElement(Two);
      default:
        return <div>Day Does Not Exist</div>;
    }
  };
  render() {
    const { match } = this.props;
    return (
      <section className="days-container">
        <h1 className="days-heading">DAYS</h1>
        {match.params && match.params.id && this.renderDay()}
      </section>
    );
  }
}

export default Days;
