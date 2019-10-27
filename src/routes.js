import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      initialRouteName: 'Main',
      headerBackTitleVisible: false,
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#6335DF',
        },
      },
    }
  )
);

export default routes;
