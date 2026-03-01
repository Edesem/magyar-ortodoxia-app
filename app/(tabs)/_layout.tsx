import React from "react";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS, Platform } from "react-native";
import { COLOURS } from "../../constants/colours";

export default function TabsLayout() {
  const isIOS = Platform.OS === "ios";
  
  return (
    <NativeTabs tintColor={COLOURS.deep_red} >
      <NativeTabs.Trigger name="index">
        <Label>Imák</Label>
        <Icon
  sf={isIOS ? "book.fill" : undefined}
  src={!isIOS ? require("../../assets/icons/book.png") : undefined} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="komboszkini">
        <Label>Komboszkini</Label>
        <Icon
          sf={isIOS ? "circle.grid.cross.fill" : undefined}
          src={!isIOS ? require("../../assets/icons/grid.png") : undefined} />
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
