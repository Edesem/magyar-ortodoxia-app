import React from "react";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS, Platform, Image } from "react-native";
import { COLOURS } from "../../constants/colours";
import { Tabs } from "expo-router";

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
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Imák",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/book.png")}
              resizeMode="contain"
              style={{ width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="komboszkini"
        options={{
          title: "Komboszkini",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/grid.png")}
              resizeMode="contain"
              style={{ width: 25, height: 25}}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default function TabsLayout() {
  return Platform.OS === "ios" ? <IOSTabs /> : <AndroidTabs />;
}
