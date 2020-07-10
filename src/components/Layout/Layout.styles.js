import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../../theme/colors'

import PlayfairDisplayEOT from '../../fonts/playfair-display/playfair-display-v21-latin-regular.eot'
import PlayfairDisplayWOFF from '../../fonts/playfair-display/playfair-display-v21-latin-regular.woff'
import PlayfairDisplayWOFF2 from '../../fonts/playfair-display/playfair-display-v21-latin-regular.woff2'
import PlayfairDisplayTTF from '../../fonts/playfair-display/playfair-display-v21-latin-regular.ttf'
import PlayfairDisplaySVG from '../../fonts/playfair-display/playfair-display-v21-latin-regular.svg'

import PlayfairDisplay600EOT from '../../fonts/playfair-display/playfair-display-v21-latin-600.eot'
import PlayfairDisplay600WOFF from '../../fonts/playfair-display/playfair-display-v21-latin-600.woff'
import PlayfairDisplay600WOFF2 from '../../fonts/playfair-display/playfair-display-v21-latin-600.woff2'
import PlayfairDisplay600TTF from '../../fonts/playfair-display/playfair-display-v21-latin-600.ttf'
import PlayfairDisplay600SVG from '../../fonts/playfair-display/playfair-display-v21-latin-600.svg'

import PlayfairDisplayItalicEOT from '../../fonts/playfair-display/playfair-display-v21-latin-italic.eot'
import PlayfairDisplayItalicWOFF from '../../fonts/playfair-display/playfair-display-v21-latin-italic.woff'
import PlayfairDisplayItalicWOFF2 from '../../fonts/playfair-display/playfair-display-v21-latin-italic.woff2'
import PlayfairDisplayItalicTTF from '../../fonts/playfair-display/playfair-display-v21-latin-italic.ttf'
import PlayfairDisplayItalicSVG from '../../fonts/playfair-display/playfair-display-v21-latin-italic.svg'

import PlayfairDisplay600ItalicEOT from '../../fonts/playfair-display/playfair-display-v21-latin-600italic.eot'
import PlayfairDisplay600ItalicWOFF from '../../fonts/playfair-display/playfair-display-v21-latin-600italic.woff'
import PlayfairDisplay600ItalicWOFF2 from '../../fonts/playfair-display/playfair-display-v21-latin-600italic.woff2'
import PlayfairDisplay600ItalicTTF from '../../fonts/playfair-display/playfair-display-v21-latin-600italic.ttf'
import PlayfairDisplay600ItalicSVG from '../../fonts/playfair-display/playfair-display-v21-latin-600italic.svg'

export const GlobalStyle = createGlobalStyle`

:root {
    font-size: 16px;
  }

  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html.no-scroll {
    position: fixed;
    /* Width 100% required as slick carousel breaks inside fixed positioned container */
    width: 100%;
  }

  * {
    box-sizing: border-box;
    background-color: ${colors.palegrey};
  }

/* playfair-display-regular - latin */
@font-face {
  font-family: 'Playfair Display';
  /* font-style: normal; */
  font-weight: 400;
  src: url('${PlayfairDisplayEOT}'); /* IE9 Compat Modes */
  src: local(''),
       url('${PlayfairDisplayEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${PlayfairDisplayWOFF2}') format('woff2'), /* Super Modern Browsers */
       url('${PlayfairDisplayWOFF}') format('woff'), /* Modern Browsers */
       url('${PlayfairDisplayTTF}') format('truetype'), /* Safari, Android, iOS */
       url('${PlayfairDisplaySVG}#PlayfairDisplay') format('svg'); /* Legacy iOS */
}

/* playfair-display-regular - latin */
@font-face {
  font-family: 'Playfair Display';
  /* font-style: normal; */
  font-weight: 600;
  src: url('${PlayfairDisplayEOT}'); /* IE9 Compat Modes */
  src: local(''),
       url('${PlayfairDisplay600EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${PlayfairDisplay600WOFF2}') format('woff2'), /* Super Modern Browsers */
       url('${PlayfairDisplay600WOFF}') format('woff'), /* Modern Browsers */
       url('${PlayfairDisplay600TTF}') format('truetype'), /* Safari, Android, iOS */
       url('${PlayfairDisplay600SVG}#PlayfairDisplay') format('svg'); /* Legacy iOS */
}

/* playfair-display-italic - latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  src: url('${PlayfairDisplayItalicEOT}'); /* IE9 Compat Modes */
  src: local(''),
  url('${PlayfairDisplayItalicEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${PlayfairDisplayItalicWOFF2}') format('woff2'), /* Super Modern Browsers */
       url('${PlayfairDisplayItalicWOFF}') format('woff'), /* Modern Browsers */
       url('${PlayfairDisplayItalicTTF}') format('truetype'), /* Safari, Android, iOS */
       url('${PlayfairDisplayItalicSVG}#PlayfairDisplay') format('svg'); /* Legacy iOS */
}
/* playfair-display-600italic - latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 600;
  src: url('${PlayfairDisplay600ItalicEOT}'); /* IE9 Compat Modes */
  src: local(''),
  url('${PlayfairDisplay600ItalicEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${PlayfairDisplay600ItalicWOFF2}') format('woff2'), /* Super Modern Browsers */
       url('${PlayfairDisplay600ItalicWOFF}') format('woff'), /* Modern Browsers */
       url('${PlayfairDisplay600ItalicTTF}') format('truetype'), /* Safari, Android, iOS */
       url('${PlayfairDisplay600ItalicSVG}#PlayfairDisplay') format('svg'); /* Legacy iOS */
}

/* teko-300 - latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/teko/teko-v9-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Teko Light'), local('Teko-Light'),
       url('../fonts/teko/teko-v9-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/teko/teko-v9-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/teko/teko-v9-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/teko/teko-v9-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/teko/teko-v9-latin-300.svg#Teko') format('svg'); /* Legacy iOS */
}
/* teko-500 - latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/teko/teko-v9-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Teko Medium'), local('Teko-Medium'),
       url('../fonts/teko/teko-v9-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/teko/teko-v9-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/teko/teko-v9-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/teko/teko-v9-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/teko/teko-v9-latin-500.svg#Teko') format('svg'); /* Legacy iOS */
}
/* teko-regular - latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/teko/teko-v9-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Teko Regular'), local('Teko-Regular'),
       url('../fonts/teko/teko-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/teko/teko-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/teko/teko-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/teko/teko-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/teko/teko-v9-latin-regular.svg#Teko') format('svg'); /* Legacy iOS */
}
/* teko-600 - latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/teko/teko-v9-latin-600.eot'); /* IE9 Compat Modes */
  src: local('Teko SemiBold'), local('Teko-SemiBold'),
       url('../fonts/teko/teko-v9-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/teko/teko-v9-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/teko/teko-v9-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../fonts/teko/teko-v9-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/teko/teko-v9-latin-600.svg#Teko') format('svg'); /* Legacy iOS */
}
/* teko-700 - latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/teko/teko-v9-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Teko Bold'), local('Teko-Bold'),
       url('../fonts/teko/teko-v9-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/teko/teko-v9-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/teko/teko-v9-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/teko/teko-v9-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/teko/teko-v9-latin-700.svg#Teko') format('svg'); /* Legacy iOS */
}
`
