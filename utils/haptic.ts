import * as Haptics from "expo-haptics"

export const haptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };