import React, { forwardRef } from 'react';
import { ComponentProps } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Icon } from '../icon/Icon';
import { BodyText } from '../text/BodyText';
import { FontNames } from '@/constants/Fonts';
import { PressableScale } from '../buttons/PressableScale';

type ShoppingListCardProps = {
  id: string;
  title: string;
  description: string;
  onDelete?: () => void;
} & ComponentProps<typeof TouchableOpacity>;

const ShoppingListCard = forwardRef<TouchableOpacity, ShoppingListCardProps>(
  ({ title, description, style, onDelete, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.5}
        style={[styles.container, style]}
        {...props}
      >
        <View style={styles.content}>
          <BodyText style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
            {title}
          </BodyText>
          <BodyText
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {description}
          </BodyText>
        </View>

        <PressableScale style={styles.deleteButton} onPress={onDelete}>
          <Icon name='trash' color={Colors.delta} />
        </PressableScale>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.eta,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: FontNames.Roboto_500Medium,
  },
  description: {
    fontFamily: FontNames.Roboto_400Regular,
    fontSize: 16,
    color: Colors.beta,
  },
  deleteButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.theta,
  },
});

export { ShoppingListCard };
