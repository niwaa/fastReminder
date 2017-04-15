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

    var roundedTime = this.roundMoment(moment().add(2, 'h'), moment.duration(15, "minutes"), "ceil")

    this.state = {

      dateObject: params.dateObject,
      times: [
        {label: 'in 30 min', value: moment().add(30, 'm').format('hh:mm a')},
        {label: 'in 1 hour', value: moment().add(30, 'm').format('hh:mm a')},
        {label: this.roundMomentAsWanted(moment().add(2, 'h')).format('hh:mm a'), value: moment().add(2, 'h').toObject()},
        {label: moment().add(4, 'h').format('hh:mm a'), value: moment().add(4, 'h').toObject()},
        {label: moment().add(6, 'h').format('hh:mm a'), value: moment().add(4, 'h').toObject()},
        {label: moment().add(8, 'h').format('hh:mm a'), value: moment().add(4, 'h').toObject()}
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

  componentDidMount () {
    console.log('xxx', this.state.dateObject)
  }

  roundMoment (date, duration, method) {
    return moment(Math[method]((+date) / (+duration)) * (+duration))
  }

  roundMomentAsWanted (momentObj) {
    return this.roundMoment(momentObj, moment.duration(30, 'minutes'), 'ceil')
  }

  _goToNextScreen (dateObject) {
    this.props.navigation.navigate('CommentScreen')
  }

  render () {
    return (
      <View>
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
