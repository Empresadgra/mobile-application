import React from "react";
import useAuth from "../hooks/useAuth"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomerNavigation } from "./CustomerNavigation";
import { BusinessNavigation } from "./BusinessNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation(): JSX.Element {
  const { isCustomer } = useAuth();

  if (isCustomer) {
    return (
      <CustomerNavigation />
    );
  } else {
    return (
      <BusinessNavigation />
    );
  }
}