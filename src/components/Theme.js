// // theme.js

// // 1. import `extendTheme` function
// import { extendTheme } from '@chakra-ui/react'

// // 2. Add your color mode config
// const config = {
//   initialColorMode: '#E5E5E5',
//   useSystemColorMode: false,
// }

// // 3. extend the theme
// const theme = extendTheme({ config })

// export default theme

import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#E5E5E5', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('#E5E5E5', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;