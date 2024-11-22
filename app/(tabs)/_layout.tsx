import { type FC, type ReactNode } from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { HapticTab } from '@/app/_components/haptic-tab';
import { IconSymbol } from '@/app/_components/ui/icon-symbol';
import TabBarBackground from '@/app/_components/ui/tab-bar-background';
import { Colors } from '@/app/_constants/Colors';
import { useColorScheme } from '@/app/_hooks/use-color-scheme.hook';

const TabLayout: FC = (): ReactNode => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;