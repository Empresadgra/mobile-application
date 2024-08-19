import React from 'react';
import { Text, TextInput, View } from 'react-native';

function ProductForm(): JSX.Element {
  return (
    <View className="bg-white p-2">
      <Text className="text-lg font-semibold">Informacion del producto</Text>
      <Text className="text-gray-400 text-xs">Edita la informacion del producto para darle una buena imagen a tus clientes</Text>
      <View className="pt-4 pb-4">
        <Text>Nombre del producto</Text>
        <TextInput placeholder="Ingresa el nombre del producto" />
      </View>
      <View className="pt-4 pb-4">
        <Text>Descripcion del producto</Text>
        <TextInput placeholder="Ingresa la descripcion del producto" />
      </View>
    </View>
  );
}

export { ProductForm };