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

    // var roundedTime = this.roundMoment(moment().add(2, 'h'), moment.duration(15, "minutes"), "ceil")

    let roundedTimes = {
      '30min': moment().add(20, 's'),
      '1h': moment().add(1, 'h'),
      '2h': this.roundMomentAsWanted(moment().add(2, 'h')),
      '4h': this.roundMomentAsWanted(moment().add(4, 'h')),
      '6h': this.roundMomentAsWanted(moment().add(6, 'h')),
      '8h': this.roundMomentAsWanted(moment().add(8, 'h'))
    }

    this.state = {
      dateLabel: params.dateLabel,
      dateObject: params.dateObject,
      times: [
        {label: 'in 30 min', value: roundedTimes['30min'].toObject()},
        {label: 'in 1 hour', value: roundedTimes['1h'].toObject()},
        {label: roundedTimes['2h'].format('hh:mm a'), value: roundedTimes['2h'].toObject()},
        {label: roundedTimes['4h'].format('hh:mm a'), value: roundedTimes['4h'].toObject()},
        {label: roundedTimes['6h'].format('hh:mm a'), value: roundedTimes['6h'].toObject()},
        {label: roundedTimes['8h'].format('hh:mm a'), value: roundedTimes['8h'].toObject()}
      ]
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
    console.log('ajustedDateObject', ajustedDateObject)
    this.props.navigation.navigate('CommentScreen', {dateObject: ajustedDateObject})
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
