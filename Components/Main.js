import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleSheet, View } from 'native-base';
import { observer } from 'mobx-react';
import HeaderMain from './Header';
import ContentMain from './ContentMain';
import {NativeRouter, Route, Link} from 'react-router-native';
import store from '../Store';

export default observer(class Main extends React.Component {
  render() {
    return (

        <Container>
          <HeaderMain />
          <ContentMain />

        </Container>

    );
  }
})
