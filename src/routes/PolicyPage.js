import React from 'react';
import { connect } from 'dva';
import { WingBlank, Button, List, InputItem, Text, View } from 'antd-mobile';
import { createForm } from 'rc-form';

class PolicyPage extends React.Component {
  submit = () => {
    this.props.dispatch({
      type: 'policy/getPolicyInfo',
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <WingBlank>
          <List>
            <InputItem placeholder="车架号" clear {...getFieldProps('frameNo')} />
            <List.Item>
              <Button size="large" onClick={this.submit}>查询保单</Button>
            </List.Item>
          </List>
          <Text>
            {this.props.policy.policyInfo}
          </Text>
        </WingBlank>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { policy } = state;
  return {
    policy
  };
}

export default connect(mapStateToProps)(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'policy/save',
      payload: fields,
    });
  } })(PolicyPage));
