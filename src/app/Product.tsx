import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { View } from "react-native";

export function Product(){
    return (<View style={{ flex:1, padding: 32 }}
    >
     <Header>
         <ButtonIcon name="arrow-circle-left"></ButtonIcon>
        <Title>Product</Title>
     </Header>
    </View>
    )
}