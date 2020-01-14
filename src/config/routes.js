import * as React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Home from '../containers/home';
import Splash from '../containers/splash';
import SearchScreen from '../containers/search';
import StoreList from '../containers/store-list';
import StoreDetail from '../containers/store-detail';

const AppStack = createStackNavigator(
  {
    Home: Home,
    StoreList: StoreList,
    Search: SearchScreen,
    StoreDetail: StoreDetail,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const RootStack = createSwitchNavigator(
  {
    Splash: Splash,
    Home: AppStack,
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppWithNavigationState = createAppContainer(RootStack);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
