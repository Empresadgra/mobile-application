import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Dashboard: undefined;
  ProductData: undefined;
  NewInvoice: undefined;
  ShowProduct: undefined;
}

export interface NavigationProperties {
  navigation: StackNavigationProp<RootStackParamList>,
  navigate: keyof RootStackParamList;
}