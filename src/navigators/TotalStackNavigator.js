import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ScreenPath from "../common/ScreenPath";
import AppSplashScreen from "../screens/splashes/AppSplashScreen";
import AuthStackNavigator from "./AuthStackNavigator";
import MainTabNavigator from "./MainTabNavigator";
import AppStyle from "../common/AppStyle";

const TotalStack = createNativeStackNavigator();

const TotalStackNavigator = (props) => {
    return (
        <View style={[AppStyle.container]}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <TotalStack.Navigator
                        initialRouteName={ScreenPath.Total.Main}
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <TotalStack.Screen
                            name={ScreenPath.Total.Splash}
                            component={AppSplashScreen}
                        />
                        <TotalStack.Screen
                            name={ScreenPath.Total.Auth}
                            component={AuthStackNavigator}
                        />
                        <TotalStack.Screen
                            name={ScreenPath.Total.Main}
                            component={MainTabNavigator}
                        />
                    </TotalStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </View>
    );
};

export default TotalStackNavigator;
