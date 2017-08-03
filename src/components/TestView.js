import React, { Component } from 'react';
import { Text } from 'antd-mobile';

export default class TestView extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <Text>123</Text>
    );
  }
}
