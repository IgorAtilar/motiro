import React, { forwardRef } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const DEFAULT_TARGET_SCALE = 0.92;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const PressableScale = forwardRef(function PressableScale(
  {
    targetScale = DEFAULT_TARGET_SCALE,
    children,
    style,
    onPressIn,
    onPressOut,
    ...rest
  }: {
    targetScale?: number;
    style?: StyleProp<ViewStyle>;
  } & Exclude<PressableProps, 'onPressIn' | 'onPressOut' | 'style'>,
  ref: React.LegacyRef<View>
) {
  const reducedMotion = useReducedMotion();

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      ref={ref}
      accessibilityRole='button'
      onPressIn={(e) => {
        'worklet';
        if (onPressIn) {
          runOnJS(onPressIn)(e);
        }
        cancelAnimation(scale);
        scale.value = withTiming(targetScale, { duration: 100 });
      }}
      onPressOut={(e) => {
        'worklet';
        if (onPressOut) {
          runOnJS(onPressOut)(e);
        }
        cancelAnimation(scale);
        scale.value = withTiming(1, { duration: 100 });
      }}
      style={[!reducedMotion && animatedStyle, style]}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
});
