import React, { FunctionComponent, useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../src/components/layout/Layout';
import { Themes } from '../src/enum/Themes';
import SiteGlobalStyles from '../src/theme/globalStyles'
import { lightTheme, darkTheme } from '../src/theme/theme';

interface MyAppProps {
  Component: FunctionComponent;
  pageProps: any
}

const  MyApp: ({ Component, pageProps }: MyAppProps) => JSX.Element = ({ Component, pageProps }) => {

  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.light);

  const possibleThemes = {
    light: lightTheme,
    dark: darkTheme
  };

  const onThemeChange = useCallback(() => {
    currentTheme === Themes.light ?
      setCurrentTheme(Themes.dark):
      setCurrentTheme(Themes.light);
  }, [currentTheme])
  return (
    <>
      <ThemeProvider theme={ possibleThemes[currentTheme] }>
        <SiteGlobalStyles />
        <Layout toggleTheme={ onThemeChange }>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
    )
}

export default MyApp
