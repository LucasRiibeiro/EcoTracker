import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Quiz } from '../screens/Quiz';
import { History } from '../screens/History';
import { Begin } from '../screens/Begin';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="begin"
        component={Begin}
      />
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="quiz"
        component={Quiz}
      />
      <Screen
        name="history"
        component={History}
      />
    </Navigator>
  )
}