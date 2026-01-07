import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="product" 
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="home" component={Home} />
            <Stack.Screen
                name="product"
                component={Product}
                options={{
                    title: "Product",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
