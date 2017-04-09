import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

var moment = require('moment')

export default class TimeScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time1: 'in 30min',
      time2: 'in 1 hour',
      time3: moment().add(2, 'h').format('h:m a'),
      time4: moment().add(4, 'h').format('h:m a'),
      time5: moment().add(6, 'h').format('h:m a'),
      time6: moment().add(8, 'h').format('h:m a'),
      time7: moment().add(10, 'h').format('h:m a')
      /*
        in 30 minute
        in 1 hour
        morning wake up : 8:30
        breakfast : 10:00
        noon (12:00pm)
        2pm
        4pm
        6pm
        8pm
        10pm
        midnight
        pick a precise time

      */

    }
  }

  _goToNextScreen () {
    this.props.navigation.navigate('CommentScreen')
  }

  render () {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time1}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time2}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time3}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time4}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time5}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time6}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.time7}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10
  },
  button: {
    height: 80
  }
})
