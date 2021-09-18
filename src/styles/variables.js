import { css } from 'styled-components'

const variables = css`
  :root {
    /* base colors */
    --white_100: #ffffff;
    --white_200: #bc7b0c;
    --white_300: #d6b885;

    --black_100: #1b1f23;
    --black_200: #1b1f23;
    --black_300: #1b1f23;

    --grey_100: #fafffd;
    --grey_200: #edf2f7;
    --grey_300: #767676;
    --grey_400: #24292e;

    --red_100: #fdaeb7;
    --red_200: #d73a49;
    --red_300: #b31d28;

    --green_100: #dcffe4;
    --green_200: #a2e5b1;
    --green_300: #0a6c21;

    --blue_100: #dbedff;
    --blue_200: #4facf7;
    --blue_300: #5fa1e3;
    --blue_400: #1f73b6;

    --yellow_100: #ffeb3b;
    --yellow_200: #ffeb3b;
    --yellow_300: #ffeb3b;

    --orange_100: #fb853A;
    --orange_200: #fb8532;
    --orange_300: #d15704;

    --purple_100: #d1bcf9;
    --purple_200: #8a63d2;
    --purple_300: #4c2889;
    
    --pink_100: #fedbf0;
    --pink_200: #f692ce;
    --pink_300: #ea4aaa;
    
    --teal_100: #a3dcdc;
    --teal_200: #63c0c0;
    --teal_300: #008080;

    --indigo_100: #d6c0e7;
    --indigo_200: #a269cc;
    --indigo_300: #4b0082;
    
    --black_tint: rgba(0,0,0,0.3);
    --blue_tint: rgba(0,150,255,0.1);
    
    --bg_about: #1b1f23;
    --bg_contact: #1b1f23;
    --bg_featured: #1b1f23;
    --bg_hero: #fafffd;
    --bg_posts: #1b1f23;
    --bg_projects: #1b1f23;

    /* icon colors */
    --col_icon: #f44336;

    /* shadows */
    --shadow_100: #f7fafc;
    --shadow_300: #718096;
    --shadow_900: #1a202C;

    /* fonts */
    --ff_primary: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --ff_mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz_xxs: 12px;
    --fz_xs: 13px;
    --fz_sm: 14px;
    --fz_md: 16px;
    --fz_lg: 18px;
    --fz_xl: 20px;
    --fz_xxl: 22px;

    --fz_heading: 32px;

    --border_radius: 4px;

    /* footer */
    --foot_height: 90px;
    
    /* jobs */
    --tab_height: 42px;
    --tab_width: 120px;

    /* transitions */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --trans_nav_header: all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* nav */
    --nav_height: 90px;
    --nav_scroll_height: 60px;

    /* hamburger */
    --ham_width: 30px;
    --ham_height: 2px;
    --ham_before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham_before_active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham_after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham_after_active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`

export default variables
