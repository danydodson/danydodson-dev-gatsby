import CalibreLightWoff from './light/Calibre-Light.woff'
import CalibreLightWoff2 from './light/Calibre-Light.woff2'
import CalibreLightItalicWoff from './light-italic/Calibre-LightItalic.woff'
import CalibreLightItalicWoff2 from './light-italic/Calibre-LightItalic.woff2'

import CalibreMediumWoff from './medium/Calibre-Medium.woff'
import CalibreMediumWoff2 from './medium/Calibre-Medium.woff2'
import CalibreMediumItalicWoff from './medium-italic/Calibre-MediumItalic.woff'
import CalibreMediumItalicWoff2 from './medium-italic/Calibre-MediumItalic.woff2'

import CalibreRegularWoff from './regular/Calibre-Regular.woff'
import CalibreRegularWoff2 from './regular/Calibre-Regular.woff2'
import CalibreRegularItalicWoff from './regular-italic/Calibre-RegularItalic.woff'
import CalibreRegularItalicWoff2 from './regular-italic/Calibre-RegularItalic.woff2'

import CalibreSemiboldWoff from './semibold/Calibre-Semibold.woff'
import CalibreSemiboldWoff2 from './semibold/Calibre-Semibold.woff2'
import CalibreSemiboldItalicWoff from './semibold-italic/Calibre-SemiboldItalic.woff'
import CalibreSemiboldItalicWoff2 from './semibold-italic/Calibre-SemiboldItalic.woff2'

const calibreNormalWeights = {
  300: [CalibreLightWoff, CalibreLightWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
}

const calibreItalicWeights = {
  300: [CalibreLightItalicWoff, CalibreLightItalicWoff2],
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
}

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
}

export default calibre
