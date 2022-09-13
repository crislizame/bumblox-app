import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerMenu} from './component/drawerMenu';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
        <DrawerMenu />
        </NavigationContainer>
    );
}

export default App;