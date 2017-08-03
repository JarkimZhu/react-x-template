/**
 * Created by zhujiaqi on 2017/4/1.
 */
import React from 'react';
import { connect } from 'dva';
import { List, InputItem, Button, View, Flex, Text, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class LoginPage extends React.Component {

  login = () => {
    this.props.dispatch({
      type: 'user/login',
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Flex style={{ backgroundColor: 'red', height: 75 }} justify="center">
          <Text style={{ color: 'white' }}>登录/注册</Text>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex justify="center">
          <Text>Sinosafe 华安保险</Text>
        </Flex>
        <WhiteSpace size="lg" />
        <List>
          <List.Item>
            <InputItem placeholder="请输入手机号" clear {...getFieldProps('mobile')} />
          </List.Item>
          <List.Item extra={<Button type="primary" size="small" inline>获取验证码</Button>}>
            <InputItem placeholder="请输入验证码" clear {...getFieldProps('vCode')} />
          </List.Item>
          <List.Item>
            <Button size="large" onClick={this.login}>立即登录</Button>
          </List.Item>
        </List>
      </View>
    );
  }

}

export default connect()(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'user/save',
      payload: fields,
    });
  } })(LoginPage));

