import ScrollReveal from 'scrollreveal'

const isSSR = typeof window === 'undefined'
const scrollr = isSSR ? null : ScrollReveal()

export default scrollr
