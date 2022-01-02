import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab_navigator from './tabnavigation'
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator()
const Drawer_navigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Tab_navigator} />
            <Drawer.Screen name="Notifications" component={Profile} />
        </Drawer.Navigator>
    )
}

export default Drawer_navigator