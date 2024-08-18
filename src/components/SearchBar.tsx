import React from 'react';
import { View, TextInput, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SearchBar({ navigation }): JSX.Element {
  const goToGeneralSearch = () => {
    navigation.navigate("GeneralSearch");
  }

  return (
    <TouchableWithoutFeedback onPress={goToGeneralSearch}>
      <View className="flex-row items-center justify-between bg-gray-100 rounded-2xl p-3 mt-6 mb-6">
        <Text className="pl-2">Buscar productos, secciones o negocios</Text>
        <Icon name="search" size={20} color="gray" className="mr-2" />
      </View>
    </TouchableWithoutFeedback>
  );
}

export { SearchBar }