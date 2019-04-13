import {createStackNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import CrearCuenta from './screens/CrearCuenta';
import Login from './screens/Login';


const MainNavigator = createStackNavigator({
  Home: {screen: SplashScreen},
  Login:{
    screen: Login
  },
  Registrer: {screen: CrearCuenta}
});

const App = createAppContainer(MainNavigator);

export default App;