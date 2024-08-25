import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { NavigationProperties } from '../navigation/types';

const ProductCard = ({ navigation, navigate }: NavigationProperties): JSX.Element => {
  const [counter, setCounter] = useState(1);

  const goToProduct = () => {
    navigation.navigate(navigate);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <TouchableOpacity className="w-full border-b-2 border-gray-100 p-4 pt-8 pb-8" onPress={goToProduct}>
      <View className="flex-row">
        <Image className="w-32 h-32 rounded-2xl mr-4" source={{ uri: "https://preview.us.coca-cola.com/content/dam/nagbrands/us/coke/en/value-collection/coca-cola-1.25-liter-new.png" }} resizeMode="cover" />
        <View className="flex-1 justify-between">
          <View>
            <Text className="font-semibold text-lg mb-1">Nombre del producto</Text>
            <Text className="text-xs text-gray-400 mb-2">Breve descripcion del producto 2XL LIT Si se escribe mucho texto en esta sección esto deberia expandirse</Text>
          </View>
          <View>
            <Text className="font-bold text-lg">$405.76</Text>
          </View>
        </View>
      </View>
      <View className="flex-row mt-4">
        <View className="flex-row flex-1 justify-between items-center border-2 border-gray-100 rounded-full p-1">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full" onPress={decrementCounter}>
            <Icon name="minus" size={16} color="black" />
          </TouchableOpacity>
          <TextInput
            className="text-center text-lg w-12"
            value={counter.toString()}
            onChangeText={(text) => setCounter(parseInt(text) || 0)}
            keyboardType="numeric"
          />
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full" onPress={incrementCounter}>
            <Icon name="plus" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="ml-2 border-2 border-gray-400 rounded-full items-center justify-center w-52">
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export { ProductCard };
