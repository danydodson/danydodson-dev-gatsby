import { css } from 'styled-components'

const variables = css`
  :root {
    /* base colors */
    --white: #ffffff;
    --black: #1b1f23;
    --grey_100: #fafffd;
    --grey_300: #767676;
    --grey_400: #24292e;
    --red_100: #fdaeb7;
    --red_300: #b31d28;
    --green_100: #dcffe4;
    --green_200: #a2e5b1;
    --green_300: #0a6c21;
    --blue_100: #dbedff;
    --blue_200: #4facf7;
    --blue_300: #016E8f;
    --blue_400: #1f73b6;
    --yellow: #ffeb3b;
    --orange: #fb853A;
    --purple: #d1bcf9;
    --pink_100: #fedbf0;
    --pink_200: #f692ce;
    --pink_300: #ea4aaa;
    --teal: #a3dcdc;
    --indigo: #a269cc;
    
    --black_tint: rgba(0,0,0,0.3);
    --blue_tint: rgba(0,150,255,0.1);
    
    --fz_xxs: 12px;
    --fz_xs: 13px;
    --fz_sm: 14px;
    --fz_md: 16px;
    --fz_lg: 18px;
    --fz_xl: 20px;
    --fz_xxl: 22px;
    --fz_xxxl: 32px;
    
    --ff_primary: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --ff_mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    
    --box_shadow: #718096;

    --nav_height: 90px;
    --nav_scroll_height: 60px;
    
    --ham_width: 30px;
    --ham_height: 2px;
    --ham_before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham_before_active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham_after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham_after_active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

    --tab_width: 120px;
    --tab_height: 42px;
    --border_radius: 4px;

    --foot_height: 90px;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --trans_nav_header: all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default variables
