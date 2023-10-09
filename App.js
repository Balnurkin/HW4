import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpScreen from './components/HelpScreen';
import CountScreen from './components/CountScreen';
import MainScreen from './components/MainScreen';
import AccountScreen from './components/AccountScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={MainScreen} options={{ title: 'Главная страница' }} />
        <Stack.Screen name="Count" component={CountScreen} options={{ title: 'Cчет' }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Помощь' }} />
        <Stack.Screen name="Profile" component={AccountScreen} options={{ title: 'Профиль' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
