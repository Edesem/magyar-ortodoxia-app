import { View  } from "react-native";
import useTheme from "../../hooks/useTheme";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

export default function Scrollbar({
  progress,
}: {
  progress: SharedValue<number>;
}) {
  const theme = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    const clamped = Math.min(Math.max(progress.value, 0), 1);

    return {
      height: `${clamped * 100}%`,
    };
  }, [progress]);

  return (
    <View
      style={{
        width: 12,
        height: "100%",
        position: "absolute",
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: theme.header,
            borderBottomRightRadius: 10,
            transformOrigin: "top",
            
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}
