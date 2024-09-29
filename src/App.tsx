import React from 'react';
import '../gesture-handler';
import {StackNavigator} from './presentation/navigator/StackNavigator';
import {ThemeContexProvider} from './presentation/context/ThemeContex';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContexProvider>
        <StackNavigator />
      </ThemeContexProvider>
    </QueryClientProvider>
  );
};
