import React, { ComponentProps } from 'react';
import { Tabs } from 'expo-router';
import { Icon } from '@/components/icon/Icon';
import { Colors } from '@/constants/Colors';
import { PressableScale } from '@/components/buttons/PressableScale';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '@/assets/logo-small.svg';
import { StatusBar } from 'expo-status-bar';
import { FontNames } from '@/constants/Fonts';

const TabLayoutHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: insets.top + 12,
          paddingLeft: insets.left + 12,
          paddingRight: insets.right + 12,
        },
      ]}
    >
      <Logo width={42} height={42} />
      <Text style={styles.headerText}>Motirõ</Text>
    </View>
  );
};

const getTabScreenOptions = ({
  title,
  iconName,
}: {
  title: string;
  iconName: ComponentProps<typeof Icon>['name'];
}): ComponentProps<typeof Tabs.Screen>['options'] => ({
  title,
  tabBarButton: ({ children, ...props }) => (
    <PressableScale {...props}>{children}</PressableScale>
  ),
  tabBarIcon: ({ color }) => <Icon name={iconName} color={color} />,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarActiveTintColor: Colors.eta,
  tabBarInactiveTintColor: Colors.beta,
});

export default function TabLayout() {
  return (
    <>
      <StatusBar style='dark' />
      <Tabs
        screenOptions={{
          header: () => <TabLayoutHeader />,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tabs.Screen
          name='index'
          options={getTabScreenOptions({
            title: 'Home',
            iconName: 'list',
          })}
        />
        <Tabs.Screen
          name='purchases'
          options={getTabScreenOptions({
            title: 'Compras',
            iconName: 'shopping-cart',
          })}
        />
        <Tabs.Screen
          name='expenses'
          options={getTabScreenOptions({
            title: 'Gastos',
            iconName: 'pie-chart',
          })}
        />
        <Tabs.Screen
          name='profile'
          options={getTabScreenOptions({
            title: 'Perfil',
            iconName: 'user',
          })}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors.delta,
    borderBottomColor: Colors.eta,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 12,
  },
  headerText: {
    color: Colors.eta,
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabBarStyle: {
    backgroundColor: Colors.delta,
    borderTopColor: Colors.eta,
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: 12,
    paddingBottom: Platform.select({ ios: 24, android: 8 }),
    height: Platform.select({ ios: 88, android: 68 }),
  },
  tabBarLabelStyle: {
    fontFamily: FontNames.Roboto_500Medium,
    fontSize: 12,
  },
});
