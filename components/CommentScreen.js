import React, { Component } from 'react'
import {
  Button,
  View,
  TextInput
} from 'react-native'
import Reminder from '../reminder'
var reminder = new Reminder()

export default class CommentScreen extends Component {
  constructor (props) {
    super(props)

    const { params } = this.props.navigation.state

    this.state = {
      dateObject: params.dateObject,
      comment: 'test'
    }
  }

  _save () {
    reminder.addReminder(this.state.comment, this.state.dateObject)
    this.props.navigation.navigate('ListScreen')
  }

  render () {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(comment) => this.setState({comment})}
          value={this.state.comment}
          autoFocus={true}
        />
        <Button
          title='Done'
          onPress={() => this._save()}
        />
      </View>
    )
  }
}
