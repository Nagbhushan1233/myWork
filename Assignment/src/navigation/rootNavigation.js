import React from "react"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../controllers/login';
import Orders from "../controllers/order";
import OrderTracking from "../controllers/orderTracking";
import Chat from "../controllers/chat";
import Dashboard from "../controllers/dashboard";

const AppNavigator = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  dashboard:{
    screen:Dashboard,
    navigationOptions: {
      title:'Dashboard',
      headerLeft:null
    }
  },
  orders:{
    screen:Orders,
    navigationOptions: {
      title:'Orders'
    }
  },
  orderTracking:{
    screen:OrderTracking,
    navigationOptions: {
      title:'Order Tracking'
    }
  },
  chat:{
    screen:Chat,
    navigationOptions: {
      title:'Chat'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class AppRootNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}
