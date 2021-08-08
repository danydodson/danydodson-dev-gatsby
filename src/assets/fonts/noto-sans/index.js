import NotoSansLightWoff from './light/NotoSans-Light.woff'
import NotoSansLightWoff2 from './light/NotoSans-Light.woff2'
import NotoSansLightItalicWoff from './light-italic/NotoSans-LightItalic.woff'
import NotoSansLightItalicWoff2 from './light-italic/NotoSans-LightItalic.woff2'

import NotoSansRegularWoff from './regular/NotoSans-Regular.woff'
import NotoSansRegularWoff2 from './regular/NotoSans-Regular.woff2'
import NotoSansRegularItalicWoff from './regular-italic/NotoSans-Italic.woff'
import NotoSansRegularItalicWoff2 from './regular-italic/NotoSans-Italic.woff2'

import NotoSansBlackWoff from './black/NotoSans-Black.woff'
import NotoSansBlackWoff2 from './black/NotoSans-Black.woff2'
import NotoSansBlackItalicWoff from './black-italic/NotoSans-BlackItalic.woff'
import NotoSansBlackItalicWoff2 from './black-italic/NotoSans-BlackItalic.woff2'

import NotoSansSemiboldWoff from './semibold/NotoSans-SemiBold.woff'
import NotoSansSemiboldWoff2 from './semibold/NotoSans-SemiBold.woff2'
import NotoSansSemiboldItalicWoff from './semibold-italic/NotoSans-SemiBoldItalic.woff'
import NotoSansSemiboldItalicWoff2 from './semibold-italic/NotoSans-SemiBoldItalic.woff2'

const NotoSansNormalWeights = {
  100: [NotoSansLightWoff, NotoSansLightWoff2],
  400: [NotoSansRegularWoff, NotoSansRegularWoff2],
  500: [NotoSansSemiboldWoff, NotoSansSemiboldWoff2],
  600: [NotoSansBlackWoff, NotoSansBlackWoff2],
}

const NotoSansItalicWeights = {
  100: [NotoSansLightItalicWoff, NotoSansLightItalicWoff2],
  400: [NotoSansRegularItalicWoff, NotoSansRegularItalicWoff2],
  500: [NotoSansSemiboldItalicWoff, NotoSansSemiboldItalicWoff2],
  600: [NotoSansBlackItalicWoff, NotoSansBlackItalicWoff2],
}

const notosans = {
  name: 'Noto Sans',
  normal: NotoSansNormalWeights,
  italic: NotoSansItalicWeights,
}

export default notosans
