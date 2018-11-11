import React from 'react';

export default class States extends React.Component {
  render() {
    const { states } = this.props;
    return (<ol>states.forEach(s => <li>{s}</li>)</ol>);
  }
}
