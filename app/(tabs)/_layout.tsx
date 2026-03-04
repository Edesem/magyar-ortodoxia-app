import React from "react";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS, Platform, Image } from "react-native";
import { COLOURS } from "../../constants/colours";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons.js";
import { FontAwesome6 } from "@expo/vector-icons";

function IOSTabs() {
  return (
    <NativeTabs tintColor={COLOURS.deep_red}>
      <NativeTabs.Trigger name="index">
        <Label>Imák</Label>
        <Icon sf={"book.fill"} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="komboszkini">
        <Label>Komboszkini</Label>
        <Icon sf={"circle.grid.cross.fill"} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function AndroidTabs() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COLOURS.deep_red }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Imák",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={25} name="book-open" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="komboszkini"
        options={{
          title: "Komboszkini",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="gamepad-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function TabsLayout() {
  return Platform.OS === "ios" ? <IOSTabs /> : <AndroidTabs />;
}
