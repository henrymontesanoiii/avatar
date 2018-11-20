// @flow
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { omit } from 'lodash';

type Props = {
  children: any
};

export default (theme: {}, themeName: string) => {
  const defaultTheme = themeName ? { [themeName]: theme[themeName] } : theme;
  const rest = themeName ? omit(theme, themeName) : undefined;
  const getTheme = (custom = {}) => {
    const customTheme = themeName ? { [themeName]: custom[themeName] } : custom;
    const customRest = themeName ? omit(custom, themeName) : undefined;
    return {
      ...rest,
      _defaultTheme: defaultTheme,
      _customTheme: customTheme,
      ...customRest,
    };
  };
  return (Component: React.ComponentType<any>) => ({ children, ...props }: Props) => (
    <ThemeProvider theme={getTheme}>
      <Component {...props}>
        {children}
      </Component>
    </ThemeProvider>
  );
};
