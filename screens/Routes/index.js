import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Welcome'
import SingIn from '../Singin'
import Register from '../Register'
import TabBottom from '../navegação/TabBottomScreen'

const Stack = createNativeStackNavigator()
export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Poggers Academy"
                component={TabBottom}
                options={{ headerShown: true, statusBarColor: 'orange', headerStyle:{backgroundColor: 'orange'}}}
            />
        </Stack.Navigator>
    )
}
