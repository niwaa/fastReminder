import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

var moment = require('moment')

export default class DateScreen extends Component {
  constructor () {
    super()

    this.state = {

      dates: [
              {label: 'Today', value: moment().toObject()},
              {label: 'Tomorrow ' + moment().add(1, 'd').format('dddd'), value: moment().add(1, 'd').toObject()},
              {label: 'Next ' + moment().add(2, 'd').format('dddd'), value: moment().add(2, 'd').toObject()},
              {label: 'Next ' + moment().add(3, 'd').format('dddd'), value: moment().add(3, 'd').toObject()},
              {label: moment().add(4, 'd').format('dddd Do'), value: moment().add(4, 'd').toObject()},
              {label: moment().add(5, 'd').format('dddd Do'), value: moment().add(5, 'd').toObject()},
              {label: moment().add(6, 'd').format('dddd Do'), value: moment().add(6, 'd').toObject()},
              {label: moment().add(7, 'd').format('dddd Do'), value: moment().add(7, 'd').toObject()}
      ]
    }
  }

  _goToNextScreen (value, label) {
    this.props.navigation.navigate('TimeScreen', {dateObject: value, dateLabel: label})
  }

  render () {
    return (
      <View>
        {this.state.dates.map((date, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => this._goToNextScreen(date.value, date.label)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.label}>{date.label}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
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
    margin: 1,
    padding: 10,
    height: 60,
    backgroundColor: '#cccccc'
  },
  label: {
    fontSize: 20
  }
})
