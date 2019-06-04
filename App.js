import { createStackNavigator, createAppContainer } from 'react-navigation'
import { setGlobal } from 'reactn'

import HomeScreen from './Home'
import ModalScreen from './Modal'
import DetailsScreen from './Detail'

setGlobal({
  lang: 'pt'
})

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default createAppContainer(RootStack)
