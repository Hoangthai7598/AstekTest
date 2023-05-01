import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import {HomeStackParamList} from '../models/HomeStackModels';
import NameScreen from '../views/NameScreen';
import EmailScreen from '../views/EmailScreen';
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Name">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
