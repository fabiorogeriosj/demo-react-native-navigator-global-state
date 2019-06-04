import React from 'react'
import { View, Text, Button } from 'react-native'
import { getGlobal, setGlobal } from 'reactn'

class HomeScreen extends React.Component {
  componentWillMount () {
    setGlobal({
      lang: 'en'
    })
  }

    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Home',
        headerRight: (
          <Button
            style={{ backgroundColor: 'red', color: '#fff' }}
            onPress={() => navigation.navigate('MyModal')}
            title='Info'
            color='#fff'
          />
        )

      }
    }

    render () {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen {getGlobal().lang}</Text>
          <Button
            title='Go to Details'
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      )
    }
}

export default HomeScreen
