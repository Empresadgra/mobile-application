import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";
import { ProfileOption } from "../components/ProfileOption";

function Profile(): JSX.Element {
  const { 
    isCustomer, 
    changeRoleView 
  } = useAuth();

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} className="pt-14 bg-white">
      <View className="flex-row p-4 pb-7 items-center gap-3 border-b-2 border-gray-100">
        <Image source={{ uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" }} resizeMode="cover" className="w-24 h-24 rounded-full" />
        <View>
          <Text className="text-xl font-semibold">Daniel Garcia Batres</Text>
          <Text className="text-sm text-gray-400">Codigo de usuario: 189289</Text>
        </View>
      </View>
      <ProfileOption iconName="user" optionName="Infomacion personal" optionMessage="Edita tu informacion personal" />
      <ProfileOption iconName="settings" optionName="Configuracion general" optionMessage="Selecciona tus preferencias para la aplicacion" />
      <ProfileOption iconName="copy" lastIconName="repeat" optionName={`Cambiar a vista de ${!isCustomer ? "cliente" : "empleado"}`} onPressOption={changeRoleView} optionMessage="Intercambiar rol de plataforma" />
    </ScrollView>
  );
}

export { Profile };
