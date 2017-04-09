import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

var moment = require('moment')

export default class DateScreen extends Component {
  constructor () {
    super()

    this.state = {
      dayPlus1: 'Tomorrow ' + moment().add(1, 'd').format('dddd Do'),
      dayPlus2: 'Next ' + moment().add(2, 'd').format('dddd'),
      dayPlus3: 'Next ' + moment().add(3, 'd').format('dddd'),
      dayPlus4: moment().add(4, 'd').format('dddd Do'),
      dayPlus5: moment().add(5, 'd').format('dddd Do'),
      dayPlus6: moment().add(6, 'd').format('dddd Do'),
      dayPlus7: moment().add(7, 'd').format('dddd Do')
    }
  }

  _goToNextScreen () {
    this.props.navigation.navigate('TimeScreen')
  }

  render () {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            title='Today'
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus1}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus2}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus3}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus4}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus5}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus6}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={this.state.dayPlus7}
            onPress={() => this._goToNextScreen()}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Pick a date further'
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
