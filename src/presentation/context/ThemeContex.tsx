import React, { PropsWithChildren } from 'react';
import { createContext } from 'react';
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';
  import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

export const ThemeContex = createContext({
    isDark: false,
    theme: LightTheme,
});

export const ThemeContexProvider = ({children}:PropsWithChildren)=>{

    const colorScheme = useColorScheme();

    const isDarkTheme = colorScheme === 'dark';

    const theme = isDarkTheme ? DarkTheme : LightTheme;


    return(
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <ThemeContex.Provider value={{
                    isDark: isDarkTheme,
                    theme: theme,
                    }}>
                    {children}
                </ThemeContex.Provider>
            </NavigationContainer>
        </PaperProvider>
    );
};
