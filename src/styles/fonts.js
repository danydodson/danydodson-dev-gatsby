import { css } from 'styled-components'

import CalibreLightWoff from '../fonts/calibre/Calibre-Light.woff'
import CalibreLightWoff2 from '../fonts/calibre/Calibre-Light.woff2'
import CalibreLightItalicWoff from '../fonts/calibre/Calibre-LightItalic.woff'
import CalibreLightItalicWoff2 from '../fonts/calibre/Calibre-LightItalic.woff2'

import CalibreMediumWoff from '../fonts/calibre/Calibre-Medium.woff'
import CalibreMediumWoff2 from '../fonts/calibre/Calibre-Medium.woff2'
import CalibreMediumItalicWoff from '../fonts/calibre/Calibre-MediumItalic.woff'
import CalibreMediumItalicWoff2 from '../fonts/calibre/Calibre-MediumItalic.woff2'

import CalibreRegularWoff from '../fonts/calibre/Calibre-Regular.woff'
import CalibreRegularWoff2 from '../fonts/calibre/Calibre-Regular.woff2'
import CalibreRegularItalicWoff from '../fonts/calibre/Calibre-RegularItalic.woff'
import CalibreRegularItalicWoff2 from '../fonts/calibre/Calibre-RegularItalic.woff2'

import CalibreSemiboldWoff from '../fonts/calibre/Calibre-Semibold.woff'
import CalibreSemiboldWoff2 from '../fonts/calibre/Calibre-Semibold.woff2'
import CalibreSemiboldItalicWoff from '../fonts/calibre/Calibre-SemiboldItalic.woff'
import CalibreSemiboldItalicWoff2 from '../fonts/calibre/Calibre-SemiboldItalic.woff2'

import SFMonoRegularWoff from '../fonts/sfmono/SFMono-Regular.woff'
import SFMonoRegularWoff2 from '../fonts/sfmono/SFMono-Regular.woff2'
import SFMonoRegularItalicWoff from '../fonts/sfmono/SFMono-RegularItalic.woff'
import SFMonoRegularItalicWoff2 from '../fonts/sfmono/SFMono-RegularItalic.woff2'

import SFMonoSemiboldWoff from '../fonts/sfmono/SFMono-Semibold.woff'
import SFMonoSemiboldWoff2 from '../fonts/sfmono/SFMono-Semibold.woff2'
import SFMonoSemiboldItalicWoff from '../fonts/sfmono/SFMono-SemiboldItalic.woff'
import SFMonoSemiboldItalicWoff2 from '../fonts/sfmono/SFMono-SemiboldItalic.woff2'

const calibreNormalWeights = {
  100: [CalibreLightWoff, CalibreLightWoff2],
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
}

const calibreItalicWeights = {
  100: [CalibreLightItalicWoff, CalibreLightItalicWoff2],
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
}

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
}

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
}

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
}

const sfmono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
}

const createFontFaces = (family, style = 'normal') => {
  let styles = ''

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'), 
             url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const calibreNormal = createFontFaces(calibre)
const calibreItalic = createFontFaces(calibre, 'italic')

const sfMonoNormal = createFontFaces(sfmono)
const sfMonoItalic = createFontFaces(sfmono, 'italic')

const Fonts = css`${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}`

export default Fonts
