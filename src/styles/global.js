export const COLORS = {
  BG: '#100E1D',
  BG_LIGHT: '#1E213A',
  DARK: '#333',
  GRAY: '#aaa',
  LIGHT: '#E7E7EB',
  DANGER: '#ee5253',
  SUCCESS: '#1dd1a1',
  WARNING: '#feca57',
}

const BREAKPOINTS = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${BREAKPOINTS[key]}) { ${style} }`
}

export const STYLE_CARD_TITLE = `
  margin: 0;
  color: ${COLORS.GRAY};
  font-size: 0.9rem;
  text-align: center;
`
