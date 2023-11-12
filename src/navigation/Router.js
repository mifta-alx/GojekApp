import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Home, DiscountShape, MessageText1, ClipboardText } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#00AA13',
                tabBarInactiveTintColor: '#444648',
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 80,
                    paddingHorizontal:10,
                },
                tabBarLabelStyle: {
                    marginTop: 5,
                    fontSize: 12, 
                    fontWeight: 600,
                    color:"#444648"
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Beranda',
                    tabBarIcon: ({ color }) => (
                        <Home
                            color={color}
                            variant='Bold'
                            size={30}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Promos"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Promo',
                    tabBarIcon: ({ color }) => (
                        <DiscountShape
                            color={color}
                            variant='Bold'
                            size={30}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Orders"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Pesanan',
                    tabBarIcon: ({ color }) => (
                        <ClipboardText
                            color={color}
                            variant='Bold'
                            size={30}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MessageText1
                            color={color}
                            variant='Bold'
                            size={30}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
export default Router;