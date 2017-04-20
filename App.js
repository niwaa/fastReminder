/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import DateScreen from './components/DateScreen'
import TimeScreen from './components/TimeScreen'
import CommentScreen from './components/CommentScreen'
import ListScreen from './components/ListScreen'


var PushNotification = require('react-native-push-notification')

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token)
  },
    // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification)
  },

    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: 'YOUR GCM SENDER ID',

    // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
    * (optional) default: true
    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    */
  requestPermissions: true
})

export default class app extends Component {
  componentDidMount () {


    PushNotification.setApplicationIconBadgeNumber(5)
  }



  render () {
    return (
      <Navigator />
    )
  }
}


class DateScreenExt extends React.Component {
  static navigationOptions = {
    headerVisible: false
  }

  render() {
    return (
      <DateScreen navigation={this.props.navigation} />
    )
  }
}

class TimeScreenExt extends React.Component {
  static navigationOptions = {
    headerVisible: false
  }

  render() {
    return (
      <TimeScreen navigation={this.props.navigation} />
    )
  }
}

class CommentScreenExt extends React.Component {
  static navigationOptions = {
    headerVisible: false
  }

  render() {
    return (
      <CommentScreen navigation={this.props.navigation} />
    )
  }
}

class ListScreenExt extends React.Component {
  static navigationOptions = {
    headerVisible: false
  }

  render() {
    return (
      <ListScreen navigation={this.props.navigation} />
    )
  }
}

const Navigator = StackNavigator({
  DateScreen: { screen: DateScreenExt },
  TimeScreen: { screen: TimeScreenExt },
  CommentScreen: { screen: CommentScreenExt },
  ListScreen: { screen: ListScreenExt }
})

AppRegistry.registerComponent('fastReminder', () => app)
