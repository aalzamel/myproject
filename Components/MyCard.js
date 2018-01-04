import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import store from '../Store';
import { observer } from 'mobx-react';
import {ListView} from 'react-native';

export default observer(class MyCard extends React.Component {
constructor(){
  super();
  this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      }),
      list: ['first string', '2nd strinng', 'third string']
  }
}

componentWillMount(){
  store.header = 'My Card',
  this.setState({dataSource: this.state.dataSource.cloneWithRows(this.state.list)})
}

  renderItem(item){
    return (

    <CardItem>
      <Body>
        <Text>
           {item}
        </Text>
      </Body>
    </CardItem>
    )
  }

  render() {
    return (
          <Card>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderItem} />
          </Card>
    );
  }
}
)
