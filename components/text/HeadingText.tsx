import React, { ComponentProps } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { FontNames } from '@/constants/Fonts';

type HeadingTextProps = ComponentProps<typeof Text>;

export function HeadingText({ children, style, ...props }: HeadingTextProps) {
  return (
    <Text style={[styles.heading, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: FontNames.Poppins_600SemiBold,
    fontSize: 28,
    color: Colors.beta,
  },
});
