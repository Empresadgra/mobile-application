import React, { useRef, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import { View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { CustomerDashboardNavigation } from "./CustomerDashboardNavigation";
import { SearchNavigation } from "./SearchNavigation";
import { ProfileNavigation } from "./ProfileNavigation";
import { PurchaseHistoryNavigation } from "./PurchaseHistoryNavigation";
import { Invoice } from "../screens/Invoice";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

function CustomTabBar({ state, descriptors, navigation }) {
  const tabWidth = width / state.routes.length;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: tabWidth * state.index,
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'white' }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          width: tabWidth * 0.6,
          height: 3,
          backgroundColor: 'black',
          transform: [{ translateX }],
          alignSelf: 'center',
          left: (tabWidth - tabWidth * 0.6) / 2,
        }}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;

        switch (route.name) {
          case 'CustomerDashboard':
            iconName = 'home';
            break;
          case 'SearchProducts':
            iconName = 'search';
            break;
          case 'Purchase':
            iconName = 'file-text';
            break;
          case 'UserProfile':
            iconName = 'user';
            break;
          case 'NewInvoice':
            iconName= 'shopping-cart';
            break;
          default: 
            iconName = 'circle';
            break;
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name={iconName} color={isFocused ? 'black' : 'gray'} size={24} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function CustomerNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="CustomerDashboard"
        component={CustomerDashboardNavigation}
      />
      <Tab.Screen 
        name="SearchProducts"
        component={SearchNavigation}
      />
      <Tab.Screen
        name="UserProfile" 
        component={ProfileNavigation}
      />
      <Tab.Screen
        name="Purchase"
        component={PurchaseHistoryNavigation}
      />
      <Tab.Screen 
        name="NewInvoice"
        component={Invoice}
      />
    </Tab.Navigator>
  );
}