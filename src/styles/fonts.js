import { css } from 'styled-components'

import { calibre, bitter, notosans, sfMono } from '../assets/fonts'

const createFontFaces = (family, style = 'normal') => {
  let styles = ''

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const bitterNormal = createFontFaces(bitter)
const bitterItalic = createFontFaces(bitter, 'italic')

const calibreNormal = createFontFaces(calibre)
const calibreItalic = createFontFaces(calibre, 'italic')

const notoSansNormal = createFontFaces(notosans)
const notoSansItalic = createFontFaces(notosans, 'italic')

const sfMonoNormal = createFontFaces(sfMono)
const sfMonoItalic = createFontFaces(sfMono, 'italic')

const Fonts = css`${bitterNormal + bitterItalic + calibreNormal + calibreItalic + notoSansNormal + notoSansItalic + sfMonoNormal + sfMonoItalic}`

export default Fonts
