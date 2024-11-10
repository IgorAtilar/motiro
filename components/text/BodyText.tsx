import React, { ComponentProps } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { FontNames } from '@/constants/Fonts';

type BodyTextProps = ComponentProps<typeof Text>;

export function BodyText({ children, style, ...props }: BodyTextProps) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FontNames.Roboto_400Regular,
    fontSize: 16,
    color: Colors.gamma,
  },
});
