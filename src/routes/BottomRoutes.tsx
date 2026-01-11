import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { MaterialIcons } from "@expo/vector-icons";
export type BottomRoutesList = {
    home: undefined;
    product: undefined | { id: string }
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> = BottomTabScreenProps<BottomRoutesList, T>;
const Tab = createBottomTabNavigator<BottomRoutesList>();

export function BottomRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="home" component={Home}
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: () => <MaterialIcons name="home" size={24} />,
                }}

            />
            <Tab.Screen name="product" component={Product}
                options={{
                    tabBarLabel: "Produto",
                    tabBarIcon: () => <MaterialIcons name="add-circle" size={24} />,

                }}
            />
        </Tab.Navigator>
    );
}
