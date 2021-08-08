import SFMonoRegularWoff from './SFMono-Regular.woff'
import SFMonoRegularWoff2 from './SFMono-Regular.woff2'
import SFMonoRegularItalicWoff from './SFMono-RegularItalic.woff'
import SFMonoRegularItalicWoff2 from './SFMono-RegularItalic.woff2'

import SFMonoSemiboldWoff from './SFMono-Semibold.woff'
import SFMonoSemiboldWoff2 from './SFMono-Semibold.woff2'
import SFMonoSemiboldItalicWoff from './SFMono-SemiboldItalic.woff'
import SFMonoSemiboldItalicWoff2 from './SFMono-SemiboldItalic.woff2'

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
}

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
}

const sfmono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
}

export default sfmono
