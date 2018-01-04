import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

import { observer } from 'mobx-react';
import store from '../Store'

export default observer(class MyForm extends React.Component {


  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  componentDidMount(){
    store.header = 'Home'
  }

  alertMe() {
    if (this.state.username.length == 0 || this.state.password.length == 0 ){
      alert('username or password is empty')
    } else if (this.state.password.length <= 8 && this.state.username.length <= 5) {
    alert('username and password incorrect')


  } else if (this.state.username.length <= 5) {
      alert('not valid username')
    } else if (this.state.password.length <= 8) {
      alert('password incorrect')
    } else {
      alert('ok')
    }
  }
  render() {
    return (

          <Form>
            <Item>
              <Input placeholder="Username"  onChangeText={(x) => this.setState({username: x})} />
            </Item>
            <Item last>
              <Input placeholder="Password" onChangeText={(x) => this.setState({password: x})} />
            </Item>
            <Button onPress={this.alertMe.bind(this)}>
            <Text> Login </Text>
            </Button>
          </Form>

    );
  }
}
)
