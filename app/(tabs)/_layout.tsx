import React from "react";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS, Platform, Image, useColorScheme } from "react-native";
import { COLOURS } from "../../constants/colours";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons.js";
import { FontAwesome6 } from "@expo/vector-icons";
import useTheme, { Theme } from "../../hooks/useTheme";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

function IOSTabs({ theme }: { theme: Theme }) {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs tintColor={theme.header}>
        <NativeTabs.Trigger name="index">
          <Label>Imák</Label>
          <Icon sf={"book.fill"} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="kanon">
          <Label>Kánon</Label>
          <Icon sf={"bookmark.fill"} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="komboszkini">
          <Label>Komboszkini</Label>
          <Icon sf={"circle.grid.cross.fill"} />
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}

function AndroidTabs({ theme }: { theme: Theme }) {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.header }}>
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
        name="kanon"
        options={{
          title: "Kánon",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="bookmark" color={color} />
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
  const theme: Theme = useTheme();

  return Platform.OS === "ios" ? (
    <IOSTabs theme={theme} />
  ) : (
    <AndroidTabs theme={theme} />
  );
}
