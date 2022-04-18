import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/theme/globalStyles';
import { lightTheme, darkTheme } from '../src/theme/theme';
import { Themes } from '../src/enum/Themes'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, props) => {
    const [currentTheme, setCurrentTheme] = useState<string>(Themes.light);

    const possibleThemes = {
      light: lightTheme,
      dark: darkTheme
    };

    return (
    <ThemeProvider theme={possibleThemes[currentTheme]}>
      <GlobalStyles />
      <button onClick={() => currentTheme === Themes.light ? setCurrentTheme(Themes.light.dark): setCurrentTheme(Themes.light)}>Change Team</button>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Story {...props}/>
      </div>
    </ThemeProvider>
  )
}
]