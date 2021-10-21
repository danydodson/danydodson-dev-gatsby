import ScrollReveal from 'scrollreveal'

const isSSR = typeof window === 'undefined'
export const sr = isSSR ? null : ScrollReveal()

export const navDelay = 1000
export const loadDelay = 2000

export const page = {
  prev: '←',
  next: '→',
}

export const keys = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
  ARROW_UP: 'ArrowUp',
  ARROW_UP_IE11: 'Up',
  ARROW_DOWN: 'ArrowDown',
  ARROW_DOWN_IE11: 'Down',
  ENTER: 'Enter',
  ESCAPE_IE11: 'Esc',
  ESCAPE: 'Escape',
  SPACE_IE11: 'Spacebar',
  SPACE: ' ',
  TAB: 'Tab',
}
