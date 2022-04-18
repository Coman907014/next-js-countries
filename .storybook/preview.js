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
    const [currentTheme, setCurrentTheme] = useState(Themes.light);

    const possibleThemes = {
      light: lightTheme,
      dark: darkTheme
    };

    return (
    <ThemeProvider theme={possibleThemes[currentTheme]}>
      <GlobalStyles />
      <h3 style={{ color: 'red' }}>Current Theme: {currentTheme}</h3>
      <button onClick={() => currentTheme === Themes.light ? setCurrentTheme(Themes.dark): setCurrentTheme(Themes.light)}>Change Theme</button>
      <div style={{
        maxWidth: '1200px',
        margin: ' 10px auto',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black',
        padding: '5px 0'
      }}>
        <Story {...props}/>
      </div>
    </ThemeProvider>
  )
}
]