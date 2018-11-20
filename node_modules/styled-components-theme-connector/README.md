# Styled Components Theme Connector

[![npm](https://img.shields.io/npm/v/styled-components-theme-connector.svg)](https://www.npmjs.com/package/styled-components-theme-connector)
[![Build Status](https://travis-ci.org/psychobolt/styled-components-theme-connector.svg?branch=master)](https://travis-ci.org/psychobolt/styled-components-theme-connector)
[![codecov](https://codecov.io/gh/psychobolt/styled-components-theme-connector/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/styled-components-theme-connector)

[![Dependencies Status](https://david-dm.org/psychobolt/styled-components-theme-connector.svg)](https://david-dm.org/psychobolt/styled-components-theme-connector)
[![Dev Dependencies Status](https://david-dm.org/psychobolt/styled-components-theme-connector/dev-status.svg)](https://david-dm.org/psychobolt/styled-components-theme-connector?type=dev)
[![Peer Dependencies Status](https://david-dm.org/psychobolt/styled-components-theme-connector/peer-status.svg)](https://david-dm.org/psychobolt/styled-components-theme-connector?type=peer)

Connect React components with default themes by wiring styles from [styled-components](https://www.styled-components.com)' ThemeProvider.

## Install

```sh
npm install --save styled-components styled-components-theme-connector
# or
yarn add styled-components styled-components-theme-connector
```

## Example Usage

[DEMOS](https://psychobolt.github.io/styled-components-theme-connector/)

components.jsx
```jsx
import React from 'react';
import { withDefaultTheme, connectTheme } from 'styled-components-theme-connector';
import theme from 'styled-theming';

import StyledItem from './Item'; // styled component

// Wire component style using string selector

const Container = connectTheme('list.container')('div');

const List = connectTheme('list.ul')(({ className, ...props }) => (
  <Container>
    <p>{props.label}</p>
    <ul>{props.children}</ul>
  </Container>
));

export const Item = connectTheme('list.li')(StyledItem);

// With styled-theming (optional):

const boxBackgroundColor = theme('mode', { 
  light: '#fff',
  dark: '#000',
});

const textColor = theme('mode', { 
  light: '#000',
  dark: '#fff',
});

// Wrap root component with a default theme config:

const theme = {
  mode: 'light',
  list: {
    container: css`
      background-color: ${boxBackgroundColor}
      /* styles... */
    `,
    ul: css`
      /* styles... */
    `,
    li: css`
      color: ${textColor}
    `
  }
};

export default withDefaultTheme(theme, 'list' /* - Optional theme name */)(List);
// If theme name is present, only the specified prop can be wired. Other properties can be accessed manually e.g. css`${({ theme }) => theme.mode}`
```

app.jsx
```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';

import List, { Item } from './components'

// Override default theme with ThemeProvider:

const overrides = {
  mode: 'dark',
  myApp: {
    container: 'background-color: #ecd3ee',
    list: css`
      /* styles... */
    `,
  }
};

export default () => (
  <div>
    {/* Use default theme */}
    <List label="Todo List">
      <Item>Clean</Item>
      <Item>Sleep</Item>
      <Item>Work</Item>
    </List>
    {/* Override default theme */}
    <ThemeProvider theme={overrides}>
      <List label="Pets">
        <Item>Dog</Item>
        <Item>Cat</Item>
        <Item>Turtle</Item>
      </List>
    </ThemeProvider>
  </div>
);
```
