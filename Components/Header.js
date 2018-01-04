import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { observer } from 'mobx-react';
import store from '../Store';

export default observer(class HeaderMain extends React.Component {



  alertMe(){
    alert('test')
  }

  render() {
    return (
        <Header>
          <Left>
            <Button onPress={this.alertMe.bind(this)} transparent >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{store.header}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
})
