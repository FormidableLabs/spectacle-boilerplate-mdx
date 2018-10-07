import React from 'react';
import { Heading, Text } from 'spectacle';

export default class RegularComponent extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  render() {
    return (
      <div>
        <Heading>This is a normal react component</Heading>
        <br />
        <Text>but you're adding it to your presentation in MDX</Text>
        <br />
        <Text>{this.state.count}</Text>
        <br />
        <Text>Click the button to rate how cool that is from 1-10</Text>
        <br />
        <button type="button" onClick={this.incrementCount}>Rate It</button>
      </div>
    )
  }
}