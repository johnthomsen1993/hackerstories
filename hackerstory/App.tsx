/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { HackerStoryPage } from './src/app/pages/hacker-story-page';
import store from './src/shared/store/store';
import i18n from './src/shared/util/i18n/i18n';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }),
    [isDarkMode],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <HackerStoryPage />
        </SafeAreaView>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
