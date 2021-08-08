import BitterBoldWoff from './bold/Bitter-Bold.woff'
import BitterBoldItalicWoff from './bold-italic/Bitter-BoldItalic.woff'
import BitterRegularWoff from './regular/Bitter-Regular.woff'
import BitterRegularItalicWoff from './regular-italic/Bitter-Italic.woff'

const bitterNormalWeights = {
  100: [BitterBoldWoff, BitterRegularWoff]
}

const bitterItalicWeights = {
  400: [BitterBoldItalicWoff, BitterRegularItalicWoff]
}

const bitter = {
  name: 'Bitter',
  normal: bitterNormalWeights,
  italic: bitterItalicWeights,
}

export default bitter
