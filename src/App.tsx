import React from 'react';
import '../gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeContexProvider } from './presentation/context/ThemeContex';


export const App = () => {
  return (
    <ThemeContexProvider>
    <StackNavigator/>
    </ThemeContexProvider>
  );
};
