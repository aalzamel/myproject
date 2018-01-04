import React, { Component } from 'react';
import { Container, Header, Content, Footer,FooterTab, Button, Text, Icon,View } from 'native-base';
import { observer } from 'mobx-react';
import store from '../Store';
import MyForm from './MyForm';
import MyCard from './MyCard';
import {NativeRouter, Route, Link} from 'react-router-native';


export default observer(class ContentMain extends React.Component {
  constructor(){
    super();
    this.state = {
      button: "",
    }
  }
  changeMe(button){
    this.setState({button: button});
  }


  render() {
    return (
      <NativeRouter>

        <Container>
        <Content padder>
          <Route exact path="/" component={MyForm} />
          <Route path="/x" component={MyCard}/>

        </Content>


        <Footer>
          <FooterTab>
            <Button>
              <Link to='/'>
                <View>
                <Icon name="home" />
                <Text>Home</Text>
                </View>
              </Link>
            </Button>

            <Button>
              <Link to='/x'>
                <View>
                <Icon name="camera" />
                <Text>Camera</Text>
                </View>
              </Link>
            </Button>

            <Button>
              <Link to='/y'>
                <View>
                <Icon name="navigate" />
                <Text>Navigate</Text>
                </View>
              </Link>
            </Button>

            <Button>
              <Link to='/z'>
                <View>
                <Icon name="person" />
                <Text>Contact</Text>
                </View>
              </Link>
            </Button>
          </FooterTab>
        </Footer>
        </Container>

        </NativeRouter>

    );
  }
})
