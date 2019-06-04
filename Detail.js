import React from 'react'
import { View, Text, Button } from 'react-native'
import { getGlobal } from 'reactn'

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen')
    }
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen {getGlobal().lang}</Text>
        <Button
          title='Go to Detailss... again'
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title='Update the title'
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
      </View>
    )
  }
}
export default DetailsScreen
