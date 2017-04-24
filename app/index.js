import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal,
  ToastAndroid,
} from 'react-native';

export default class RnProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this.onShowModal = this.showModal.bind(this);
    this.onHideModal = this.hideModal.bind(this);
  }

  showModal() {
    ToastAndroid.show('Opening modal', ToastAndroid.SHORT);

    setTimeout(() => {
      this.setState({
        modalVisible: true,
      });
    }, 1000);

  }

  hideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.onShowModal}>
          Hello World!!!!!!
        </Text>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.onHideModal}
        >
          <Text>
            This is Modal...
          </Text>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});