import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps71934Navigator from '../features/Maps71934/navigator';
import Settings71912Navigator from '../features/Settings71912/navigator';
import Settings71897Navigator from '../features/Settings71897/navigator';
import NotificationList71896Navigator from '../features/NotificationList71896/navigator';
import Maps71895Navigator from '../features/Maps71895/navigator';
import ArticleList71878Navigator from '../features/ArticleList71878/navigator';
import ArticleList71877Navigator from '../features/ArticleList71877/navigator';
import ArticleList71876Navigator from '../features/ArticleList71876/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps71934: { screen: Maps71934Navigator },
Settings71912: { screen: Settings71912Navigator },
Settings71897: { screen: Settings71897Navigator },
NotificationList71896: { screen: NotificationList71896Navigator },
Maps71895: { screen: Maps71895Navigator },
ArticleList71878: { screen: ArticleList71878Navigator },
ArticleList71877: { screen: ArticleList71877Navigator },
ArticleList71876: { screen: ArticleList71876Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
