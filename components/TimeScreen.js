import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'

var moment = require('moment')

export default class TimeScreen extends Component {
  constructor (props) {
    super(props)

    const { params } = this.props.navigation.state

    this.state = {
      dateLabel: params.dateLabel,
      dateObject: params.dateObject,
      times: []
    }
  }

  componentWillMount () {
    this.populateTimes()
  }

  populateTimes () {
    let todayDateObject = moment().toObject()
    let times = []

    // Are we are Today
    if (this.state.dateObject.date === todayDateObject.date &&
        this.state.dateObject.months === todayDateObject.months &&
        this.state.dateObject.years === todayDateObject.years) {
      let roundedTimes = {
        // '30min': moment().add(20, 's'),
        // '1h': moment().add(1, 'm'),
        // '2h': moment().add(10, 'm'),
        // '4h': moment().add(30, 'm'),
        // '6h': moment().add(1, 'h'),
        // '8h': this.roundMomentAsWanted(moment().add(8, 'h'))
        '1min': moment().add(20, 's'),
        '2min': moment().add(2, 'm'),
        '30min': moment().add(30, 'm'),
        '1h': moment().add(1, 'h'),
        '2h': this.roundMomentAsWanted(moment().add(2, 'h')),
        '4h': this.roundMomentAsWanted(moment().add(4, 'h')),
        '6h': this.roundMomentAsWanted(moment().add(6, 'h')),
        '8h': this.roundMomentAsWanted(moment().add(8, 'h'))
      }

      times = [
        {label: '1 min', value: roundedTimes['1min'].toObject()},
        {label: '2 min', value: roundedTimes['2min'].toObject()},
        {label: 'in 30 min', value: roundedTimes['30min'].toObject()},
        {label: 'in 1 hour', value: roundedTimes['1h'].toObject()},
        {label: roundedTimes['2h'].format('hh:mm a'), value: roundedTimes['2h'].toObject()},
        {label: roundedTimes['4h'].format('hh:mm a'), value: roundedTimes['4h'].toObject()},
        {label: roundedTimes['6h'].format('hh:mm a'), value: roundedTimes['6h'].toObject()},
        {label: roundedTimes['8h'].format('hh:mm a'), value: roundedTimes['8h'].toObject()}
      ]
    } else {
      times = [
        {label: '12:01 am', value: {hours: 0, minutes: 1, seconds: 0}},
        {label: '1 am', value: {hours: 1, minutes: 0, seconds: 0}},
        {label: '10 am', value: {hours: 10, minutes: 0, seconds: 0}},
        {label: '12 am', value: {hours: 12, minutes: 0, seconds: 0}},
        {label: '2 pm', value: {hours: 14, minutes: 0, seconds: 0}},
        {label: '3 pm', value: {hours: 15, minutes: 0, seconds: 0}},
        {label: '4 pm', value: {hours: 16, minutes: 0, seconds: 0}},
        {label: '6 pm', value: {hours: 18, minutes: 0, seconds: 0}},
        {label: '8 pm', value: {hours: 20, minutes: 0, seconds: 0}},
        {label: '9 pm', value: {hours: 21, minutes: 0, seconds: 0}},
        {label: '10 pm', value: {hours: 22, minutes: 0, seconds: 0}},
        {label: '11 pm', value: {hours: 23, minutes: 0, seconds: 0}}
      ]
    }

    this.setState({times: times})
  }

  roundMoment (date, duration, method) {
    return moment(Math[method]((+date) / (+duration)) * (+duration))
  }

  roundMomentAsWanted (momentObj) {
    return this.roundMoment(momentObj, moment.duration(60, 'minutes'), 'ceil')
  }

  _goToNextScreen (value) {
    let ajustedDateObject = {
      date: this.state.dateObject.date,
      months: this.state.dateObject.months,
      years: this.state.dateObject.years,
      hours: value.hours,
      minutes: value.minutes,
      seconds: value.seconds,
      milliseconds: 0
    }

    let ajustedDateLabel = this.state.dateLabel + ' ' + moment(ajustedDateObject).format('hh:mm a')
    console.log('ajustedDateObject', ajustedDateObject)
    this.props.navigation.navigate('CommentScreen', {dateObject: ajustedDateObject, dateLabel: ajustedDateLabel})
  }

  render () {
    return (
      <View>
        <Text>{this.state.dateLabel}</Text>
        {this.state.times.map((time, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => this._goToNextScreen(time.value)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.label}>{time.label}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
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
