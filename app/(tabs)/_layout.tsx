import React from "react";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS } from "react-native";
import { COLOURS } from "../../constants/colours";

export default function TabsLayout() {
  return (
    <NativeTabs
      tintColor={DynamicColorIOS({
        dark: "white",
        light: COLOURS.red,
      })}
    >
      <NativeTabs.Trigger name="index">
        <Label>Imák</Label>
        <Icon sf="book.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="komboszkini">
        <Label>Komboszkini</Label>
        <Icon sf="k.circle.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
