import React from "react";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Imák</Label>
        <Icon sf="book.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="komboszkini">
        <Label>Komboszkini</Label>
        <Icon sf="k.circle.fill"/>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
