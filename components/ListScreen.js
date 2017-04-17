import React, { Component } from 'react'
import {
  Text,
  ListView,
  View,
  Button,
  AsyncStorage
} from 'react-native'

var moment = require('moment')

export default class ListScreen extends Component {
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds.cloneWithRows(['test'])
    }

    this.loadData ()


  }

  loadData () {
    AsyncStorage.getItem('reminders', (err, result) => {
      if (result !== null) {
        this.setState({dataSource: this.ds.cloneWithRows(JSON.parse(result))})
        console.log(JSON.parse(result))
      }
    })
  }

  _clearAllReminders() {
    let _this = this
    AsyncStorage.clear(function () {
      _this.loadData()
    })
  }

  render () {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <Text>{rowData.comment} {moment(rowData.dateObject).format('dddd Do hh:mm a')}</Text>
          }
          />
          <Button title='Clear'
            onPress={() => this._clearAllReminders()} />
      </View>
    )
  }
}
